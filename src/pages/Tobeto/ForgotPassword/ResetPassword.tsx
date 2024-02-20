import { Button, Col, Container, Image, Row } from "react-bootstrap";
import OutBanner from "../../../components/Banner/OutBanner";
import OutNavbar from "../../../components/Navbar/OutNavbar";
import OutFooter from "../../../components/Footer/OutFooter";
import FormikInput from "../../../components/FormikInput/FormikInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import toastr from "toastr";
import userService from "../../../services/userService";
import { ResetPasswordRequest } from "../../../models/requests/user/resetPasswordRequest";
import { passwordRule } from "../../../core/validation/customValidationRules";

interface PasswordForm {
  password: string;
  comfirmPassword: string;
  token: string | null;
}

const ResetPassword = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const token = searchParams.get("token");
  console.log(token);

  const navigate = useNavigate();
  const initialValues: PasswordForm = {
    password: "",
    comfirmPassword: "",
    token: "",
  };
  const validationSchema = Yup.object({
    password: Yup.string()
      .required("Şifre alanı zorunludur.")
      .min(2, "Şifre en az 2 haneden oluşmalıdır.")
      .max(32)
      .test(
        "is-strong",
        "Bu alan en az 1 büyük, 1 küçük harf ve 1 numerik değer içermelidir",
        passwordRule
      ),
    comfirmPassword: Yup.string()
      .required("Şifre Tekrar alanı zorunludur.")
      .oneOf([Yup.ref("password")], "Yeni şifreler aynı değil."),
    token: Yup.string(),
  });
  const handleReset = async (
    values: PasswordForm,
    {
      setSubmitting,
      setErrors,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      setErrors: (errors: Record<string, string>) => void;
    }
  ) => {
    try {
      const passwordData: ResetPasswordRequest =
        token !== null
          ? {
              password: values.password,
              comfirmPassword: values.comfirmPassword,
              token: token,
            }
          : {
              password: "",
              comfirmPassword: "",
              token: "",
            };

      const response = await userService.ResetPassword(passwordData);
      if (response) {
        console.log(response);
        navigate("/giris");
        toastr.success("Şifre sıfırlama onaylandı");
      } else {
        toastr.error("Girdiğiniz şifre geçersizdir.");
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
          <Row>
            <Col md={6} className="btn-rainbow-card mx-auto text-center">
              <div className="py-4 px-sm-0 px-md-20 text-center ">
                <Image
                  src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
                  width="200"
                  height="200"
                />
                <Formik
                  validationSchema={validationSchema}
                  initialValues={initialValues}
                  onSubmit={handleReset}
                >
                  <Form>
                    <h3>
                      <b>Şifre Sıfırlama</b>
                    </h3>
                    <hr />
                    <FormikInput
                      name="password"
                      placeholder="Şifre"
                      type="password"
                    />
                    <FormikInput
                      name="comfirmPassword"
                      placeholder="Şifre Tekrar"
                      type="password"
                    />
                    <Button
                      type="submit"
                      className="btn-success w-90 mt-3 rounded-5"
                    >
                      Gönder
                    </Button>
                  </Form>
                </Formik>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <OutFooter />
    </>
  );
};
export default ResetPassword;
