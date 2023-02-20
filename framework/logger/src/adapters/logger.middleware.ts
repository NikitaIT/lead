import { Injectable, NestMiddleware } from '@nestjs/common';
import assert from 'assert';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { Logger, Request, Response } from '../ports';

@Injectable()
export class LoggerMiddleware implements NestMiddleware<Request, Response> {
  public constructor(private logger: Logger) {}

  public use(req: Request, res: Response, next: () => void): void {
    const before = Date.now();
    const id = req.headers['x-request-id']
      ? req.headers['x-request-id']
      : uuidv4();
    assert(typeof id === 'string', 'x-request-id should be string'); // what if not?
    this.logger.onTrace(id);
    const span = req.headers['x-span'] || '0';
    req.correlationId = id;
    req.parentSpan = span;
    req.span = span;
    next();
    res.on('close', () =>
      this.logger.http(this.generateLogMessage(req, res, Date.now() - before))
    );
  }

  private getResponseSize(res: Response): number {
    const sizeRaw = res.getHeader('Content-Length');
    if (typeof sizeRaw === 'number') {
      return sizeRaw;
    }
    if (typeof sizeRaw === 'string') {
      const parsed = parseInt(sizeRaw, 10);
      if (isNaN(parsed)) {
        return 0;
      }
      return parsed;
    }
    return 0;
  }
  /*
  date=${moment().format('DD/MMM/YYYY:HH:mm:ss ZZ')} trace=${id} type=IncomingRequest endpoint=${req.originalUrl} duration=${duration} span=${span} status=${res.statusCode} 
  */
  private generateLogMessage(
    req: Request,
    res: Response,
    timeTaken: number
  ): string {
    const size = this.getResponseSize(res);
    const terms: { [key: string]: string } = {
      '%h': req.socket.remoteAddress || '-',
      '%l': '-',
      '%x1': `span=${req.span}`,
      '%x2': `trace=${req.correlationId}`,
      '%x3': 'type=Incoming request',
      '%x4': `body=${JSON.stringify(req.body)}`,
      '%u': '-', // todo: parse req.headers.authorization?
      '%t': `date=[${moment().format('DD/MMM/YYYY:HH:mm:ss ZZ')}]`,
      '%r': `request=${req.method} ${req.originalUrl} ${req.httpVersion}`,
      '%>s': `status=${res.statusCode}`,
      '%b': size === 0 ? 'size=-' : `size=${size}`,
      '%tt': `duration=${timeTaken}`,
    };
    let str = '%t %x2 %x3 %x4 "%r" %x1 %>s %b %tt';
    for (const term in terms) {
      if (term in terms) {
        str = str.replace(term, terms[term]);
      }
    }
    // eslint-disable-next-line no-useless-escape
    str = str.replace(/%\{([a-zA-Z\-]+)\}i/g, (match, p1) => {
      const header = req.headers[`${p1}`.toLowerCase()];
      if (header == null) {
        return '-';
      }
      if (Array.isArray(header)) {
        return `"${header.join(',')}"`;
      }
      return `"${header}"`;
    });
    return str;
  }
}
