import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateUserRequest } from "../models/requests/user/createUserRequest";
import { DeleteUserRequest } from "../models/requests/user/deleteUserRequest";
import { GetUserRequest } from "../models/requests/user/getUserRequest";
import { UpdateUserRequest } from "../models/requests/user/updateUserRequest";
import { CreateUserResponse } from "../models/responses/user/createUserResponse";
import { DeleteUserResponse } from "../models/responses/user/deleteUserResponse";
import { GetUserResponse } from "../models/responses/user/getUserResponse";
import { GetAllUserResponse } from "../models/responses/user/getAllUserResponse";
import { UpdateUserResponse } from "../models/responses/user/updateUserResponse";
import { PasswordResetEmailRequest } from "../models/requests/user/passwordResetEmailRequest";
import { PasswordResetEmailResponse } from "../models/responses/user/passwordResetEmailResponse";
import { ResetPasswordResponse } from "../models/responses/user/resetPasswordResponse";
import { ResetPasswordRequest } from "../models/requests/user/resetPasswordRequest";
import axiosInstance from "../core/interceptors/axiosInceptor";
import { AxiosResponse } from "axios";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";
import { UpdatePasswordRequest } from "../models/requests/user/updatePasswordRequest";
import { UpdatePasswordResponse } from "../models/responses/user/updatePasswordResponse";

class UserService extends BaseService<
    PageRequestModel,
    GetAllUserResponse,
    GetUserRequest,
    GetUserResponse,
    CreateUserRequest,
    CreateUserResponse,
    UpdateUserRequest,
    UpdateUserResponse,
    DeleteUserRequest,
    DeleteUserResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "Users";
    }

    async PasswordResetEmail(request: PasswordResetEmailRequest): Promise<AxiosResponse<PasswordResetEmailResponse, any>> {
        return await axiosInstance.post<PasswordResetEmailResponse>(this.apiUrl + "/ForgotPassword", request);
    }

    async ResetPassword(request: ResetPasswordRequest): Promise<AxiosResponse<ResetPasswordResponse, any>> {
        return await axiosInstance.post<ResetPasswordResponse>(this.apiUrl + "/ResetPassword", request);
    }
    async UpdatePassword(request: UpdatePasswordRequest): Promise<AxiosResponse<UpdatePasswordResponse, any>> {
        return await axiosInstance.post<UpdatePasswordResponse>(this.apiUrl + "/UpdatePassword", request);
    }
}
export default new UserService();