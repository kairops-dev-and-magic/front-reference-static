FROM nginx

COPY src/ /usr/share/nginx/html/
RUN chmod -R o+r /usr/share/nginx/html

