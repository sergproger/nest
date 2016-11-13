FROM node:latest

ADD package.json package.json
RUN npm install
ADD . .
RUN npm build

EXPOSE 8080

CMD npm run server
