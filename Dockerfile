FROM node:lts-slim

RUN mkdir -p /usr/src/app

ENV DIST=/usr/src/app

ADD . ${DIST}/

RUN rm -rf ${DIST}/src

WORKDIR ${DIST}

EXPOSE 5000

CMD ["serve", "-s", "build"]
