import { Sequelize } from 'sequelize-typescript';
import databaseConfig from '../config/database';
import User from './models/User';
import Organization from './models/Organization';

const sequelize = new Sequelize({
  ...databaseConfig,
  models: [User, Organization],
  logging: false,
});

export default sequelize;
