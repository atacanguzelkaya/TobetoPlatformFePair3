import { Button, Col, Container, Image, Row } from "react-bootstrap";
import OutBanner from "../../../components/Banner/OutBanner";
import OutNavbar from "../../../components/Navbar/OutNavbar";
import OutFooter from "../../../components/Footer/OutFooter";
import FormikInput from "../../../components/FormikInput/FormikInput";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import toastr from "toastr";
import userService from "../../../services/userService";
import { PasswordResetEmailRequest } from "../../../models/requests/user/passwordResetEmailRequest";

interface ResetForm {
    email: string;
}
const ForgotPassword = () => {
    const navigate = useNavigate();
    const initialValues: ResetForm = {
        email: "",
    };
    const validationSchema = Yup.object({
        email: Yup.string().required("Email alanı zorunludur."),
    });
    const handleReset = async (
        values: ResetForm,
        {
            setSubmitting,
            setErrors,
        }: {
            setSubmitting: (isSubmitting: boolean) => void;
            setErrors: (errors: Record<string, string>) => void;
        }
    ) => {
        try {
            const emailData: PasswordResetEmailRequest = {
                email: values.email,
              };
            const response = await userService.PasswordResetEmail(emailData);
            if(response.status === 200){
                navigate("/giris");
                toastr.success("Şifre sıfırlama linkini e-posta adresinize gönderdik. Lütfen gelen kutunuzu kontrol edin.");
            } else {
                toastr.error("Girdiğiniz e-posta geçersizdir.");
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
                <Container >
                    <Row >
                        <Col md={6} className="btn-rainbow-card mx-auto text-center">
                            <div className="py-4 px-sm-0 px-md-20 text-center ">
                                <Image src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
                                    width="200" height="200"
                                />
                                <Formik validationSchema={validationSchema}
                                initialValues={initialValues}
                                onSubmit={handleReset}>
                                    <Form>
                                        <h3><b>Şifre Sıfırlama</b></h3>
                                        <hr />
                                        <FormikInput name="email" placeholder="Şifre sıfırlamak için e-posta adresinizi giriniz" />
                                        <Button type="submit" className="btn-success w-90 mt-3 rounded-5">
                                            Gönder
                                        </Button>
                                    </Form>
                                </Formik>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
            <OutFooter />
        </>
    );
};
export default ForgotPassword;