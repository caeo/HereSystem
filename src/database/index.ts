import { Sequelize } from 'sequelize-typescript';
import databaseConfig from '../config/database';
import User from './models/User';

const sequelize = new Sequelize({
  ...databaseConfig,
  models: [User],
  logging: false,
});

export default sequelize;
