import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateStudentRequest } from "../models/requests/student/createStudentRequest";
import { DeleteStudentRequest } from "../models/requests/student/deleteStudentRequest";
import { GetStudentRequest } from "../models/requests/student/getStudentRequest";
import { UpdateStudentRequest } from "../models/requests/student/updateStudentRequest";
import { CreateStudentResponse } from "../models/responses/student/createStudentResponse";
import { DeleteStudentResponse } from "../models/responses/student/deleteStudentResponse";
import { GetStudentResponse } from "../models/responses/student/getStudentResponse";
import { GetAllStudentResponse } from "../models/responses/student/getAllStudentResponse";
import { UpdateStudentResponse } from "../models/responses/student/updateStudentResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class StudentService extends BaseService<
PageRequestModel,
GetAllStudentResponse,
GetStudentRequest,
GetStudentResponse,
CreateStudentRequest,
CreateStudentResponse,
UpdateStudentRequest,
UpdateStudentResponse,
DeleteStudentRequest,
DeleteStudentResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "Students";
    }
}
export default new StudentService();