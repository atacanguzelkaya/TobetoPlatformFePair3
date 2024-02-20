export interface UpdateApplicationRequest {
	id: string;
	projectId: string;
	description: string;
	applicationForStatus: string;
	documentUploadForStatus: string;
	applicationStatus: boolean;
}