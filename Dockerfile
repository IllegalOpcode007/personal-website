FROM node:14

WORKDIR /app

# Do an init setup of your project:
# 1. npm install -g create-react-app => This tool will sets up a new react project with a basic file structure and some useful development tools
# 2. create-react-app <project-name> => Create new project
# 3. Navigate to new project directory => cd <project-name>
# 4. npm install => Install dependencies
# 5. npm start => Start development server. Edit source code in src folder and see it change in browser
# 6. npm run build => Build the application for production. This will create a prod-ready build of your application in the `build` folder. 

# Styling
# 1. To add 'style-components' to package.json: npm install styled-components --save 

COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that the app will be running on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]


# Build the docker image by running the following command in project directory:
# docker build -t my-react-app .

# Run the container by running the following command:
# docker run -p 3000:3000 my-react-app

# Open your browser and navigate to 'http://localhost:3000' to see your react app 
# Running in the Docker container.
