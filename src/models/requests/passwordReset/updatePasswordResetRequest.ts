export interface UpdatePasswordResetRequest {
	userId: string;
	email: string;
	password: string;
	rePassword: string;
}