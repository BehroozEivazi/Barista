import http from "http";
import app from "./app";
import { SocketServer } from "./socket/socket.server";

const PORT = Number(process.env.PORT) || 3001;

const server = http.createServer(app);
const socketIO = new SocketServer(server);

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
export { socketIO };
