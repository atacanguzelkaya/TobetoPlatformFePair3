import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Tobeto/Homepage/Homepage";
import AboutUs from "../../pages/Tobeto/AboutUs/AboutUs";
import ForIndividuals from "../../pages/Tobeto/ForIndividuals/ForIndividuals";
import ForCorporate from "../../pages/Tobeto/ForCorporate/ForCorporate";
import OutCatalog from "../../pages/Tobeto/OutCatalog/OutCatalog";
import Codecademy from "../../pages/Tobeto/Codecademy/Codecademy";
import HomepageCalendar from "../Calendar/HomepageCalendar";
import IstanbulKodluyor from "../../pages/IstanbulKodluyor/IstanbulKodluyor";
import Login from "../../pages/Tobeto/Login/Login";
import Register from "../../pages/Tobeto/Register/Register";
import ForgotPassword from "../../pages/Tobeto/ForgotPassword/ForgotPassword";
import ResetPassword from "../../pages/Tobeto/ForgotPassword/ResetPassword";
import Platform from "../../pages/Platform/Platform/Platform";
import MyProfile from "../../pages/Platform/Profile/MyProfile/MyProfile";
import MyCourses from "../../pages/Platform/MyCourses/MyCourses";
import Announcements from "../../pages/Platform/Announcements/Announcements";
import Evaluations from "../../pages/Platform/Evaluations/Evaluations";
import Catalog from "../../pages/Platform/Catalog/Catalog";
import AsyncCourseContent from "../../pages/Platform/AsyncCourseContent/AsyncCourseContent";
import LiveCourseContent from "../../pages/Platform/LiveCourseContent/LiveCourseContent";
import EditProfile from "../../pages/Platform/Profile/EditProfile/EditProfile";
import MyExperiences from "../../pages/Platform/Profile/MyExperiences/MyExperiences";
import MyEducation from "../../pages/Platform/Profile/MyEducation/MyEducation";
import MyAbilities from "../../pages/Platform/Profile/MyAbilities/MyAbilities";
import MyCertificates from "../../pages/Platform/Profile/MyCertificates/MyCertificates";
import SocialMediaAccounts from "../../pages/Platform/Profile/SocialAccounts/SocialMediaAccounts";
import ForeignLanguage from "../../pages/Platform/Profile/ForeignLanguage/ForeignLanguage";
import Settings from "../../pages/Platform/Profile/Settings/settings";
import NotFound from "../../pages/NotFound/NotFound";
import Calendar from "../Calendar/Calendar";
import ProtectedRoute from "./ProtectedRoute";
import ContactUs from "../../pages/Tobeto/ContactUs/ContactUs";

const RouteDefinitions = () => {
	return (
		<Routes>
			<Route path="/istanbul-kodluyor" element={<IstanbulKodluyor />} />
			<Route path="*" element={<NotFound />} />
			<Route path="/" element={<Homepage />} />
			<Route path="/hakkimizda" element={<AboutUs />} />
			<Route path="/iletisim" element={<ContactUs />} />
			<Route path="/bireyler-icin" element={<ForIndividuals />} />
			<Route path="/kurumlar-icin" element={<ForCorporate />} />
			<Route path="/katalog" element={<OutCatalog />} />
			<Route path="/codecademy" element={<Codecademy />} />
			<Route path="/takvim-anasayfa" element={<HomepageCalendar />}></Route>
			<Route path="/giris" element={<ProtectedRoute><Login /></ProtectedRoute>} />
			{/* <Route path="/kayit-ol" element={<ProtectedRoute><Register /></ProtectedRoute>} /> */}
			<Route path="/kayit-ol" element={<Register />} />
			<Route path="/sifremi-unuttum" element={<ProtectedRoute><ForgotPassword /></ProtectedRoute>}></Route>
			<Route path="/reset-password" element={<ResetPassword />}></Route>
			<Route path="/platform" element={<ProtectedRoute><Platform /></ProtectedRoute>}></Route>
			<Route path="/profilim" element={<ProtectedRoute><MyProfile /></ProtectedRoute>}></Route>
			<Route path="/egitimlerim" element={<ProtectedRoute><MyCourses /></ProtectedRoute>}></Route>
			<Route path="/duyurularim" element={<ProtectedRoute><Announcements /></ProtectedRoute>}></Route>
			<Route path="/degerlendirmeler" element={<ProtectedRoute><Evaluations /></ProtectedRoute>}></Route>
			<Route path="/platform-katalog" element={<ProtectedRoute><Catalog /></ProtectedRoute>}></Route>
			<Route path="/takvim" element={<ProtectedRoute><Calendar /></ProtectedRoute>}></Route>
			<Route path="/asynccontent/:id" element={<ProtectedRoute><AsyncCourseContent/></ProtectedRoute>}></Route>
			<Route path="/livecontent/:id" element={<ProtectedRoute><LiveCourseContent /></ProtectedRoute>}></Route>
			<Route path="/profilim/profilimi-duzenle/kisisel-bilgilerim" element={<ProtectedRoute><EditProfile /></ProtectedRoute>}></Route>
			<Route path="/profilim/profilimi-duzenle/deneyimlerim" element={<ProtectedRoute><MyExperiences /></ProtectedRoute>}></Route>
			<Route path="/profilim/profilimi-duzenle/egitim-hayatim" element={<ProtectedRoute><MyEducation /></ProtectedRoute>}></Route>
			<Route path="/profilim/profilimi-duzenle/yetkinliklerim" element={<ProtectedRoute><MyAbilities /></ProtectedRoute>}></Route>
			<Route path="/profilim/profilimi-duzenle/sertifikalarim" element={<ProtectedRoute><MyCertificates /></ProtectedRoute>}></Route>
			<Route path="/profilim/profilimi-duzenle/medya-hesaplarim" element={<ProtectedRoute><SocialMediaAccounts /></ProtectedRoute>}></Route>
			<Route path="/profilim/profilimi-duzenle/yabanci-dil" element={<ProtectedRoute><ForeignLanguage /></ProtectedRoute>}></Route>
			<Route path="/profilim/profilimi-duzenle/ayarlar" element={<ProtectedRoute><Settings /></ProtectedRoute>}></Route>
		</Routes>
	);
};
export default RouteDefinitions;