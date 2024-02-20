import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateSurveyRequest } from "../models/requests/survey/createSurveyRequest";
import { DeleteSurveyRequest } from "../models/requests/survey/deleteSurveyRequest";
import { GetSurveyRequest } from "../models/requests/survey/getSurveyRequest";
import { UpdateSurveyRequest } from "../models/requests/survey/updateSurveyRequest";
import { CreateSurveyResponse } from "../models/responses/survey/createSurveyResponse";
import { DeleteSurveyResponse } from "../models/responses/survey/deleteSurveyResponse";
import { GetSurveyResponse } from "../models/responses/survey/getSurveyResponse";
import { GetAllSurveyResponse } from "../models/responses/survey/getAllSurveyResponse";
import { UpdateSurveyResponse } from "../models/responses/survey/updateSurveyResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class SurveyService extends BaseService<
PageRequestModel,
GetAllSurveyResponse,
GetSurveyRequest,
GetSurveyResponse,
CreateSurveyRequest,
CreateSurveyResponse,
UpdateSurveyRequest,
UpdateSurveyResponse,
DeleteSurveyRequest,
DeleteSurveyResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "Surveys";
    }
}
export default new SurveyService();