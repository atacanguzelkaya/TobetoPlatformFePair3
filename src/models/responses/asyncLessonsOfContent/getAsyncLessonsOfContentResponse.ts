export interface GetAsyncLessonsOfContentResponse {
    id: string;
    asyncContentId: string;
    asyncCourseId: string;
    name: string;
    type: string;
    duration: number;
    isCompleted: boolean;
    imageUrl: string;
    videoUrl: string;
}