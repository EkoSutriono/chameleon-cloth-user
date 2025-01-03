export interface loginRequest {
  email: string;
  password: string;
}

export interface forgotPasswordRequest {
  email: string;
}

export interface RegisterRequest {
  confirm_password: string;
  email: string;
  password: string;
  username: string;
}
export interface RefreshTokenRequest {
    access_token: string;
}
