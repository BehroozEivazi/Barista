import express from "express";
import userRoutes from "./routes/user.routes";
import { Request, Response, NextFunction } from "express";

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

app.use((err: Error, req: Request, res: Response) => {
  res.status(400).json({
    message: err.message,
  });
});

export default app;
