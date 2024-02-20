export interface GetAsyncCourseResponse {
    id: string;
    courseId: string;
    courseDetailId: string;
    asyncCourseName: string;
    asyncCourseCategoryName: string;
    asyncCourseContentCount: number;
    asyncCourseStartDate: string;
    asyncCourseEndDate: string;
    asyncCourseSpentTime: string;
    estimatedTime: string;
    asyncCourseIsFavorited: boolean;
    asyncCourseIsLiked: boolean;
    producingCompany: string;
}