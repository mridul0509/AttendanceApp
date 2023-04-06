# Use the official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 for the Express server
EXPOSE 3000

# Start the Express server
CMD ["node", "app.js"]
