FROM node:10
WORKDIR /kaholo
COPY package.json /kaholo
RUN npm install
COPY . /kaholo
CMD ["npm", "start"]
