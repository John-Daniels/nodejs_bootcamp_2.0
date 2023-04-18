const http = require("http");

const server = http.createServer((request, response) => {
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
});

server.listen(5000, () => console.log("Server is up on Port 5000"));
