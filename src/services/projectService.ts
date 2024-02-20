import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateProjectRequest } from "../models/requests/project/createProjectRequest";
import { DeleteProjectRequest } from "../models/requests/project/deleteProjectRequest";
import { GetProjectRequest } from "../models/requests/project/getProjectRequest";
import { UpdateProjectRequest } from "../models/requests/project/updateProjectRequest";
import { CreateProjectResponse } from "../models/responses/project/createProjectResponse";
import { DeleteProjectResponse } from "../models/responses/project/deleteProjectResponse";
import { GetProjectResponse } from "../models/responses/project/getProjectResponse";
import { GetAllProjectResponse } from "../models/responses/project/getAllProjectResponse";
import { UpdateProjectResponse } from "../models/responses/project/updateProjectResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class ProjectService extends BaseService<
PageRequestModel,
GetAllProjectResponse,
GetProjectRequest,
GetProjectResponse,
CreateProjectRequest,
CreateProjectResponse,
UpdateProjectRequest,
UpdateProjectResponse,
DeleteProjectRequest,
DeleteProjectResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "Projects";
    }
}
export default new ProjectService();