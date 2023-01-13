FROM node:7.10-slim
WORKDIR /usr/src/sji-bdl-client
COPY package*.json ./
RUN apt-get update
RUN apt-get install -y --force-yes dh-autoreconf libpng-dev netcat
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]
