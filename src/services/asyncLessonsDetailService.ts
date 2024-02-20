import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateAsyncLessonsDetailRequest } from "../models/requests/asyncLessonsDetail/createAsyncLessonsDetailRequest";
import { DeleteAsyncLessonsDetailRequest } from "../models/requests/asyncLessonsDetail/deleteAsyncLessonsDetailRequest";
import { GetAsyncLessonsDetailRequest } from "../models/requests/asyncLessonsDetail/getAsyncLessonsDetailRequest";
import { UpdateAsyncLessonsDetailRequest } from "../models/requests/asyncLessonsDetail/updateAsyncLessonsDetailRequest";
import { CreateAsyncLessonsDetailResponse } from "../models/responses/asyncLessonsDetail/createAsyncLessonsDetailResponse";
import { DeleteAsyncLessonsDetailResponse } from "../models/responses/asyncLessonsDetail/deleteAsyncLessonsDetailResponse";
import { GetAsyncLessonsDetailResponse } from "../models/responses/asyncLessonsDetail/getAsyncLessonsDetailResponse";
import { GetAllAsyncLessonsDetailResponse } from "../models/responses/asyncLessonsDetail/getAllAsyncLessonsDetailResponse";
import { UpdateAsyncLessonsDetailResponse } from "../models/responses/asyncLessonsDetail/updateAsyncLessonsDetailResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class AsyncLessonsDetailService extends BaseService<
PageRequestModel,
GetAllAsyncLessonsDetailResponse,
GetAsyncLessonsDetailRequest,
GetAsyncLessonsDetailResponse,
CreateAsyncLessonsDetailRequest,
CreateAsyncLessonsDetailResponse,
UpdateAsyncLessonsDetailRequest,
UpdateAsyncLessonsDetailResponse,
DeleteAsyncLessonsDetailRequest,
DeleteAsyncLessonsDetailResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "AsyncLessonsDetails";
    }
}
export default new AsyncLessonsDetailService();