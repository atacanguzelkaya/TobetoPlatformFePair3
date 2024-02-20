import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateUserOperationClaimRequest } from "../models/requests/userOperationClaim/createUserOperationClaimRequest";
import { DeleteUserOperationClaimRequest } from "../models/requests/userOperationClaim/deleteUserOperationClaimRequest";
import { GetUserOperationClaimRequest } from "../models/requests/userOperationClaim/getUserOperationClaimRequest";
import { UpdateUserOperationClaimRequest } from "../models/requests/userOperationClaim/updateUserOperationClaimRequest";
import { CreateUserOperationClaimResponse } from "../models/responses/userOperationClaim/createUserOperationClaimResponse";
import { DeleteUserOperationClaimResponse } from "../models/responses/userOperationClaim/deleteUserOperationClaimResponse";
import { GetUserOperationClaimResponse } from "../models/responses/userOperationClaim/getUserOperationClaimResponse";
import { GetAllUserOperationClaimResponse } from "../models/responses/userOperationClaim/getAllUserOperationClaimResponse";
import { UpdateUserOperationClaimResponse } from "../models/responses/userOperationClaim/updateUserOperationClaimResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class UserOperationClaimService extends BaseService<
PageRequestModel,
GetAllUserOperationClaimResponse,
GetUserOperationClaimRequest,
GetUserOperationClaimResponse,
CreateUserOperationClaimRequest,
CreateUserOperationClaimResponse,
UpdateUserOperationClaimRequest,
UpdateUserOperationClaimResponse,
DeleteUserOperationClaimRequest,
DeleteUserOperationClaimResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "UserOperationClaims";
    }
}
export default new UserOperationClaimService();