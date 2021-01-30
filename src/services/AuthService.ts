import RegisterData from "../types/RegisterData.type";
import UserType from "../types/User.type";
import ApiService from "./ApiService";

class AuthService {
    public static STORAGE_ACCESS_TOKEN: string = "accessToken";
    private apiService: ApiService = new ApiService();

    public getLoggedUser = async (): Promise<UserType | null> => {
        if (!localStorage.getItem(AuthService.STORAGE_ACCESS_TOKEN)) {
            return null;
        }

        const response = await this.apiService.post("auth/refresh");
        if (!response.success) {
            localStorage.setItem(AuthService.STORAGE_ACCESS_TOKEN, "");
            return null;
        }

        localStorage.setItem(AuthService.STORAGE_ACCESS_TOKEN, response.data.accessToken);
        return response.data.user as UserType;
    }

    public logIn = async (email: string, password: string): Promise<boolean> => {
        const response = await this.apiService.post("auth/login", { email, password });
        if (!response.success) {
            return false;
        }

        localStorage.setItem(AuthService.STORAGE_ACCESS_TOKEN, response.data.accessToken);
        return true;
    }

    public register = async (userData: RegisterData): Promise<boolean> => {
        const response = await this.apiService.post("auth/register", userData);
        if (!response.success) {
            return false;
        }

        localStorage.setItem(AuthService.STORAGE_ACCESS_TOKEN, response.data.accessToken);
        return true;
    }
}

export default AuthService;
