import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateSessionRequest } from "../models/requests/session/createSessionRequest";
import { DeleteSessionRequest } from "../models/requests/session/deleteSessionRequest";
import { GetSessionRequest } from "../models/requests/session/getSessionRequest";
import { UpdateSessionRequest } from "../models/requests/session/updateSessionRequest";
import { CreateSessionResponse } from "../models/responses/session/createSessionResponse";
import { DeleteSessionResponse } from "../models/responses/session/deleteSessionResponse";
import { GetSessionResponse } from "../models/responses/session/getSessionResponse";
import { GetAllSessionResponse } from "../models/responses/session/getAllSessionResponse";
import { UpdateSessionResponse } from "../models/responses/session/updateSessionResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class SessionService extends BaseService<
PageRequestModel,
GetAllSessionResponse,
GetSessionRequest,
GetSessionResponse,
CreateSessionRequest,
CreateSessionResponse,
UpdateSessionRequest,
UpdateSessionResponse,
DeleteSessionRequest,
DeleteSessionResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "Sessions";
    }
}
export default new SessionService();