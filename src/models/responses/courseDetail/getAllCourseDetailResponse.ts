export interface GetAllCourseDetailResponse {
    id: string;
    courseCategoryId: string;
    courseCategoryName: string;
    name: string;
    isLiked: boolean;
    isFavorited: boolean;
    startDate: string;
    endDate: string;
    spentTime: number;
    contentCount: number;
}