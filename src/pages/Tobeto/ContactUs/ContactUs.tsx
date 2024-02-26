import OutBanner from "../../../components/Banner/OutBanner";
import OutNavbar from "../../../components/Navbar/OutNavbar";
import OutFooter from "../../../components/Footer/OutFooter";
import * as Yup from "yup";
import { Badge, Col, Container, Row, Table } from "react-bootstrap";
import { Form, Formik } from "formik";
import FormikInput from "../../../components/FormikInput/FormikInput";
import { Link } from "react-router-dom";

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
          const authData: ContactUsForm = {
            fullName: values.fullName,
            email: values.email,
            message: values.message,
          };
        }
        catch (error) {
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
            <Container className="mt-10 p-5">
                <Row>
                <Col xs={12} lg={6} className="order-first position-relative">
      <div className="position-relative py-12 px-10 bg-white shadow-lg b-r-15">
        <div className="w-100 justify-content-center d-flex">
          <Badge bg="success" text="white">İletişime Geçin</Badge>
        </div>
        <div className="w-100 justify-content-center d-flex">
          <h3 className="m-5">İletişim Bilgileri</h3>
        </div>
        <Table hover>
          <tbody>
            <tr className="contact_contactTr__90ggf">
              <td>Firma Adı:</td>
              <td>TOBETO</td>
            </tr>
            <tr className="contact_contactTr__90ggf">
              <td style={{ fontWeight: 'bold' }}>Firma Unvan:</td>
              <td>Avez Elektronik İletişim Eğitim Danışmanlığı Ticaret Anonim Şirketi</td>
            </tr>
            <tr className="contact_contactTr__90ggf">
              <td style={{ fontWeight: 'bold' }}>Vergi Dairesi:</td>
              <td>Beykoz</td>
            </tr>
            <tr className="contact_contactTr__90ggf">
              <td style={{ fontWeight: 'bold' }}>Vergi No:</td>
              <td>1050250859</td>
            </tr>
            <tr className="contact_contactTr__90ggf">
              <td style={{ fontWeight: 'bold' }}>Telefon:</td>
              <td>(0216) 331 48 00</td>
            </tr>
            <tr className="contact_contactTr__90ggf">
              <td style={{ fontWeight: 'bold' }}>E-Posta:</td>
              <td>info@tobeto.com</td>
            </tr>
            <tr className="contact_contactTr__90ggf">
              <td style={{ fontWeight: 'bold' }}>Adres:</td>
              <td>Kavacık, Rüzgarlıbahçe Mah. Çampınarı Sok. No:4 Smart Plaza B Blok Kat:3 34805, Beykoz/İstanbul</td>
            </tr>
          </tbody>
        </Table>
        <Table className="mt-20" hover>
          <tbody>
            <tr className="contact_contactTr__90ggf">
              <td style={{ fontWeight: 'bold' }}>İstanbul Kodluyor için Telefon:</td>
              <td>(0216) 969 22 40</td>
            </tr>
            <tr className="contact_contactTr__90ggf">
              <td style={{ fontWeight: 'bold' }}>İstanbul Kodluyor için E-Posta:</td>
              <td>istanbulkodluyor@tobeto.com</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Col>
    <div className="col-12 col-lg-6 order-first position-relative">
      <div className="position-relative py-12 px-10 bg-white shadow-lg text-center b-r-15">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
          <Badge bg="success" text="white">Mesaj Bırakın</Badge>
            <h3 className="m-5">İletişim Formu</h3>
            <div className="mb-5">
            <FormikInput
                    name="fullName"
                    placeholder="Adınız Soyadınız"
                  />
            </div>
            <div className="mb-5">
            <FormikInput
                    name="email"
                    placeholder="E-Mail"
                  />
            </div>
            <div className="mb-5">
            <FormikInput
                    name="message"
                    as="textarea"
                    placeholder="Mesajınız"
                  />
              </div>
            <div style={{ fontSize: '11px' }} className="mb-3">
              Yukarıdaki form ile toplanan kişisel verileriniz Enocta tarafından talebinize dair işlemlerin yerine getirilmesi ve paylaşmış olduğunuz iletişim adresi üzerinden tanıtım, bülten ve pazarlama içerikleri gönderilmesi amacıyla{' '}
              <Link
                target="_blank"
                className="text-decoration-none"
                to="https://tobeto.com/yasal-metinler/kvkk-aydinlatma-metni"
              >
                Aydınlatma Metni
              </Link>{' '}
              çerçevesinde işlenebilecektir.
            </div>
            <button type="submit" className="btn btn-success" disabled={false}>
              Gönder
            </button>
          </Form>
        </Formik>
      </div>
    </div>
                </Row>
            </Container>
            <OutFooter />
        </>
    );
};

export default ContactUs;
