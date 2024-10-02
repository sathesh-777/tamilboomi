FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -f

COPY . .

RUN npm run build

EXPOSE 8000

CMD ["node", "build/server.js"]
