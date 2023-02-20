import { NestLoggerService } from './nestjs';

export abstract class Logger
  implements LoggerService, HttpLogger, RequestLogger {}
export interface Logger extends LoggerService, HttpLogger, RequestLogger {}

export interface LoggerService extends NestLoggerService {
  /**
   * Write a 'debug' level log.
   */
  debug(message: any, ...optionalParams: any[]): any;
  /**
   * Write a 'verbose' level log.
   */
  verbose(message: any, ...optionalParams: any[]): any;
}

export interface HttpLogger {
  /**
   * Writes a log message with the {@link LogLevel.http} log level.
   * @param message the log message
   */
  http(message: string): void;
}

export interface RequestLogger {
  /**
   * Adds default metadata to every log message.
   * @param correlationId the log message
   */
  onTrace(correlationId: string): void;
}
