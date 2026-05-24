export interface LoginResponse {
  userName: string;
  token: string;
  tokenType: string;
  tokenExpires: Date;
  roles: string[];
}
