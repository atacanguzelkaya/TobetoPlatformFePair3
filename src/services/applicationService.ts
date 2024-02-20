import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateApplicationRequest } from "../models/requests/application/createApplicationRequest";
import { DeleteApplicationRequest } from "../models/requests/application/deleteApplicationRequest";
import { GetApplicationRequest } from "../models/requests/application/getApplicationRequest";
import { UpdateApplicationRequest } from "../models/requests/application/updateApplicationRequest";
import { CreateApplicationResponse } from "../models/responses/application/createApplicationResponse";
import { DeleteApplicationResponse } from "../models/responses/application/deleteApplicationResponse";
import { GetApplicationResponse } from "../models/responses/application/getApplicationResponse";
import { GetAllApplicationResponse } from "../models/responses/application/getAllApplicationResponse";
import { UpdateApplicationResponse } from "../models/responses/application/updateApplicationResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class ApplicationService extends BaseService<
PageRequestModel,
GetAllApplicationResponse,
GetApplicationRequest,
GetApplicationResponse,
CreateApplicationRequest,
CreateApplicationResponse,
UpdateApplicationRequest,
UpdateApplicationResponse,
DeleteApplicationRequest,
DeleteApplicationResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "Applications";
    }
}
export default new ApplicationService();