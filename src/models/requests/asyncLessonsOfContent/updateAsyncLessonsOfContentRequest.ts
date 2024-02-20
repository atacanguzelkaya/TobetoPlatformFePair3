export interface UpdateAsyncLessonsOfContentRequest {
	id: string;
	asyncContentId:string;
	name: string;
	type: string;
	duration: number;
	isCompleted: boolean;
	imageUrl: string;
	videoUrl: string;
}