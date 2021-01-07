const server = require("./server/app.js").app;

port = process.env.PORT || 8080;

server.listen(port, () =>
  console.log(`🚀 Server ready at http://localhost:8080/api/search`)
);
