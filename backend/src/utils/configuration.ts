/* eslint-disable no-console */
import dotenv from 'dotenv';

dotenv.config({ path: `${process.env.PWD}` + `/.env.${process.env.NODE_ENV}` });

const configs = {
  port: process.env.APP_PORT,
};

export default configs;
