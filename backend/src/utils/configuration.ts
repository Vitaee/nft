/* eslint-disable no-console */
import dotenv from 'dotenv';

dotenv.config({ path: `${process.env.PWD}` + `/.env.${process.env.NODE_ENV}` });

const configs: { [name: string]: string | undefined } = {
  port: process.env.APP_PORT,
  db_name: process.env.DB_NAME,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_host: process.env.DB_HOST,
  access_token_private_key: process.env.ACCESS_TOKEN_PRIVATE_KEY,
  refresh_token_private_key: process.env.REFRESH_TOKEN_PRIVATE_KEY,
};

export default configs;
