const dotenv = require('dotenv');
const path = require('path');

const envPath = path.resolve(process.cwd(), '.env');

dotenv.config({
  path: envPath,
});

module.exports = {
  development: {
    dialect: 'postgres',

    host: process.env.DB_HOST,

    port: Number(process.env.DB_PORT),

    username: process.env.DB_USER,

    password: process.env.DB_PASSWORD,

    database: process.env.DB_NAME,
  },
};
