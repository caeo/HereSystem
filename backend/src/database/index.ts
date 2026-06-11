import { Sequelize } from 'sequelize-typescript';
import databaseConfig from '../config/databaseConfig';
import User from './models/User';
import Organization from './models/Organization';

console.log(databaseConfig);

const sequelize = new Sequelize({
  ...databaseConfig,
  models: [User, Organization],
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Database connected');
  })
  .catch(console.error);

export default sequelize;
