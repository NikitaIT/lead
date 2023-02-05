FROM nginx

ARG NGINX_ENV
ARG NGINX_CRLS_LIST
ARG NGINX_PATH_TO_CRLS_LIST

RUN apt update \
    && apt install -qy curl \
    && bash -c "mkdir -p /etc/ssl/{private,crls,ca}" \
    && chmod 600 /etc/ssl/private \
    && curl ${NGINX_CRLS_LIST} -o /etc/${NGINX_PATH_TO_CRLS_LIST} \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

COPY ${NGINX_ENV}/${NGINX_ENV}-nginx.conf /etc/nginx/nginx.conf
COPY ${NGINX_ENV}/${NGINX_ENV}-nginx.pem /etc/ssl/certs/nginx.pem

COPY nginx.key    /etc/ssl/private/nginx.key
COPY nginx.pass   /etc/ssl/private/nginx.pass
