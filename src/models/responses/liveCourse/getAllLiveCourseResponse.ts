export interface GetAllLiveCourseResponse {
    id: string;
    courseId: string;
    liveCourseTitle: string;
    liveCourseCategoryName: string;
    liveCourseContentCount: number;
    liveCourseIsFavorited: boolean;
    liveCourseIsLiked: boolean;
    liveCourseStartDate: string;
    liveCourseEndDate: string;
    liveCourseSpentTime: string;
}