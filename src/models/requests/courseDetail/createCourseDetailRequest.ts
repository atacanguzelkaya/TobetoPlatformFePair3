export interface CreateCourseDetailRequest {
	courseCategoryId: string;
	name: string;
	isLiked: boolean;
	isFavorited: boolean;
	startDate: string;
	endDate: string;
	spentTime: number;
	contentCount: number;
}