import { SnakeNamingStrategy } from './src/config/typeorm/SnakeNamingStrategy';

const { NODE_ENV, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASSWORD,
  synchronize: false,
  dropSchema: false,
  logging: NODE_ENV === 'development',
  entities: [`src/modules/**/*.entity{.ts,.js}`],
  migrations: [`src/db/migrations/**/*{.ts,.js}`],
  subscribers: [`src/modules/**/*.subscriber{.ts,.js}`],
  cli: {
    entitiesDir: 'src/db/entities',
    migrationsDir: 'src/db/migrations',
    subscribersDir: 'src/db/subscribers',
  },
  namingStrategy: new SnakeNamingStrategy(),
};
