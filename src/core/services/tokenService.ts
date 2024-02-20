class TokenService {
	getToken() {
        const x = localStorage.getItem("token");
        if (x) {
            return JSON.parse(x).token;
        } else {
            return null;
        }
    }

	hasToken(): boolean {
		return localStorage.getItem("token") != null;
	}
}

export default new TokenService();