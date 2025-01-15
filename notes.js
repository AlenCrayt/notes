//have a user system with each user having it's own set of notes
const http = require("http");
const fs = require("fs");

fs.readFile("./pages/index.html", (err, data) => {
  if (err != null) {
    console.log(err);
  }
  console.log("index.html read correctly");
});

const server = http.createServer((req, resp) => {
  if (req.method == "GET") {
    resp.writeHead(200, { "Content-Type": "text/html" });
    resp.write("./pages/index.html");
  }
});
server.listen(8080);
