// src/swagger/setupSwagger.ts
import { Express } from "express";
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from "./swagger.json"; // فایل generated توسط tsoa

// ✅ Named export
export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
