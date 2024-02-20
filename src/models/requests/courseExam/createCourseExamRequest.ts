export interface CreateCourseExamRequest {
	studentId: string;
	courseDetailId:string;
	name: string;
	time: string;
	status: boolean;
	description: string;
	examUrl: string;
}