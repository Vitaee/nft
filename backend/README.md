# 🧰 TypeScript MongoDB RestApi

> This project particularly focused around Domain-Driven Design and large-scale enterprise application patterns.

### Features
- Developing scalable TypeScript Express application.
- Testing with Jest
- Linting with Eslint and Prettier
- Pre-commit hooks with Husky
- VS Code debugger scripts
- Local development with Nodemon
- Access & Refresh JWT Authentication
- CRUD operations for User Model.
- Using PostgreSQL database with sequelize. 

### Environments

#### Development environment
First off all install all dependencies with ```npm i``` command. In this project we have two environments. For development you should create ```.env.development``` file in project directory ( backend folder ).

For now, in ```.env.development```  file we are storing ``` APP_PORT ``` variable. So your .env file will look like this:
```
APP_PORT=3001
```
#### Production environment

In your remote server, you should create ```.env.production``` file. Secondly, put your necessary variables inside to it. Then run this command ```npm run start```. 

### Scripts

#### `npm run start:dev`

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

#### `npm run start`

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/server.js`.

#### `npm run build`

Builds the app at `build`, cleaning the folder first.

#### `npm run test`

Runs the `jest` tests once. You can create `.env.test` file to use another environemnt for testing.

#### `npm run test:dev`

Run the `jest` tests in watch mode, waiting for file changes.

#### `npm run prettier-format`

Format your code.

#### `npm run prettier-watch`

Format your code in watch mode, waiting for file changes.

### Used Technologies
<div class="row">
  <img src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg" />
  <img src="https://www.vectorlogo.zone/logos/nodemonio/nodemonio-icon.svg" />
  <img src="https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg" />
  <img src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" />
  <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" />
  <img src="https://www.vectorlogo.zone/logos/nginx/nginx-icon.svg" />
</div>

### Contributors
<a href="https://github.com/Vitaee/nft/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Vitaee/nft" />
</a>