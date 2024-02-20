import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Platform from "../../pages/Platform/Platform/Platform";

type Props = {
	children: any;
};
const ProtectedRoute = (props: Props) => {
	const navigate = useNavigate();
	useEffect(() => {
		let token = localStorage.getItem("token");
		if (!token) {
			navigate("/giris");
		}
		else { <Platform /> }
	}, []);

	return <>{props.children}</>;
};
export default ProtectedRoute;
