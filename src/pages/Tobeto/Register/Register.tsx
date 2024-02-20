import { Formik, Form } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Col, Container, Image, Modal, Row } from "react-bootstrap";
import { passwordRule } from "../../../core/validation/customValidationRules";
import { useNavigate } from "react-router-dom";
import { AuthForRegisterRequest } from "../../../models/requests/auth/authForRegisterRequest";
import { StateModel } from "../../../store/auth/authSlice";
import FormikInput from "../../../components/FormikInput/FormikInput";
import OutBanner from "../../../components/Banner/OutBanner";
import OutNavbar from "../../../components/Navbar/OutNavbar";
import OutFooter from "../../../components/Footer/OutFooter";
import authService from "../../../services/authService";
import * as Yup from "yup";
import toastr from "toastr";
import "./register.css";

interface RegisterForm {
  name: string;
  surname: string;
  email: string;
  password: string;
  rePassword: string;
}
const Register = () => {
  const [modalShow, setModalShow] = useState(false);
  const auth = useSelector((state: StateModel) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const initialValues: RegisterForm = {
    name: "",
    surname: "",
    email: "",
    password: "",
    rePassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Ad alanı zorunludur."),
    surname: Yup.string().required("Soyad alanı zorunludur."),
    email: Yup.string().required("Email alanı zorunludur."),
    password: Yup.string()
      .required("Şifre alanı zorunludur.")
      .min(2, "Şifre en az 2 haneden oluşmalıdır.")
      .max(50)
      .test(
        "is-strong",
        "Bu alan en az 1 büyük, 1 küçük harf ve 1 numerik değer içermelidir",
        passwordRule
      ),
    rePassword: Yup.string()
      .required("Şifre Tekrar alanı zorunludur.")
      .oneOf([Yup.ref("password")], "Şifre alanı aynı olmak zorundadır."),
  });
  const handleRegister = async (
    values: RegisterForm,
    {
      setSubmitting,
      setErrors,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      setErrors: (errors: Record<string, string>) => void;
    }
  ) => {
    try {
      const authData: AuthForRegisterRequest = {
        firstName: values.name,
        lastName: values.surname,
        email: values.email,
        password: values.password,
        rePassword: values.rePassword,
      };

      const register = await authService.register(authData);
      if (register) {
        setTimeout(() => { navigate("/giris"); }, 1000);
        localStorage.clear();
        toastr.success("Kaıyt oluşturma işlemi başarılı.");
      } else {
        toastr.error("Kayıtlı e posta adresi");
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
        <Container className="pt-20">
          <Row>
            <div className="btn-rainbow-card mx-auto text-center col-md-5 col-12">
              <div className="py-4 px-sm-0 px-md-10 text-center ">
                <Image
                  src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
                  width="200"
                  height="200"
                />
                <Formik
                  validationSchema={validationSchema}
                  initialValues={initialValues}
                  onSubmit={handleRegister}
                >
                  <Form>
                    <FormikInput name="name" placeholder="Ad*" />
                    <FormikInput name="surname" placeholder="Soyad*" />
                    <FormikInput name="email" placeholder="E-posta*" type="email" />
                    <FormikInput name="password" placeholder="Şifre*" type="password" />
                    <FormikInput name="rePassword" placeholder="Şifre Tekrar*" type="password" />
                    <button
                      type="submit"
                      className="btn btn-success rounded-4 w-100 mt-6" onClick={() => setModalShow(true)}
                    >
                      Kayıt Ol
                    </button>
                    <div className="col-12 mt-6">
                      <label>
                        <small>
                          Zaten bir hesabın var mı?{" "}
                          <Link
                            className="text-decoration-none text-muted fw-bold"
                            to="/giris"
                          >
                            Giriş Yap
                          </Link>
                        </small>
                      </label>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
            <Col md={6} xs={12} className="btn-rainbow-card">
              <div className="ik-banner-big">
                <span>
                  <img
                    alt=""
                    aria-hidden="true"
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27200%27%20height=%27120%27/%3e"
                  />
                </span>
                <img
                  alt="İstanbul Kodluyor Logo"
                  srcSet="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg 1x, https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg 2x"
                  src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
                  decoding="async"
                  data-nimg="intrinsic"
                  className="ik-logo"
                />
                <div className="d-flex">
                  <span></span>
                  <Link
                    className="btn d-md-inline-block rounded-4 px-5 mt-5 btn-success"
                    to="/istanbul-kodluyor"
                  > Başvur</Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Modal aria-labelledby="contained-modal-title-vcenter" centeredbackdrop="true" show={modalShow} onHide={() => setModalShow(false)} className="alert-modal">
        <Modal.Body>
          <div className="mw-xl mx-auto">
            <div className="bg-white shadow-lg">
              <div className="alert-header mx-3">
                <span className="alert-icon"></span>
                <span onClick={() => setModalShow(false)} className="alert-close"></span>
              </div>
              <p className="alert-message mx-3"> Kayıt oluşturmak için gerekli sözleşmeler </p>
              <label className="d-flex mt-5 text-start justify-content-center">
                <small className="text-muted w-90">
                  Kişisel verileriniz
                  <Link target="_blank" to="https://tobeto.com/yasal-metinler/kvkk-aydinlatma-metni" >
                    Aydınlatma Metni
                  </Link>{" "}
                  kapsamında işlenmektedir.
                </small>
              </label>
              <label className="d-flex mt-1 text-start justify-content-center">
                <small className="text-muted w-90">
                  <input
                    name="contact"
                    className="form-check-input me-2"
                    type="checkbox"
                  />
                  <Link
                    target="_blank"
                    to="https://tobeto.com/yasal-metinler/acik-riza-metni"
                  >
                    Açık Rıza Metni
                  </Link>
                  ’ni okudum ve anladım.*
                </small>
              </label>
              <label className="d-flex mt-1 text-start justify-content-center">
                <small className="text-muted w-90">
                  <input
                    name="membershipContrat"
                    className="form-check-input me-2"
                    type="checkbox"
                  />
                  <Link
                    target="_blank"
                    to="https://tobeto.com/yasal-metinler/tobeto-uyelik-sozlesmesi"
                  >
                    Üyelik Sözleşmesi ve Kullanım Koşulları
                  </Link>
                  ’nı okudum ve anladım.*
                </small>
              </label>
              <label className="d-flex mt-2 text-start justify-content-center">
                <small className="text-muted w-90">
                  İletişim bilgilerim üzerinden pazarlama ve tanıtım amaçlı
                  irtibata geçilmesini kabul ediyorum.
                  <label className="d-flex mt-2 text-start">
                    <input
                      name="emailConfirmation"
                      className="form-check-input me-2"
                      type="checkbox"
                    />
                    <small className="text-muted">
                      E-posta gönderim izni.*
                    </small>
                  </label>
                  <label className="d-flex mt-1 text-start">
                    <input
                      name="phoneConfirmation"
                      className="form-check-input me-2"
                      type="checkbox"
                    />
                    <small className="text-muted">Arama izni.*</small>
                  </label>
                </small>
              </label>
              <div className="alert-buttons">
                <Button onClick={() => setModalShow(false)} className="btn btn-no my-3 ">
                  Hayır
                </Button>
                <Button onClick={() => handleRegister} className="btn btn-yes my-3" type="submit">
                  Evet
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <OutFooter />
    </>
  );
};

export default Register;
