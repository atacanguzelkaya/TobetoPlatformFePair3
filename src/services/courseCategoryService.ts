import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateCourseCategoryRequest } from "../models/requests/courseCategory/createCourseCategoryRequest";
import { DeleteCourseCategoryRequest } from "../models/requests/courseCategory/deleteCourseCategoryRequest";
import { GetCourseCategoryRequest } from "../models/requests/courseCategory/getCourseCategoryRequest";
import { UpdateCourseCategoryRequest } from "../models/requests/courseCategory/updateCourseCategoryRequest";
import { CreateCourseCategoryResponse } from "../models/responses/courseCategory/createCourseCategoryResponse";
import { DeleteCourseCategoryResponse } from "../models/responses/courseCategory/deleteCourseCategoryResponse";
import { GetCourseCategoryResponse } from "../models/responses/courseCategory/getCourseCategoryResponse";
import { GetAllCourseCategoryResponse } from "../models/responses/courseCategory/getAllCourseCategoryResponse";
import { UpdateCourseCategoryResponse } from "../models/responses/courseCategory/updateCourseCategoryResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class CourseCategoryService extends BaseService<
PageRequestModel,
GetAllCourseCategoryResponse,
GetCourseCategoryRequest,
GetCourseCategoryResponse,
CreateCourseCategoryRequest,
CreateCourseCategoryResponse,
UpdateCourseCategoryRequest,
UpdateCourseCategoryResponse,
DeleteCourseCategoryRequest,
DeleteCourseCategoryResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "CourseCategories";
    }
}
export default new CourseCategoryService();