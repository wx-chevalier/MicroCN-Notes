FROM node:8.11.4

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        curl \
        dnsutils \
        iptables \
        jq \
        nghttp2 \
    && rm -rf /var/lib/apt/lists/*

ARG svc_name
# ARG variables arent available for ENTRYPOINT
ENV SVC_NAME $svc_name

COPY . /opt/nodevoto
WORKDIR /opt/nodevoto

RUN rm -rf node_modules
RUN npm install .

WORKDIR /opt/nodevoto/services/nodevoto-web

RUN yarn install

WORKDIR /opt/nodevoto

ENTRYPOINT npm run $SVC_NAME
