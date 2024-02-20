import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateCertificateRequest } from "../models/requests/certificate/createCertificateRequest";
import { DeleteCertificateRequest } from "../models/requests/certificate/deleteCertificateRequest";
import { GetCertificateRequest } from "../models/requests/certificate/getCertificateRequest";
import { UpdateCertificateRequest } from "../models/requests/certificate/updateCertificateRequest";
import { CreateCertificateResponse } from "../models/responses/certificate/createCertificateResponse";
import { DeleteCertificateResponse } from "../models/responses/certificate/deleteCertificateResponse";
import { GetCertificateResponse } from "../models/responses/certificate/getCertificateResponse";
import { GetAllCertificateResponse } from "../models/responses/certificate/getAllCertificateResponse";
import { UpdateCertificateResponse } from "../models/responses/certificate/updateCertificateResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class CertificateService extends BaseService<
PageRequestModel,
GetAllCertificateResponse,
GetCertificateRequest,
GetCertificateResponse,
CreateCertificateRequest,
CreateCertificateResponse,
UpdateCertificateRequest,
UpdateCertificateResponse,
DeleteCertificateRequest,
DeleteCertificateResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "Certificates";
    }
}
export default new CertificateService();