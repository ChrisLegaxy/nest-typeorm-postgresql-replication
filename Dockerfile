# For Development Environment
FROM node:14-alpine

# Work Directory
WORKDIR /usr/src/app

RUN npm i -g npm@latest
RUN apk add --no-cache --virtual .build-deps git python3 build-base

# Node Modules
COPY package.json yarn.lock ./

# Install node modules
RUN yarn cache clean
RUN yarn install

# Copy app source to work directory
COPY . .

# Build project
RUN yarn build

RUN apk del .build-deps && apk add --no-cache --virtual .app-deps ffmpeg

# Build and run the app
CMD ["node", "./dist/main.js"]
