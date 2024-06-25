const http = require("http");
// ==============================
const app = require("./src/app");

const HOST_NAME = "127.0.0.1";
const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(PORT, HOST_NAME, () =>
  console.log(`server running at http://${HOST_NAME}:${PORT}`)
);
