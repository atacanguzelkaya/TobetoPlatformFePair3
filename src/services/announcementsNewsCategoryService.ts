import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateAnnouncementsNewsCategoryRequest } from "../models/requests/announcementsNewsCategory/createAnnouncementsNewsCategoryRequest";
import { DeleteAnnouncementsNewsCategoryRequest } from "../models/requests/announcementsNewsCategory/deleteAnnouncementsNewsCategoryRequest";
import { GetAnnouncementsNewsCategoryRequest } from "../models/requests/announcementsNewsCategory/getAnnouncementsNewsCategoryRequest";
import { UpdateAnnouncementsNewsCategoryRequest } from "../models/requests/announcementsNewsCategory/updateAnnouncementsNewsCategoryRequest";
import { CreateAnnouncementsNewsCategoryResponse } from "../models/responses/announcementsNewsCategory/createAnnouncementsNewsCategoryResponse";
import { DeleteAnnouncementsNewsCategoryResponse } from "../models/responses/announcementsNewsCategory/deleteAnnouncementsNewsCategoryResponse";
import { GetAnnouncementsNewsCategoryResponse } from "../models/responses/announcementsNewsCategory/getAnnouncementsNewsCategoryResponse";
import { GetAllAnnouncementsNewsCategoryResponse } from "../models/responses/announcementsNewsCategory/getAllAnnouncementsNewsCategoryResponse";
import { UpdateAnnouncementsNewsCategoryResponse } from "../models/responses/announcementsNewsCategory/updateAnnouncementsNewsCategoryResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class AnnouncementsNewsCategoryService extends BaseService<
PageRequestModel,
GetAllAnnouncementsNewsCategoryResponse,
GetAnnouncementsNewsCategoryRequest,
GetAnnouncementsNewsCategoryResponse,
CreateAnnouncementsNewsCategoryRequest,
CreateAnnouncementsNewsCategoryResponse,
UpdateAnnouncementsNewsCategoryRequest,
UpdateAnnouncementsNewsCategoryResponse,
DeleteAnnouncementsNewsCategoryRequest,
DeleteAnnouncementsNewsCategoryResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "AnnouncementsNewsCategories";
    }
}
export default new AnnouncementsNewsCategoryService();