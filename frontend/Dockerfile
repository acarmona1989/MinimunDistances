FROM node:10.14.1
RUN mkdir -p /usr/src/minimumdistances
COPY build /usr/src/minimumdistances/build
COPY public /usr/src/minimumdistances/public
COPY src /usr/src/minimumdistances/src
COPY deploy-package.json /usr/src/minimumdistances/package.json
# COPY package.json /usr/src/minumindistances/package.json

WORKDIR /usr/src/minimumdistances
RUN echo 'package-lock=false' >> .npmrc
RUN npm install
RUN npm install react-scripts -g --silent

CMD ["npm", "start"]