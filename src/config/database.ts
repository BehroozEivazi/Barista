import { Pool } from "pg";

export const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "password",
  database: "test_db",
});

pool.on("connect", () => {
  console.log("PostgreSQL connected");
});

process.on("exit", async () => {
  await pool.end();
  console.log("PostgreSQL pool closed");
});
