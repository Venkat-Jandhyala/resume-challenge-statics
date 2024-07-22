#!/bin/sh

# Replace the placeholder with the actual port value
sed -i "s/__PORT__/${PORT}/g" /etc/nginx/nginx.conf

# Start NGINX
nginx -g "daemon off;"
