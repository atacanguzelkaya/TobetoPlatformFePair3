import { Badge, Button, Col, Container, Row, Table } from "react-bootstrap";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import OutBanner from "../../../components/Banner/OutBanner";
import OutNavbar from "../../../components/Navbar/OutNavbar";
import OutFooter from "../../../components/Footer/OutFooter";
import FormikInput from "../../../components/FormikInput/FormikInput";
import * as Yup from "yup";

interface ContactUsForm {
  fullName: string;
  email: string;
  message: string;
}

const ContactUs = () => {
  const initialValues: ContactUsForm = {
    fullName: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Ad alanı zorunludur."),
    email: Yup.string().required("Soyad alanı zorunludur."),
    message: Yup.string().required("Email alanı zorunludur."),
  });
  const handleSubmit = (
    values: ContactUsForm,
    {
      setSubmitting,
      setErrors,
    }: {
      setSubmitting: (isSubmitting: boolean) => void;
      setErrors: (errors: Record<string, string>) => void;
    }
  ) => {
    try {
      const ContactUsData: ContactUsForm = {
        fullName: values.fullName,
        email: values.email,
        message: values.message,
      };
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
      <section className="p-5 mt-10 position-relative border-top border-info overflow-hidden">
        <div className="d-md-none position-absolute top-0 start-0 w-100 h-100" />
        <Container className="position-relative">
          <Row>
            <Col className="col-lg-6 order-first position-relative">
              <div className="position-relative py-5 px-5 bg-white shadow-lg b-r-15">
                <div className="w-100 justify-content-center d-flex">
                  <Badge bg="success" text="white">
                    İletişime Geçin
                  </Badge>
                </div>
                <div className="w-100 justify-content-center d-flex">
                  <h3 className="m-5">İletişim Bilgileri</h3>
                </div>
                <Table hover>
                  <tbody>
                    <tr className="contact_contactTr__90ggf">
                      <td className="fw-bold">Firma Adı:</td>
                      <td>TOBETO</td>
                    </tr>
                    <tr className="contact_contactTr__90ggf">
                      <td className="fw-bold">Firma Unvan:</td>
                      <td>
                        Avez Elektronik İletişim Eğitim Danışmanlığı Ticaret
                        Anonim Şirketi
                      </td>
                    </tr>
                    <tr className="contact_contactTr__90ggf">
                      <td className="fw-bold">Vergi Dairesi:</td>
                      <td>Beykoz</td>
                    </tr>
                    <tr className="contact_contactTr__90ggf">
                      <td className="fw-bold">Vergi No:</td>
                      <td>1050250859</td>
                    </tr>
                    <tr className="contact_contactTr__90ggf">
                      <td className="fw-bold">Telefon:</td>
                      <td>(0216) 331 48 00</td>
                    </tr>
                    <tr className="contact_contactTr__90ggf">
                      <td className="fw-bold">E-Posta:</td>
                      <td>info@tobeto.com</td>
                    </tr>
                    <tr className="contact_contactTr__90ggf">
                      <td className="fw-bold">Adres:</td>
                      <td>
                        Kavacık, Rüzgarlıbahçe Mah. Çampınarı Sok. No:4 Smart
                        Plaza B Blok Kat:3 34805, Beykoz/İstanbul
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Table hover>
                  <tbody>
                    <tr className="contact_contactTr__90ggf">
                      <td className="fw-bold">
                        İstanbul Kodluyor için Telefon:
                      </td>
                      <td>(0216) 969 22 40</td>
                    </tr>
                    <tr className="contact_contactTr__90ggf">
                      <td className="fw-bold">
                        İstanbul Kodluyor için E-Posta:
                      </td>
                      <td>istanbulkodluyor@tobeto.com</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Col>
            <Col className="col-lg-6 order-first position-relative">
              <div className="position-relative py-5 px-5 bg-white shadow-lg text-center b-r-15">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  <Form>
                    <Badge bg="success" text="white">
                      Mesaj Bırakın
                    </Badge>
                    <h3 className="m-5">İletişim Formu</h3>
                    <div className="mb-5">
                      <FormikInput
                        name="fullName"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div className="mb-5">
                      <FormikInput name="email" placeholder="E-Mail" />
                    </div>
                    <div className="mb-5">
                      <FormikInput
                        name="message"
                        as="textarea"
                        placeholder="Mesajınız"
                      />
                    </div>
                    <p className="small mb-3 text-center">
                      Yukarıdaki form ile toplanan kişisel verileriniz Enocta
                      tarafından talebinize dair işlemlerin yerine getirilmesi
                      ve paylaşmış olduğunuz iletişim adresi üzerinden tanıtım,
                      bülten ve pazarlama içerikleri gönderilmesi amacıyla{" "}
                      <Link
                        target="_blank"
                        className="text-decoration-none"
                        to="https://tobeto.com/yasal-metinler/kvkk-aydinlatma-metni"
                      >
                        Aydınlatma Metni
                      </Link>{" "}
                      çerçevesinde işlenebilecektir.
                    </p>
                    <Button className="mt-2"
                      type="submit"
                      variant="success rounded-5"
                      disabled={false}
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

export default ContactUs;