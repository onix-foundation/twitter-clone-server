export interface JWTAdapter {
  generateToken(payload: object): string;
  verifyToken(token: string): object | string;
}
