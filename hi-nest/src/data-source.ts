//import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

// import * as path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
dotenv.config({ path: `.env.dev` });

export const config: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['dist/**/*.entity.js'],
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  // entities: [path.join(__dirname + '/../**/*.entity.{js,ts}')],
  //위 방법으로 하면 에러남. 엔티티 직접 import해서 가져오면 된다.
  synchronize: false,
};

export default new DataSource(config);
