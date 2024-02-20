import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateInstructorRequest } from "../models/requests/instructor/createInstructorRequest";
import { DeleteInstructorRequest } from "../models/requests/instructor/deleteInstructorRequest";
import { GetInstructorRequest } from "../models/requests/instructor/getInstructorRequest";
import { UpdateInstructorRequest } from "../models/requests/instructor/updateInstructorRequest";
import { CreateInstructorResponse } from "../models/responses/instructor/createInstructorResponse";
import { DeleteInstructorResponse } from "../models/responses/instructor/deleteInstructorResponse";
import { GetInstructorResponse } from "../models/responses/instructor/getInstructorResponse";
import { GetAllInstructorResponse } from "../models/responses/instructor/getAllInstructorResponse";
import { UpdateInstructorResponse } from "../models/responses/instructor/updateInstructorResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class InstructorService extends BaseService<
PageRequestModel,
GetAllInstructorResponse,
GetInstructorRequest,
GetInstructorResponse,
CreateInstructorRequest,
CreateInstructorResponse,
UpdateInstructorRequest,
UpdateInstructorResponse,
DeleteInstructorRequest,
DeleteInstructorResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "Instructors";
    }
}
export default new InstructorService();