import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateAsyncLessonsOfContentRequest } from "../models/requests/asyncLessonsOfContent/createAsyncLessonsOfContentRequest";
import { DeleteAsyncLessonsOfContentRequest } from "../models/requests/asyncLessonsOfContent/deleteAsyncLessonsOfContentRequest";
import { GetAsyncLessonsOfContentRequest } from "../models/requests/asyncLessonsOfContent/getAsyncLessonsOfContentRequest";
import { UpdateAsyncLessonsOfContentRequest } from "../models/requests/asyncLessonsOfContent/updateAsyncLessonsOfContentRequest";
import { CreateAsyncLessonsOfContentResponse } from "../models/responses/asyncLessonsOfContent/createAsyncLessonsOfContentResponse";
import { DeleteAsyncLessonsOfContentResponse } from "../models/responses/asyncLessonsOfContent/deleteAsyncLessonsOfContentResponse";
import { GetAsyncLessonsOfContentResponse } from "../models/responses/asyncLessonsOfContent/getAsyncLessonsOfContentResponse";
import { GetAllAsyncLessonsOfContentResponse } from "../models/responses/asyncLessonsOfContent/getAllAsyncLessonsOfContentResponse";
import { UpdateAsyncLessonsOfContentResponse } from "../models/responses/asyncLessonsOfContent/updateAsyncLessonsOfContentResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class AsyncLessonsOfContentService extends BaseService<
PageRequestModel,
GetAllAsyncLessonsOfContentResponse,
GetAsyncLessonsOfContentRequest,
GetAsyncLessonsOfContentResponse,
CreateAsyncLessonsOfContentRequest,
CreateAsyncLessonsOfContentResponse,
UpdateAsyncLessonsOfContentRequest,
UpdateAsyncLessonsOfContentResponse,
DeleteAsyncLessonsOfContentRequest,
DeleteAsyncLessonsOfContentResponse>
{
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "AsyncLessonsOfContents";
    }
}
export default new AsyncLessonsOfContentService();