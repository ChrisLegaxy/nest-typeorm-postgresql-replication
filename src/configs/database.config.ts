import { registerAs } from "@nestjs/config";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export default registerAs(
  "database",
  (): PostgresConnectionOptions => pgDefault,
);

const pgDefault: PostgresConnectionOptions = {
  type: "postgres",
  synchronize: true,
  logging: false,
  entities: ["dist/**/*.entity.js"],
  host: process.env.POSTGRESQL_HOST || "127.0.0.1",
  port: 5432,
  username: process.env.POSTGRESQL_USERNAME || "postgres",
  password: process.env.POSTGRESQL_PASSWORD || "postgres",
  database: process.env.POSTGRESQL_DATABASE || "postgres",
};

// eslint-disable-next-line
const pgMasterSlave: PostgresConnectionOptions = {
  type: "postgres",
  synchronize: true,
  logging: false,
  entities: ["dist/**/*.entity.js"],
  replication: {
    master: {
      host: "127.0.0.1",
      port: parseInt(process.env.POSTGRESQL_MASTER_PORT) || 5432,
      username: process.env.POSTGRESQL_USERNAME || "postgres",
      password: process.env.POSTGRESQL_PASSWORD || "postgres",
      database: process.env.POSTGRESQL_DATABASE || "postgres",
    },
    slaves: [
      {
        host: "127.0.0.1",
        port: parseInt(process.env.POSTGRESQL_SLAVE_PORT) || 5432,
        username: process.env.POSTGRESQL_USERNAME || "postgres",
        password: process.env.POSTGRESQL_PASSWORD || "postgres",
        database: process.env.POSTGRESQL_DATABASE || "postgres",
      },
    ],
  },
};
