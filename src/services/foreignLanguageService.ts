import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateForeignLanguageRequest } from "../models/requests/foreignLanguage/createForeignLanguageRequest";
import { DeleteForeignLanguageRequest } from "../models/requests/foreignLanguage/deleteForeignLanguageRequest";
import { GetForeignLanguageRequest } from "../models/requests/foreignLanguage/getForeignLanguageRequest";
import { UpdateForeignLanguageRequest } from "../models/requests/foreignLanguage/updateForeignLanguageRequest";
import { CreateForeignLanguageResponse } from "../models/responses/foreignLanguage/createForeignLanguageResponse";
import { DeleteForeignLanguageResponse } from "../models/responses/foreignLanguage/deleteForeignLanguageResponse";
import { GetForeignLanguageResponse } from "../models/responses/foreignLanguage/getForeignLanguageResponse";
import { GetAllForeignLanguageResponse } from "../models/responses/foreignLanguage/getAllForeignLanguageResponse";
import { UpdateForeignLanguageResponse } from "../models/responses/foreignLanguage/updateForeignLanguageResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class ForeignLanguageService extends BaseService<
PageRequestModel,
GetAllForeignLanguageResponse,
GetForeignLanguageRequest,
GetForeignLanguageResponse,
CreateForeignLanguageRequest,
CreateForeignLanguageResponse,
UpdateForeignLanguageRequest,
UpdateForeignLanguageResponse,
DeleteForeignLanguageRequest,
DeleteForeignLanguageResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "ForeignLanguages";
    }
}
export default new ForeignLanguageService();