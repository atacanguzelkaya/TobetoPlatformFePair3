import { BASE_API_URL } from "../environment/environment";
import axiosInstance from "../core/interceptors/axiosInceptor";
import { AuthForRegisterRequest } from "../models/requests/auth/authForRegisterRequest";
import { AuthForLoginRequest } from "../models/requests/auth/authForLoginRequest";
import { AuthForRegisterResponse } from "../models/responses/auth/authForRegisterResponse";
import { AuthForLoginResponse } from "../models/responses/auth/authForLoginResponse";
import { JwtPayload, jwtDecode } from "jwt-decode";

interface CustomJwtPayload extends JwtPayload {
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier': string;
}

class AuthService {
    async login(authData: AuthForLoginRequest): Promise<AuthForLoginResponse> {
        try {
          const response = await axiosInstance.post(BASE_API_URL+ "Auth/login", authData);
          return response.data;
        } 
        catch (error) {
          throw new Error('Login failed');
        }
    }
    async register(authData: AuthForRegisterRequest): Promise<AuthForRegisterResponse> {
        try {
          const response = await axiosInstance.post(BASE_API_URL+ "Auth/register", authData);
          return response.data;
        } 
        catch (error) {
          throw new Error('Registration failed');
        }
    }
    logout() {
        localStorage.clear();
    }
    getUserId = (): string => {
      const token: string | null = localStorage.getItem('token');
      if (token) {
          const decodedToken: CustomJwtPayload = jwtDecode(token);
          return decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
      }
      throw new Error('Token not found');
  };
};
export default new AuthService();