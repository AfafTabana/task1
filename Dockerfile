FROM node:14-alpine
WORKDIR /app
COPY afaf.js package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD node afaf.js