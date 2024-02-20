import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateCourseDetailRequest } from "../models/requests/courseDetail/createCourseDetailRequest";
import { DeleteCourseDetailRequest } from "../models/requests/courseDetail/deleteCourseDetailRequest";
import { GetCourseDetailRequest } from "../models/requests/courseDetail/getCourseDetailRequest";
import { UpdateCourseDetailRequest } from "../models/requests/courseDetail/updateCourseDetailRequest";
import { CreateCourseDetailResponse } from "../models/responses/courseDetail/createCourseDetailResponse";
import { DeleteCourseDetailResponse } from "../models/responses/courseDetail/deleteCourseDetailResponse";
import { GetCourseDetailResponse } from "../models/responses/courseDetail/getCourseDetailResponse";
import { GetAllCourseDetailResponse } from "../models/responses/courseDetail/getAllCourseDetailResponse";
import { UpdateCourseDetailResponse } from "../models/responses/courseDetail/updateCourseDetailResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class CourseDetailService extends BaseService<
PageRequestModel,
GetAllCourseDetailResponse,
GetCourseDetailRequest,
GetCourseDetailResponse,
CreateCourseDetailRequest,
CreateCourseDetailResponse,
UpdateCourseDetailRequest,
UpdateCourseDetailResponse,
DeleteCourseDetailRequest,
DeleteCourseDetailResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "CourseDetails";
    }
}
export default new CourseDetailService();