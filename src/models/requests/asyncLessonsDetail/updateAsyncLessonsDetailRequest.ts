export interface UpdateAsyncLessonsDetailRequest {
	id: string;
	asyncLessonsOfContentId: string;
	isLiked: boolean;
	category: string;
	language: string;
	subType: string;
	description: string;
	producingCompany: string;
}