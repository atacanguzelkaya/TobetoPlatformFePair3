import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateAnnouncementRequest } from "../models/requests/announcement/createAnnouncementRequest";
import { DeleteAnnouncementRequest } from "../models/requests/announcement/deleteAnnouncementRequest";
import { GetAnnouncementRequest } from "../models/requests/announcement/getAnnouncementRequest";
import { UpdateAnnouncementRequest } from "../models/requests/announcement/updateAnnouncementRequest";
import { CreateAnnouncementResponse } from "../models/responses/announcement/createAnnouncementResponse";
import { DeleteAnnouncementResponse } from "../models/responses/announcement/deleteAnnouncementResponse";
import { GetAnnouncementResponse } from "../models/responses/announcement/getAnnouncementResponse";
import { GetAllAnnouncementResponse } from "../models/responses/announcement/getAllAnnouncementResponse";
import { UpdateAnnouncementResponse } from "../models/responses/announcement/updateAnnouncementResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class AnnouncementService extends BaseService<
PageRequestModel,
GetAllAnnouncementResponse,
GetAnnouncementRequest,
GetAnnouncementResponse,
CreateAnnouncementRequest,
CreateAnnouncementResponse,
UpdateAnnouncementRequest,
UpdateAnnouncementResponse,
DeleteAnnouncementRequest,
DeleteAnnouncementResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "Announcements";
    }
}
export default new AnnouncementService();