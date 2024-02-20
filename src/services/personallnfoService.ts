import { PageRequestModel } from "../core/pageRequestModel/pageRequest";
import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreatePersonalInfoRequest } from "../models/requests/personalInfo/createPersonalInfoRequest";
import { DeletePersonalInfoRequest } from "../models/requests/personalInfo/deletePersonalInfoRequest";
import { GetPersonalInfoRequest } from "../models/requests/personalInfo/getPersonalInfoRequest";
import { UpdatePersonalInfoRequest } from "../models/requests/personalInfo/updatePersonalInfoRequest";
import { CreatePersonalInfoResponse } from "../models/responses/personalInfo/createPersonalInfoResponse";
import { DeletePersonalInfoResponse } from "../models/responses/personalInfo/deletePersonalInfoResponse";
import { GetAllPersonalInfoResponse } from "../models/responses/personalInfo/getAllPersonalInfoResponse";
import { GetPersonalInfoResponse } from "../models/responses/personalInfo/getPersonalInfoResponse";
import { UpdatePersonalInfoResponse } from "../models/responses/personalInfo/updatePersonalInfoResponse";

class PersonalInfoService extends BaseService<
PageRequestModel,
GetAllPersonalInfoResponse,
GetPersonalInfoRequest,
GetPersonalInfoResponse,
CreatePersonalInfoRequest,
CreatePersonalInfoResponse,
UpdatePersonalInfoRequest,
UpdatePersonalInfoResponse,
DeletePersonalInfoRequest,
DeletePersonalInfoResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "PersonalInfos";
    }
}
export default new PersonalInfoService();