# get node version
FROM node:18.15.0-alpine AS build
#set /app as working directory
WORKDIR /app
#copy package.json from code base to app
COPY package*.json ./
#run npm install
RUN npm install
#now copy project over
COPY . .
#run npm build
RUN npm run build

RUN npm install -g serve

ENV PORT=8080

# CMD ["sh", "-c", "echo $PORT && serve -s build -l $PORT"]
# Serve the build
CMD ["npx", "serve", "-s", "build", "-l", "${PORT}"]
