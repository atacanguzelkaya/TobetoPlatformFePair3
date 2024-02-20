import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateOperationClaimRequest } from "../models/requests/operationClaim/createOperationClaimRequest";
import { DeleteOperationClaimRequest } from "../models/requests/operationClaim/deleteOperationClaimRequest";
import { GetOperationClaimRequest } from "../models/requests/operationClaim/getOperationClaimRequest";
import { UpdateOperationClaimRequest } from "../models/requests/operationClaim/updateOperationClaimRequest";
import { CreateOperationClaimResponse } from "../models/responses/operationClaim/createOperationClaimResponse";
import { DeleteOperationClaimResponse } from "../models/responses/operationClaim/deleteOperationClaimResponse";
import { GetOperationClaimResponse } from "../models/responses/operationClaim/getOperationClaimResponse";
import { GetAllOperationClaimResponse } from "../models/responses/operationClaim/getAllOperationClaimResponse";
import { UpdateOperationClaimResponse } from "../models/responses/operationClaim/updateOperationClaimResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class OperationClaimService extends BaseService<
PageRequestModel,
GetAllOperationClaimResponse,
GetOperationClaimRequest,
GetOperationClaimResponse,
CreateOperationClaimRequest,
CreateOperationClaimResponse,
UpdateOperationClaimRequest,
UpdateOperationClaimResponse,
DeleteOperationClaimRequest,
DeleteOperationClaimResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "OperationClaims";
    }
}
export default new OperationClaimService();