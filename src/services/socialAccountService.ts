import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateSocialAccountRequest } from "../models/requests/socialAccount/createSocialAccountRequest";
import { DeleteSocialAccountRequest } from "../models/requests/socialAccount/deleteSocialAccountRequest";
import { GetSocialAccountRequest } from "../models/requests/socialAccount/getSocialAccountRequest";
import { UpdateSocialAccountRequest } from "../models/requests/socialAccount/updateSocialAccountRequest";
import { CreateSocialAccountResponse } from "../models/responses/socialAccount/createSocialAccountResponse";
import { DeleteSocialAccountResponse } from "../models/responses/socialAccount/deleteSocialAccountResponse";
import { GetSocialAccountResponse } from "../models/responses/socialAccount/getSocialAccountResponse";
import { GetAllSocialAccountResponse } from "../models/responses/socialAccount/getAllSocialAccountResponse";
import { UpdateSocialAccountResponse } from "../models/responses/socialAccount/updateSocialAccountResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class SocialAccountService extends BaseService<
PageRequestModel,
GetAllSocialAccountResponse,
GetSocialAccountRequest,
GetSocialAccountResponse,
CreateSocialAccountRequest,
CreateSocialAccountResponse,
UpdateSocialAccountRequest,
UpdateSocialAccountResponse,
DeleteSocialAccountRequest,
DeleteSocialAccountResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "SocialAccounts";
    }
}
export default new SocialAccountService();