# Use Node.js Alpine base image
FROM node:20-alpine

# Create and set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json .

# Install dependencies
RUN npm install

# Copy the entire codebase to the working directory
COPY . .

# Expose the port your app runs on (replace <PORT_NUMBER> with your app's actual port)
EXPOSE 5173

# Define the command to start your application (replace "start" with the actual command to start your app)
CMD [ "npm","run","dev" ]