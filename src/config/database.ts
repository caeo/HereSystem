import dotenv from 'dotenv';
import { Dialect } from 'sequelize';
dotenv.config();

interface DatabaseConfig {
  dialect: Dialect;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

const databaseConfig: DatabaseConfig = {
  dialect: 'postgres',
  host: process.env.DB_HOST || '',
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || '',
};

export default databaseConfig;
