import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateLiveCourseRequest } from "../models/requests/liveCourse/createLiveCourseRequest";
import { DeleteLiveCourseRequest } from "../models/requests/liveCourse/deleteLiveCourseRequest";
import { GetLiveCourseRequest } from "../models/requests/liveCourse/getLiveCourseRequest";
import { UpdateLiveCourseRequest } from "../models/requests/liveCourse/updateLiveCourseRequest";
import { CreateLiveCourseResponse } from "../models/responses/liveCourse/createLiveCourseResponse";
import { DeleteLiveCourseResponse } from "../models/responses/liveCourse/deleteLiveCourseResponse";
import { GetLiveCourseResponse } from "../models/responses/liveCourse/getLiveCourseResponse";
import { GetAllLiveCourseResponse } from "../models/responses/liveCourse/getAllLiveCourseResponse";
import { UpdateLiveCourseResponse } from "../models/responses/liveCourse/updateLiveCourseResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class LiveCourseService extends BaseService<
PageRequestModel,
GetAllLiveCourseResponse,
GetLiveCourseRequest,
GetLiveCourseResponse,
CreateLiveCourseRequest,
CreateLiveCourseResponse,
UpdateLiveCourseRequest,
UpdateLiveCourseResponse,
DeleteLiveCourseRequest,
DeleteLiveCourseResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "LiveCourses";
    }
}
export default new LiveCourseService();