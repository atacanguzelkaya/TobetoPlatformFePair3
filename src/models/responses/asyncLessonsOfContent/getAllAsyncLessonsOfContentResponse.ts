export interface GetAllAsyncLessonsOfContentResponse {
    id: string;
    asyncContentId: string;
    asyncContentName: string;
    name: string;
    type: string;
    duration: number;
    isCompleted: boolean;
    imageUrl: string;
    videoUrl: string;
}