export interface UpdatePersonalInfoResponse {
    id: string;
    userId: string;
	firstName: string;
	lastName: string;
	phoneNumber: string,
	email:string,
	profileImageUrl?: string;
	birthDate: string;
	nationalIdentity: string;
	country: string;
	city: string;
	district: string;
	address: string;
	about: string;
}