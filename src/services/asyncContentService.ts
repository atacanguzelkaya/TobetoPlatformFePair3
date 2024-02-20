import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateAsyncContentRequest } from "../models/requests/asyncContent/createAsyncContentRequest";
import { DeleteAsyncContentRequest } from "../models/requests/asyncContent/deleteAsyncContentRequest";
import { GetAsyncContentRequest } from "../models/requests/asyncContent/getAsyncContentRequest";
import { UpdateAsyncContentRequest } from "../models/requests/asyncContent/updateAsyncContentRequest";
import { CreateAsyncContentResponse } from "../models/responses/asyncContent/createAsyncContentResponse";
import { DeleteAsyncContentResponse } from "../models/responses/asyncContent/deleteAsyncContentResponse";
import { GetAsyncContentResponse } from "../models/responses/asyncContent/getAsyncContentResponse";
import { GetAllAsyncContentResponse } from "../models/responses/asyncContent/getAllAsyncContentResponse";
import { UpdateAsyncContentResponse } from "../models/responses/asyncContent/updateAsyncContentResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class AsyncContentService extends BaseService<
PageRequestModel,
GetAllAsyncContentResponse,
GetAsyncContentRequest,
GetAsyncContentResponse,
CreateAsyncContentRequest,
CreateAsyncContentResponse,
UpdateAsyncContentRequest,
UpdateAsyncContentResponse,
DeleteAsyncContentRequest,
DeleteAsyncContentResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "AsyncContents";
    }
}
export default new AsyncContentService();