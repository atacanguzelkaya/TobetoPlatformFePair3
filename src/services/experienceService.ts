import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateExperienceRequest } from "../models/requests/experience/createExperienceRequest";
import { DeleteExperienceRequest } from "../models/requests/experience/deleteExperienceRequest";
import { GetExperienceRequest } from "../models/requests/experience/getExperienceRequest";
import { UpdateExperienceRequest } from "../models/requests/experience/updateExperienceRequest";
import { CreateExperienceResponse } from "../models/responses/experience/createExperienceResponse";
import { DeleteExperienceResponse } from "../models/responses/experience/deleteExperienceResponse";
import { GetExperienceResponse } from "../models/responses/experience/getExperienceResponse";
import { GetAllExperienceResponse } from "../models/responses/experience/getAllExperienceResponse";
import { UpdateExperienceResponse } from "../models/responses/experience/updateExperienceResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class ExperienceService extends BaseService<
PageRequestModel,
GetAllExperienceResponse,
GetExperienceRequest,
GetExperienceResponse,
CreateExperienceRequest,
CreateExperienceResponse,
UpdateExperienceRequest,
UpdateExperienceResponse,
DeleteExperienceRequest,
DeleteExperienceResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "Experiences";
    }
}
export default new ExperienceService();