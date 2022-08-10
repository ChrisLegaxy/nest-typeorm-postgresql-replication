FROM node:14-alpine as base

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

FROM base as dev

CMD ["yarn", "start:dev"]

FROM dev as build

RUN yarn build

FROM base as prod

COPY --chown=node:node --from=build /usr/src/app/dist/ ./dist

RUN apk del .build-deps && apk add --no-cache --virtual .app-deps ffmpeg

CMD ["node", "./dist/main.js"]
