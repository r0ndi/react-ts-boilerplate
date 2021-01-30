import UserType from "../types/User.type";
import ApiService from "./ApiService";

class UserService {
    private apiService: ApiService = new ApiService();

    public patchUser = async (id: string, userData: UserType): Promise<boolean> => {
        const response = await this.apiService.patch(`user/${id}`, userData);
        if (!response.success) {
            return false;
        }

        return true;
    }

    public deleteUser = async (id: string): Promise<boolean> => {
        const response = await this.apiService.delete(`user/${id}`);
        if (!response.success) {
            return false;
        }

        return true;
    }
}

export default UserService;
