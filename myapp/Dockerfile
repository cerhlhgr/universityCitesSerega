FROM node:16.13.2-alpine AS development

WORKDIR ./opt/app

COPY package*.json ./

COPY . .

RUN npm i

