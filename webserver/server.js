const http = require("http");
const fs = require("fs");
const path = require("path");

const homePageDir = path.resolve(__dirname, "./public/index.html");
const aboutPageDir = path.resolve(__dirname, "./public/pages/about.html");

const homePageHtml = fs.readFileSync(homePageDir, "utf-8");
const aboutPageHtml = fs.readFileSync(aboutPageDir, "utf-8");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.writeHead(200, {
      "Content-Type": "text/html",
    });
    response.write(homePageHtml);
    response.end();
  } else if (request.url === "/about") {
    response.writeHead(200, {
      "Content-Type": "text/html",
    });
    response.write(aboutPageHtml);
    response.end();
  } else if (request.url == "/data") {
    response.writeHead(200, {
      "Content-Type": "application/json",
    });
    const data = [
      {
        message: "hello world!",
      },
    ];
    response.write(JSON.stringify(data));
    response.end();
  }
});

server.listen(5000, () => console.log("Server is up on Port 5000"));
