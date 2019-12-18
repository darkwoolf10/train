FROM php:7.3-apache

ENV APACHE_DOCUMENT_ROOT=/var/www/html/public

RUN apt-get update && apt-get install -y libpq-dev && docker-php-ext-install \
    pdo pdo_pgsql \
    && a2enmod \
    rewrite