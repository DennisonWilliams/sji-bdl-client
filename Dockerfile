FROM node:14-alpine
WORKDIR /usr/src/sji-bdl-client
COPY package*.json ./
RUN apk add --update-cache netcat-openbsd automake autoconf g++ libpng-dev make libtool bash
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]
