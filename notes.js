//have a user system with each user having it's own set of notes
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, resp) => {
  if (req.url == "/") {
    fs.readFile("./pages/index.html", (err, data) => {
      if (req.url == "/output.css") {
        fs.readFile("./pages/output.css", (err, data) => {
          console.log("Sending CSS stylesheet");
          resp.writeHead(200, { "Content-Type": "text/css" });
          resp.end(data);
        });
      }
      if (err) {
        console.log(err);
        resp.writeHead(500, { "Content-Type": "text/plain" });
        resp.end("Internal Server Error");
      } else {
        //console.log(data);
        console.log("index.html read correctly");
        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.end(data);
      }
    });
  }
});
server.listen(8080);
