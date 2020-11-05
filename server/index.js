const server = require('./server/app.js').app;

port = process.env.PORT || 8080;

server.listen(port);