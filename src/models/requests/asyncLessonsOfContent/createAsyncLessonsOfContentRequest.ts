export interface CreateAsyncLessonsOfContentRequest {
	asyncContentId:string;
	name: string;
	type: string;
	duration: number;
	isCompleted: boolean;
	imageUrl: string;
	videoUrl: string;
}