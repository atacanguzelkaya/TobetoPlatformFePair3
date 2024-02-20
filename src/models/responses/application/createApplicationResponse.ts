export interface CreateApplicationResponse
{
    id: string;
    projectId: string;
    projectName:string;
    description: string;
    applicationForStatus: string;
    documentUploadForStatus: string;
    applicationStatus: boolean;
}