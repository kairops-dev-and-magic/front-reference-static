FROM nginx:1.14.2

COPY src/ /usr/share/nginx/html/
RUN chmod -R o+rx /usr/share/nginx/html

