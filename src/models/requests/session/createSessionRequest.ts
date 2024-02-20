export interface CreateSessionRequest {
	instructorId: string;
	liveContentId: string;
	name: string;
	startDate: string;
	endDate: string;
	recordUrl: string;
	sessionLinkUrl: string;
}