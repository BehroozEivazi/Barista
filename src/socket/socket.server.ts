import { Server as HttpServer } from "http";
import { Server, Socket } from "socket.io";

let io: Server | null = null;

export class SocketServer {
  constructor(server: HttpServer) {
    if (io) {
      throw new Error("Socket already initialized");
    }

    io = new Server(server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
      },
    });

    io.on("connection", this.handleConnection);
  }

  private handleConnection = (socket: Socket) => {
    console.log("🔌 connected:", socket.id);

    socket.on("request:status", () => {
      socket.emit("response:status", {
        status: "OK",
        serverTime: new Date().toISOString(),
      });
    });

    socket.on("send:data", (payload: { value: string }) => {
      io!.emit("broadcast:data", {
        value: payload.value + ` (${socket.id})`,
        at: new Date().toISOString(),
      });
    });

    socket.on("disconnect", () => {
      console.log("❌ disconnected:", socket.id);
    });
  };
}

export const getIO = (): Server => {
  if (!io) {
    throw new Error("Socket.io not initialized yet");
  }
  return io;
};
