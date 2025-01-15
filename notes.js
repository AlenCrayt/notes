//have a user system with each user having it's own set of notes
const http = require("http");
const fs = require("fs");
let parsed_html;

fs.readFile("./pages/index.html", (err, data) => {
  if (err != null) {
    console.log(err);
  }
  //console.log(data);
  parsed_html = data;
  console.log("index.html read correctly");
});

const server = http.createServer((req, resp) => {
  if (req.method == "GET") {
    console.log("receiving GET request");
    resp.writeHead(200, { "Content-Type": "text/html" });
    resp.write(parsed_html);
  }
});
server.listen(8080);
