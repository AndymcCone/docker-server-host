FROM node:slim

WORKDIR /serverdata
COPY . .

RUN npm install nodemon

CMD ["npm", "run", "dev"]