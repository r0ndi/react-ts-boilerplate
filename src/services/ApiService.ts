import axios from "axios";
import ApiResponse from "../types/ApiResponse.type";
import AuthService from "./AuthService";

class ApiService {
    public post = async (path: string, data: any = []): Promise<ApiResponse> => {
        try {
            const response = await axios.post(this.getApiUrl(path), data, this.getHeaders());
            return this.getSuccessResponse(response.data);
        } catch (error) {
            return this.getErrorResponse(error.message);
        }
    }

    public patch = async (path: string, data: any = []): Promise<ApiResponse> => {
        try {
            const response = await axios.patch(this.getApiUrl(path), data, this.getHeaders());
            return this.getSuccessResponse(response.data);
        } catch (error) {
            return this.getErrorResponse(error.message);
        }
    }

    public delete = async (path: string): Promise<ApiResponse> => {
        try {
            const response = await axios.delete(this.getApiUrl(path), this.getHeaders());
            return this.getSuccessResponse(response.data);
        } catch (error) {
            return this.getErrorResponse(error.message);
        }
    }

    private getApiUrl = (path: string) => {
        return `${process.env.REACT_APP_BACKEND_API_URL}/${path}`;
    }

    private getHeaders = () => {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem(AuthService.STORAGE_ACCESS_TOKEN)}`
            }
        };
    }

    private getSuccessResponse(responseData: any[]): ApiResponse {
        return {
            data: responseData,
            success: true,
        }
    }

    private getErrorResponse(errorMessage: string): ApiResponse {
        return {
            error: errorMessage,
            success: false,
        }
    }
}

export default ApiService;
