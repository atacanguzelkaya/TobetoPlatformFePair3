export interface CreateApplicationRequest {
	projectId: string;
	description: string;
	applicationForStatus: string;
	documentUploadForStatus: string;
	applicationStatus: boolean;
}