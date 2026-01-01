import { pool } from "../config/database";
import { IUserRepository } from "../models/repositories/user.repository";
import { IUser, IUserCreate } from "../models/entities/user.model";

export class UserRepository implements IUserRepository {
  update(id: string, data: IUserCreate): Promise<IUser | null> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
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

  async create(user: IUserCreate): Promise<IUser> {
    const { rows } = await pool.query<IUser>(
      `INSERT INTO users (name, email)
       VALUES ($1, $2)
       RETURNING id, name, email`,
      [user.name, user.email]
    );
    return rows[0];
  }
}
