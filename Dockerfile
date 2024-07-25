# get node version
FROM node:14 AS build
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
# get nginx:apline server
FROM nginx:alpine
#from node build push build folder to nginx/html (nginx webroot)
COPY --from=build /app/build /usr/share/nginx/html
# Copy custom NGINX configuration file
COPY nginx.conf /etc/nginx/nginx.conf
# Copy SSL cert for validation
COPY A4309CDE2D3E79929C61C284BB594E2C.txt /usr/share/nginx/html/.well-known/pki-validation
# Copy the startup script
COPY start-nginx.sh /usr/bin/start-nginx.sh
RUN chmod +x /usr/bin/start-nginx.sh
# expose http and https on the container
EXPOSE 8080
# once everything is set run daemon off, as we can run this using docker
CMD ["/usr/bin/start-nginx.sh"]