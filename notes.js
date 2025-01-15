//have a user system with each user having it's own set of notes
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, resp) => {
  if (req.url == "/") {
    fs.readFile("./pages/index.html", (err, data) => {
      if (err != null) {
        console.log(err);
      }
      //console.log(data);
      console.log("index.html read correctly");
    });
    resp.writeHead(200, { "Content-Type": "text/html" });
    resp.end(data);
  }
});
server.listen(8080);
