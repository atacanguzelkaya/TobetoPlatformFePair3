import { PageRequestModel } from "../core/pageRequestModel/pageRequest";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateAbilityRequest } from "../models/requests/ability/createAbilityRequest";
import { DeleteAbilityRequest } from "../models/requests/ability/deleteAbilityRequest";
import { GetAbilityRequest } from "../models/requests/ability/getAbilityRequest";
import { UpdateAbilityRequest } from "../models/requests/ability/updateAbilityRequest";
import { CreateAbilityResponse } from "../models/responses/ability/createAbilityResponse";
import { DeleteAbilityResponse } from "../models/responses/ability/deleteAbilityResponse";
import { GetAbilityResponse } from "../models/responses/ability/getAbilityResponse";
import { GetAllAbilityResponse } from "../models/responses/ability/getAllAbilityResponse";
import { UpdateAbilityResponse } from "../models/responses/ability/updateAbilityResponse";

class AbilityService extends BaseService<
PageRequestModel,
GetAllAbilityResponse,
GetAbilityRequest,
GetAbilityResponse,
CreateAbilityRequest,
CreateAbilityResponse,
UpdateAbilityRequest,
UpdateAbilityResponse,
DeleteAbilityRequest,
DeleteAbilityResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "Abilities";
    }
}
export default new AbilityService();