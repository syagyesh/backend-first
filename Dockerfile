FROM node:22-alpine

RUN apk add --no-cache git

WORKDIR /app

# Copy only package.json and package-lock.json first
COPY package*.json ./

# Install dev dependencies for build
RUN npm install

# Copy the rest of the files
COPY . .

# Start the app
ENTRYPOINT ["npm", "start"]
