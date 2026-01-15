const handleSocket = (io, socket) => {
  console.log("User connected:", socket.id);

  socket.on("send_message", (message) => {
    console.log("Message received:", message);

    io.emit("receive_message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
};

module.exports = { handleSocket };
