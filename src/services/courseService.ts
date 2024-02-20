import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateCourseRequest } from "../models/requests/course/createCourseRequest";
import { DeleteCourseRequest } from "../models/requests/course/deleteCourseRequest";
import { GetCourseRequest } from "../models/requests/course/getCourseRequest";
import { UpdateCourseRequest } from "../models/requests/course/updateCourseRequest";
import { CreateCourseResponse } from "../models/responses/course/createCourseResponse";
import { DeleteCourseResponse } from "../models/responses/course/deleteCourseResponse";
import { GetCourseResponse } from "../models/responses/course/getCourseResponse";
import { GetAllCourseResponse } from "../models/responses/course/getAllCourseResponse";
import { UpdateCourseResponse } from "../models/responses/course/updateCourseResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class CourseService extends BaseService<
PageRequestModel,
GetAllCourseResponse,
GetCourseRequest,
GetCourseResponse,
CreateCourseRequest,
CreateCourseResponse,
UpdateCourseRequest,
UpdateCourseResponse,
DeleteCourseRequest,
DeleteCourseResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "Courses";
    }
}
export default new CourseService();