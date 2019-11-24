FROM 8-jessie

MAINTAINER github@darkwoolf10 <woolftreuser@gmail.com>

RUN apt-get update && apt-get upgrade -y \
    npm install \
    apt-get install php7.3-pgsql