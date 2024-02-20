import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateCourseExamRequest } from "../models/requests/courseExam/createCourseExamRequest";
import { DeleteCourseExamRequest } from "../models/requests/courseExam/deleteCourseExamRequest";
import { GetCourseExamRequest } from "../models/requests/courseExam/getCourseExamRequest";
import { UpdateCourseExamRequest } from "../models/requests/courseExam/updateCourseExamRequest";
import { CreateCourseExamResponse } from "../models/responses/courseExam/createCourseExamResponse";
import { DeleteCourseExamResponse } from "../models/responses/courseExam/deleteCourseExamResponse";
import { GetCourseExamResponse } from "../models/responses/courseExam/getCourseExamResponse";
import { GetAllCourseExamResponse } from "../models/responses/courseExam/getAllCourseExamResponse";
import { UpdateCourseExamResponse } from "../models/responses/courseExam/updateCourseExamResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class CourseExamService extends BaseService<
PageRequestModel,
GetAllCourseExamResponse,
GetCourseExamRequest,
GetCourseExamResponse,
CreateCourseExamRequest,
CreateCourseExamResponse,
UpdateCourseExamRequest,
UpdateCourseExamResponse,
DeleteCourseExamRequest,
DeleteCourseExamResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "CourseExams";
    }
}
export default new CourseExamService();