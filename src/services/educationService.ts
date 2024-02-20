import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateEducationRequest } from "../models/requests/education/createEducationRequest";
import { DeleteEducationRequest } from "../models/requests/education/deleteEducationRequest";
import { GetEducationRequest } from "../models/requests/education/getEducationRequest";
import { UpdateEducationRequest } from "../models/requests/education/updateEducationRequest";
import { CreateEducationResponse } from "../models/responses/education/createEducationResponse";
import { DeleteEducationResponse } from "../models/responses/education/deleteEducationResponse";
import { GetEducationResponse } from "../models/responses/education/getEducationResponse";
import { GetAllEducationResponse } from "../models/responses/education/getAllEducationResponse";
import { UpdateEducationResponse } from "../models/responses/education/updateEducationResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class EducationService extends BaseService<
    PageRequestModel,
    GetAllEducationResponse,
    GetEducationRequest,
    GetEducationResponse,
    CreateEducationRequest,
    CreateEducationResponse,
    UpdateEducationRequest,
    UpdateEducationResponse,
    DeleteEducationRequest,
    DeleteEducationResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "Educations";
    }
}
export default new EducationService();