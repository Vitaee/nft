FROM node:16

WORKDIR /src

COPY package*.json ./

RUN npm install

# If we building our code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8000
CMD [ "npm run start"]