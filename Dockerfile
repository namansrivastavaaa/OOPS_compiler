FROM node:20-bullseye-slim

# Install Java (OpenJDK)
RUN apt-get update && \
    apt-get install -y default-jdk && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all project files
COPY . .

# Expose the port (Render provides the PORT environment variable)
EXPOSE 3000

# Start the server
CMD ["node", "Backend/server.js"]
