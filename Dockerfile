FROM node:14.0.0-slim
WORKDIR /usr/src/sji-bdl-client
COPY package*.json ./
COPY . .
RUN apt-get update && \
  apt-get install -y --force-yes dh-autoreconf libpng-dev netcat && \
  npm install && \
  ./node_modules/.bin/webpack -d
EXPOSE 3000
ENTRYPOINT [ "node", "bin/www" ]
