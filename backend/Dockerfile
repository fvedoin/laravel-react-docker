ARG PHP_VERSION=8.0.5

FROM php:${PHP_VERSION}-fpm as dev-base
RUN apt-get update && apt-get install -y \
    git \
    curl \
    zip \
    unzip

RUN docker-php-ext-install pdo pdo_mysql

FROM dev-base as dev-Linux
ARG GROUP_ID
ARG GROUP_NAME
ARG USER_ID
ARG USER_NAME

ENV GROUP_ID=${GROUP_ID}
ENV GROUP_NAME=${GROUP_NAME}
ENV USER_ID ${USER_ID}
ENV USER_NAME=${USER_NAME}

RUN addgroup --gid ${GROUP_ID} ${GROUP_NAME}
RUN adduser --disabled-password --gecos '' --uid ${USER_ID} --ingroup ${GROUP_NAME} ${USER_NAME}

RUN groupmod -o -g ${GROUP_ID} www-data \
    && usermod -o -u ${USER_ID} -g www-data www-data

RUN chown -R ${USER_NAME}:${GROUP_NAME} /var/www/

FROM dev-base as dev-Darwin
