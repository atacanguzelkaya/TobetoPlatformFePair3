import { AxiosResponse } from "axios";
import axiosInstance from "../interceptors/axiosInceptor";

export class BaseService<
	PageRequestType,
	GetAllType,
	GetRequestType,
	GetResponseType,
	CreateRequestType,
	CreateResponseType,
	UpdateRequestType,
	UpdateResponseType,
	DeleteRequestType,
	DeleteResponseType,
> {
	public apiUrl: string;

	constructor() {
		this.apiUrl = "";
	}

	getAll(pageRequest: PageRequestType): Promise<AxiosResponse<GetAllType, any>> {
		return axiosInstance.get<GetAllType>(this.apiUrl + "/GetAll", { params: pageRequest });
	}

	get(request: GetRequestType): Promise<AxiosResponse<GetResponseType, any>> {
		return axiosInstance.get<GetResponseType>(this.apiUrl + "/GetById", { params: request });
	}

	create(request: CreateRequestType): Promise<AxiosResponse<CreateResponseType, any>> {
		return axiosInstance.post<CreateResponseType>(this.apiUrl + "/Add", request);
	}

	update(request: UpdateRequestType): Promise<AxiosResponse<UpdateResponseType, any>> {
		return axiosInstance.post<UpdateResponseType>(this.apiUrl + "/Update", request);
	}

	delete(request: DeleteRequestType): Promise<AxiosResponse<DeleteResponseType, any>> {
		return axiosInstance.delete<DeleteResponseType>(this.apiUrl + "/Delete", { data: request });
	}
}