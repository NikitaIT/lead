import { Inject, Injectable } from '@nestjs/common';
import moment from 'moment';
import winston from 'winston';
import { Logger, Config, LogLevel } from '../ports';

/**
 * Provides a means to write log messages.
 */
@Injectable()
export class WinstonLogger implements Logger {
  public logger: winston.Logger;

  constructor(@Inject(Config) private config: Config) {
    const formatter = winston.format((info) => {
      if (info.level === LogLevel.http) {
        // HTTP messages are already formatted by the middleware, so just pass through
        return info;
      }
      if (!config.suppressDateAndLevelInMsg) {
        info.message = `[${moment().format('ddd MMM DD HH:mm:ss YYYY')}] [${
          info.level
        }] ${info.message}`;
      }
      return info;
    });
    this.logger = winston.createLogger({
      level: config.logLevel,
      format: formatter(),
    });
    this.logger.add(
      new winston.transports.Console({
        format: winston.format.json(),
        stderrLevels: [LogLevel.error, LogLevel.warn],
      })
    );
  }

  /**
   * Writes a log message.
   * @param level the severity of the message
   * @param message the log message
   */
  public log(level: LogLevel, message: string): void;
  /**
   * Writes a log message with the {@link LogLevel.info} log level.
   * @param message the log message
   */
  public log(message: string): void;
  public log(p0: LogLevel | string, p1?: string, meta?: any) {
    const logLevel = LogLevel.is(p0) ? p0 : LogLevel.info;
    const message = LogLevel.is(p0) && p1 ? p1 : p0;
    this.logger.log(logLevel, message, meta);
  }

  /**
   * Adds default metadata to every log message.
   * @param correlationId the log message
   */
  public onTrace(correlationId: string) {
    this.logger.defaultMeta = { correlationId };
  }
  /**
   * Writes a log message with the {@link LogLevel.error} log level.
   * @param message the log message
   */
  public error(message: string) {
    this.log(LogLevel.error, message);
  }

  /**
   * Writes a log message with the {@link LogLevel.warn} log level.
   * @param message the log message
   */
  public warn(message: string) {
    this.log(LogLevel.warn, message);
  }

  /**
   * Writes a log message with the {@link LogLevel.info} log level.
   * @param message the log message
   */
  public info(message: string) {
    this.log(LogLevel.info, message);
  }

  /**
   * Writes a log message with the {@link LogLevel.http} log level.
   * @param message the log message
   */
  public http(message: string) {
    this.log(LogLevel.http, message);
  }

  /**
   * Writes a log message with the {@link LogLevel.verbose} log level.
   * @param message the log message
   */
  public verbose(message: string) {
    this.log(LogLevel.verbose, message);
  }

  /**
   * Writes a log message with the {@link LogLevel.debug} log level.
   * @param message the log message
   */
  public debug(message: string) {
    this.log(LogLevel.debug, message);
  }

  /**
   * Writes a log message with the {@link LogLevel.silly} log level.
   * @param message the log message
   */
  public silly(message: string) {
    this.log(LogLevel.silly, message);
  }
}
