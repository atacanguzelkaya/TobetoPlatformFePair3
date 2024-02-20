import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateAsyncCourseRequest } from "../models/requests/asyncCourse/createAsyncCourseRequest";
import { DeleteAsyncCourseRequest } from "../models/requests/asyncCourse/deleteAsyncCourseRequest";
import { GetAsyncCourseRequest } from "../models/requests/asyncCourse/getAsyncCourseRequest";
import { UpdateAsyncCourseRequest } from "../models/requests/asyncCourse/updateAsyncCourseRequest";
import { CreateAsyncCourseResponse } from "../models/responses/asyncCourse/createAsyncCourseResponse";
import { DeleteAsyncCourseResponse } from "../models/responses/asyncCourse/deleteAsyncCourseResponse";
import { GetAsyncCourseResponse } from "../models/responses/asyncCourse/getAsyncCourseResponse";
import { GetAllAsyncCourseResponse } from "../models/responses/asyncCourse/getAllAsyncCourseResponse";
import { UpdateAsyncCourseResponse } from "../models/responses/asyncCourse/updateAsyncCourseResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class AsyncCourseService extends BaseService<
PageRequestModel,
GetAllAsyncCourseResponse,
GetAsyncCourseRequest,
GetAsyncCourseResponse,
CreateAsyncCourseRequest,
CreateAsyncCourseResponse,
UpdateAsyncCourseRequest,
UpdateAsyncCourseResponse,
DeleteAsyncCourseRequest,
DeleteAsyncCourseResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "AsyncCourses";
    }
}
export default new AsyncCourseService();