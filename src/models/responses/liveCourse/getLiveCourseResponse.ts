export interface GetLiveCourseResponse {
    id: string;
    courseId: string;
    courseDetailId: string;
    liveCourseTitle: string;
    liveCourseCategoryName: string;
    liveCourseContentCount: number;
    liveCourseIsFavorited: boolean;
    liveCourseIsLiked: boolean;
    liveCourseStartDate: string;
    liveCourseEndDate: string;
    liveCourseSpentTime: string;
}