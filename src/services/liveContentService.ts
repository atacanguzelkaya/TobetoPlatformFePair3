import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateLiveContentRequest } from "../models/requests/liveContent/createLiveContentRequest";
import { DeleteLiveContentRequest } from "../models/requests/liveContent/deleteLiveContentRequest";
import { GetLiveContentRequest } from "../models/requests/liveContent/getLiveContentRequest";
import { UpdateLiveContentRequest } from "../models/requests/liveContent/updateLiveContentRequest";
import { CreateLiveContentResponse } from "../models/responses/liveContent/createLiveContentResponse";
import { DeleteLiveContentResponse } from "../models/responses/liveContent/deleteLiveContentResponse";
import { GetLiveContentResponse } from "../models/responses/liveContent/getLiveContentResponse";
import { GetAllLiveContentResponse } from "../models/responses/liveContent/getAllLiveContentResponse";
import { UpdateLiveContentResponse } from "../models/responses/liveContent/updateLiveContentResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class LiveContentService extends BaseService<
PageRequestModel,
GetAllLiveContentResponse,
GetLiveContentRequest,
GetLiveContentResponse,
CreateLiveContentRequest,
CreateLiveContentResponse,
UpdateLiveContentRequest,
UpdateLiveContentResponse,
DeleteLiveContentRequest,
DeleteLiveContentResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "LiveContents";
    }
}
export default new LiveContentService();