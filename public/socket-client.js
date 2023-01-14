// HTML References
const lbOnline = document.getElementById("lb-online");
const lbOffline = document.getElementById("lb-offline");
const txtMessage = document.getElementById("txt-message");
const btnSend = document.getElementById("btn-send");

const socket = io();

socket.on("connect", () => {
  // console.log("conected");
  lbOffline.style.display = "none";
  lbOnline.style.display = "";
});

socket.on("disconnect", () => {
  // console.log("disconnected");
  lbOffline.style.display = "";
  lbOnline.style.display = "none";
});

socket.on("send-message", (payload) => {
  console.log(payload);
});

btnSend.addEventListener("click", () => {
  const message = txtMessage.value;
  const payload = {
    message,
    id: "3412fds",
    date: new Date().getTime(),
  };
  socket.emit("send-message", payload, (id) => {
    console.log("Data since server: ", id);
  });
});
