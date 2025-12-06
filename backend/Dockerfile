# Use Node.js 18 as base
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy everything else (includes index.js, models/, scripts/, etc.)
COPY . .

# Expose backend port
EXPOSE 5000

# Start backend server by default
CMD ["node", "index.js"]
