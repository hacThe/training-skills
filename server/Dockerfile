# Base image
FROM node:16.13.0-alpine3.14

# Set the working directory
WORKDIR /server

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install


# Expose port 3000
EXPOSE 3000

# Start the app
CMD [ "npm", "run", "start:dev" ]
