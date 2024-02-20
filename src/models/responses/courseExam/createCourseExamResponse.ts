export interface CreateCourseExamResponse {
    id: string;
    studentId: string;
    courseDetailId:string;
    name: string;
    time: string;
    status: boolean;
    description: string;
    examUrl: string;
}