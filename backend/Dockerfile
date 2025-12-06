<<<<<<< HEAD
# Use Node.js 18 as base
FROM node:18
=======
# Use Node.js LTS image
FROM node:20-alpine
>>>>>>> 882e5d65c343f689915835fc2f35ed1fd4b7d40c

# Set working directory
WORKDIR /app

<<<<<<< HEAD
# Copy package.json and package-lock.json first
=======
# Copy package.json and package-lock.json
>>>>>>> 882e5d65c343f689915835fc2f35ed1fd4b7d40c
COPY package*.json ./

# Install dependencies
RUN npm install

<<<<<<< HEAD
# Copy everything else (includes index.js, models/, scripts/, etc.)
=======
# Copy the rest of the code
>>>>>>> 882e5d65c343f689915835fc2f35ed1fd4b7d40c
COPY . .

# Expose backend port
EXPOSE 5000

<<<<<<< HEAD
# Start backend server by default
CMD ["node", "index.js"]
=======
# Start the server
CMD ["npm", "start"]
>>>>>>> 882e5d65c343f689915835fc2f35ed1fd4b7d40c
