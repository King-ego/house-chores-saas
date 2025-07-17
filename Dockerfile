FROM node:24.0.0

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npx prisma generate --schema=./prisma/postgres/schema.prisma

# Expose the port the app runs on
EXPOSE 8000

# Start the application

CMD npm run postgres:migrate:dev && npm run start:dev