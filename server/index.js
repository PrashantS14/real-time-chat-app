const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
});

let messages = [];

io.on("connection", (socket) => {
  console.log("User connected");

  socket.emit("chat-history", messages);

  socket.on("message", (msg) => {
    messages.push(msg);
    io.emit("message", msg); // emit ONLY ONCE
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
