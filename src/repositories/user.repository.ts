import { pool } from "../config/database";
import { IUser } from "../models/user.model";

export class UserRepository {
  async findAll(): Promise<IUser[]> {
    const { rows } = await pool.query<IUser>("SELECT id, name, email FROM users");
    return rows;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const { rows } = await pool.query<IUser>("SELECT id, name, email FROM users WHERE email = $1", [email]);
    return rows[0] || null;
  }

  async findById(id: string): Promise<IUser | null> {
    const { rows } = await pool.query<IUser>("SELECT id, name, email FROM users WHERE id = $1", [id]);
    return rows[0] || null;
  }

  async create(user: IUser): Promise<IUser> {
    await pool.query(
      `INSERT INTO users (id, name, email)
       VALUES ($1, $2, $3)`,
      [user.id, user.name, user.email]
    );
    return user;
  }
}
