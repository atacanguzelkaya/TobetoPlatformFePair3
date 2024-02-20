import { BaseService } from "../core/services/baseService";
import { BASE_API_URL } from "../environment/environment";
import { CreateContactUsRequest } from "../models/requests/contactUs/createContactUsRequest";
import { DeleteContactUsRequest } from "../models/requests/contactUs/deleteContactUsRequest";
import { GetContactUsRequest } from "../models/requests/contactUs/getContactUsRequest";
import { UpdateContactUsRequest } from "../models/requests/contactUs/updateContactUsRequest";
import { CreateContactUsResponse } from "../models/responses/contactUs/createContactUsResponse";
import { DeleteContactUsResponse } from "../models/responses/contactUs/deleteContactUsResponse";
import { GetContactUsResponse } from "../models/responses/contactUs/getContactUsResponse";
import { GetAllContactUsResponse } from "../models/responses/contactUs/getAllContactUsResponse";
import { UpdateContactUsResponse } from "../models/responses/contactUs/updateContactUsResponse";
import { PageRequestModel } from "../core/pageRequestModel/pageRequest";

class ContactUsService extends BaseService<
PageRequestModel,
GetAllContactUsResponse,
GetContactUsRequest,
GetContactUsResponse,
CreateContactUsRequest,
CreateContactUsResponse,
UpdateContactUsRequest,
UpdateContactUsResponse,
DeleteContactUsRequest,
DeleteContactUsResponse
> {
    constructor() {
        super();
        this.apiUrl = BASE_API_URL + "ContactUs";
    }
}
export default new ContactUsService();