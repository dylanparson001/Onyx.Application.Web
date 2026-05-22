export interface LoginResponse {
  username: string;
  token: string;
  tokenType: string;
  tokenExpires: Date;
  roles: string[];
}
