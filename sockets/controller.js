const socketController = (socket) => {
  // console.log("client connected", socket.id);
  socket.on("disconnect", () => {
    console.log("client disconnected", socket.id);
  });

  socket.on("send-message", (payload, callback) => {
    const id = 564231;
    callback({ id, date: new Date().getTime() });
    socket.broadcast.emit("send-message", payload);
  });
};

module.exports = { socketController };
