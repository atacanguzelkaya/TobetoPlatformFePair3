import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikInput from "../../../components/FormikInput/FormikInput";
import { Link } from "react-router-dom";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import OutBanner from "../../../components/Banner/OutBanner";
import OutNavbar from "../../../components/Navbar/OutNavbar";
import OutFooter from "../../../components/Footer/OutFooter";
import authService from "../../../services/authService";
import { useNavigate } from "react-router-dom";
import { AuthForLoginRequest } from "../../../models/requests/auth/authForLoginRequest";
import {  useSelector } from "react-redux";
import { StateModel } from "../../../store/auth/authSlice";
import toastr from "toastr";
import "./login.css";
import userService from "../../../services/userService";

interface LoginForm {
  email: string;
  password: string;
}
 
const Login = () => {
  const auth = useSelector((state: StateModel) => state.auth.isAuthenticated);
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues: LoginForm = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Email alanı zorunludur."),
    password: Yup.string().required("Şifre alanı zorunludur."),
  });
  const handleLogin = async (
    values: LoginForm,
    {
      setSubmitting,
      setErrors,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      setErrors: (errors: Record<string, string>) => void;
    }
  ) => {
    try {
      const authData: AuthForLoginRequest = {
        email: values.email,
        password: values.password,
      };

      const token = await authService.login(authData);
      if (token) {
        localStorage.setItem( "token", JSON.stringify({ ...token, }));
        const id = authService.getUserId();
        userService.get({id}).then(response => {
          localStorage.setItem( "user", JSON.stringify(response.data));
        }).catch(error => {
          console.error('Error fetching user data:', error);
        });
        setTimeout(() => { navigate("/platform"); }, 200);
        toastr.success("Giriş başarılı.");
      } else {
        toastr.error("E posta ya da şifre hatalı");
      }

    } catch (error) {
      console.error("Kimlik doğrulama hatası:", (error as Error).message);
      setErrors({ password: "Kimlik doğrulama hatası" });
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <>
      <OutBanner />
      <OutNavbar />
      <section className="position-relative bg-light-light mt-10 pt-5 mb-5">
        <Container>
          <Row >
            <div className="btn-rainbow-card text-center mx-auto col-md-5 col-12">
              <div className="py-4 px-sm-0 px-md-20 text-center ">
                <Image
                  src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
                  width="200"
                  height="200"
                />
                <Formik
                  validationSchema={validationSchema}
                  initialValues={initialValues}
                  onSubmit={handleLogin}
                >
                  <Form>
                    <FormikInput name="email" placeholder="E-posta" type="email"/>
                    <FormikInput name="password" placeholder="Şifre" type="password"/>
                    <Button type="submit" className="btn btn-success rounded-4 w-90 mt-6">
                      Giriş Yap
                    </Button>
                    <label>
                      <small>
                      <Link to="/sifremi-unuttum" className="custom-paragraph mt-5">
                          Şifremi Unuttum
                        </Link>
                      </small>
                    </label>
                    <Col>
                      <label>
                        <small>
                          Henüz üye değil misin?
                          <Link
                            className="text-decoration-none text-muted fw-bold"
                            to="/kayit-ol"
                          >
                            Kayıt Ol
                          </Link>
                        </small>
                      </label>
                    </Col>
                  </Form>
                </Formik>
              </div>
            </div>
            <div className="col-md-5 col-12 btn-rainbow-card">
              <div className="ik-banner-big h-100 text-center">
                <Image
                  src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
                  width="200"
                  height="200"
                />
                 <div className="custom-text">
                  Aradığın "İş" Burada!
                </div>
                <div>
                  <Link to="/kayit-ol" className="btn btn-success px-5 rounded-4 w-100 mt-5">
                    Başvur
                  </Link>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>
      <OutFooter />
    </>
  );
};
export default Login;
