import jwt, { SignOptions, JwtPayload } from "jsonwebtoken";

export interface ITokenPayload {
  userId: string;
  [key: string]: any;
}

export class TokenValidator {
  private secret: string;
  private defaultExpiresIn: number;

  constructor(secret: string, defaultExpiresIn: number = 1) {
    if (!secret) throw new Error("JWT secret must be provided");
    this.secret = secret;
    this.defaultExpiresIn = defaultExpiresIn;
  }

  generateToken(payload: ITokenPayload, expiresIn?: number): string {
    const options: SignOptions = {
      expiresIn: expiresIn || this.defaultExpiresIn,
      algorithm: "HS256",
    };

    return jwt.sign(payload, this.secret, options);
  }

  verifyToken(token: string): ITokenPayload {
    try {
      const decoded = jwt.verify(token, this.secret) as JwtPayload;
      if (!decoded || typeof decoded !== "object") {
        throw new Error("Invalid token payload");
      }

      return decoded as ITokenPayload;
    } catch (err) {
      throw new Error("Invalid or expired token");
    }
  }

  /**
   * Decode token without verifying signature
   */
  decodeToken(token: string): ITokenPayload | null {
    const decoded = jwt.decode(token) as JwtPayload | null;
    if (!decoded) return null;
    return decoded as ITokenPayload;
  }
}
