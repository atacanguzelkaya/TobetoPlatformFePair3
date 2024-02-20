import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateNewsRequest } from "../models/requests/news/createNewsRequest";
import { DeleteNewsRequest } from "../models/requests/news/deleteNewsRequest";
import { GetNewsRequest } from "../models/requests/news/getNewsRequest";
import { UpdateNewsRequest } from "../models/requests/news/updateNewsRequest";
import { CreateNewsResponse } from "../models/responses/news/createNewsResponse";
import { DeleteNewsResponse } from "../models/responses/news/deleteNewsResponse";
import { GetNewsResponse } from "../models/responses/news/getNewsResponse";
import { GetAllNewsResponse } from "../models/responses/news/getAllNewsResponse";
import { UpdateNewsResponse } from "../models/responses/news/updateNewsResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class NewsService extends BaseService<
PageRequestModel,
GetAllNewsResponse,
GetNewsRequest,
GetNewsResponse,
CreateNewsRequest,
CreateNewsResponse,
UpdateNewsRequest,
UpdateNewsResponse,
DeleteNewsRequest,
DeleteNewsResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "News";
    }
}
export default new NewsService();