const express = require("express");

const home = (req, res) => {
  res.send("the home page");
};

server = express();

server.put("/posts/update", (req, res) =>
  res.send("edit and update posts here")
);
server.post("/posts", (req, res) => res.send("post created"));
server.delete("/posts", (req, res) => res.send("post deleted"));
server.get("/", home);

server.listen(3000, "localhost", () => {
  console.log("server is live now");
});
