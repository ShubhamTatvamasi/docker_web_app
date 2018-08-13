FROM node:8-alpine
ENV PORT 80
WORKDIR /usr/src/app
ADD . .
RUN npm install
CMD npm start
