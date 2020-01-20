FROM node:10.14.1

# Create app directory
RUN mkdir -p /usr/src/frontend

WORKDIR /usr/src/frontend

COPY package.json /usr/src/frontend

RUN npm install

CMD ["npm", "start"]
