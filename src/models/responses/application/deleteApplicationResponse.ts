export interface DeleteApplicationResponse {
    id: string;
    projectId: string;
    description: string;
    applicationForStatus: string;
    documentUploadForStatus: string;
    applicationStatus: boolean;
}