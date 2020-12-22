# Node.js' emojivoto with gifs instead emoji (nodevoto)

[![Build Status](https://travis-ci.org/sourishkrout/nodevoto.svg?branch=master)](https://travis-ci.org/sourishkrout/nodevoto)

A microservice application that allows users to vote for their favorite gif,
and tracks votes received on a leaderboard. May the best gif win.

The application is composed of the following 3 services:

* [nodevoto-web](services/nodevoto-web/): Web frontend and REST API
* [nodevoto-gif](services/nodevoto-gif/): gRPC API for finding and listing gif
* [nodevoto-voting](services/nodevoto-voting/): gRPC API for voting and leaderboard

![Nodevoto Topology](assets/emojivoto-topology.png "Emojivoto Topology")

## Running

### In Minikube

Deploy the application to Minikube using the Linkerd2 service mesh.

1. Install the `linkerd` CLI

```
curl https://run.linkerd.io/install | sh
```

2. Install Linkerd2

```
linkerd install | kubectl apply -f -
```

3. View the dashboard!

```
linkerd dashboard
```

4. Inject, Deploy, and Enjoy

```
linkerd inject nodevoto.yml | kubectl apply -f -
```

5. Use the app!

```
minikube -n nodevoto service web-svc
```
### Generating some traffic

The `VoteBot` service can generate some traffic for you. It votes on gif
"randomly" as follows:
- It votes for :disney-puppy-puppies-national-day-UTuy9luZStALS: 15% of the time.
- It votes for :cartoon-halloween-ghost-aTf4PONtSYB1e: 20% of the time.
- When not voting for either of the above, it picks an gif at random

If you're running the app using the instructions above, the VoteBot will have
been deployed and will start sending traffic to the vote endpoint.

If you'd like to run the bot manually:
```
export WEB_HOST=localhost:8080 # replace with your web location
npm run voteBot
```
## Local Development

### Nodevoto webapp

This app is written with React and bundled with webpack.
Use the following to run the nodevoto go services and develop on the frontend.

Install npm dependencies
```
npm install .
```

Start the voting service
```
GRPC_PORT=8081 npm run voting
```

[In a separate teminal window] Start the gif service
```
GRPC_PORT=8082 npm run gif
```

[In a separate teminal window] Bundle the frontend assets
```
cd nodevoto-web/webapp
yarn install
yarn webpack # one time asset-bundling OR
yarn webpack-dev-server --port 8083 # bundle/serve reloading assets
```

[In a separate teminal window] Start the web service
```
export WEB_PORT=8080
export VOTINGSVC_HOST=localhost:8081
export GIFSVC_HOST=localhost:8082

# if you ran yarn webpack
export INDEX_BUNDLE=services/nodevoto-web/webapp/dist/index_bundle.js

# if you ran yarn webpack-dev-server
export WEBPACK_DEV_SERVER=http://localhost:8083

# start the webserver
npm run web
```

[Optional] Start the vote bot for automatic traffic generation.
```
export WEB_HOST=localhost:8080
npm run voteBot
```
