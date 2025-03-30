# Use the official Node.js image
FROM node:22.11

# Set the working directory inside the container
WORKDIR /frontend

# Copy package.json and package-lock.json first (for better caching)
COPY ./frontend/package.json ./frontend/package-lock.json ./

# Force React 18 to resolve dependency conflicts
RUN npm install react@18 react-dom@18

# Copy the rest of the project files
COPY ./frontend /frontend

# Build the frontend
RUN npm run build

# Expose port 5173 for the frontend application
EXPOSE 5173

# Command to run when starting the container
CMD ["npm", "run", "dev"]