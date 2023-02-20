import { DataSourceOptions } from 'typeorm';

/**
 * Contains configuration options for the TypeORM database.
 * Note that connection details, such as host and credentials, come from the environment variables, via the main config.
 */
export interface TypeORMDbConfig {
  entities: DataSourceOptions['entities'];
}
