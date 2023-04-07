# Use the official Node.js runtime as a parent image
FROM node:14.17.0


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

# Expose port 4000 for the Express server
EXPOSE 4000

# Start the Express server
CMD ["npm", "start"]
