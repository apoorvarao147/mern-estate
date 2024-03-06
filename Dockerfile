FROM node:18
WORKDIR /build
COPY package.json .
RUN npm install
COPY . .
CMD npm run start
