import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { CreateCertificateRequest } from "../../../../models/requests/certificate/createCertificateRequest";
import { PageRequestModel } from "../../../../core/pageRequestModel/pageRequest";
import ProfileSidebar from "../../../../components/Sidebar/profileSidebar";
import InnerNavbar from "../../../../components/Navbar/InnerNavbar";
import InnerFooter from "../../../../components/Footer/InnerFooter";
import certificateService from "../../../../services/certificateService";
import authService from "../../../../services/authService";

export interface CertificateModel {
  id: string;
  filePath: string;
  uploadDate:string;
}

export interface GetAllCertificatesModel {
  from: number;
  index: number;
  size: number;
  count: number;
  page: number;
  items: CertificateModel[];
  hasPrevious: boolean;
  hasNext: boolean;
}
const pageRequest: PageRequestModel = { index: 0, size: 10 };

const MyCertificates = () => {
  const [certificates, setCertificates] = useState<CreateCertificateRequest>();
  const [certificateList, setCertificateList] = useState<CertificateModel[]>([]);

  const initialValues = {
    filePath: "",
    fileType: "",
    uploadDate: "",
  };

  useEffect(() => {
    fetchCertificates(pageRequest);
  }, []);

  const fetchCertificates = async (pageRequest: any) => {
    await certificateService.getAll(pageRequest).then((response: any) => {
      const userId = authService.getUserId();
      if (response) {
        const matchingCertificate = response.data.items.filter((item: any) =>
          item.userId === userId);
          setCertificateList(matchingCertificate);
      }
    });
  };

  const handleCertificateDelete = async (idToDelete: string) => {
    await certificateService.delete({ id: idToDelete });
    const updatedCertificateDetails = certificateList.filter(
      (certificate) => certificate.id !== idToDelete
    );
    setCertificateList(updatedCertificateDetails);
  };

  const handleSubmit = async (values: CreateCertificateRequest) => {
    const newValues: CreateCertificateRequest = {
      filePath: values.filePath,
      fileType: values.fileType,
      uploadDate: new Date().toISOString(),
    };
    await certificateService
      .create(newValues)
      .then((response) => {
        setCertificates(response.data);
        fetchCertificates(pageRequest);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  return (
    <>
      <InnerNavbar />
      <Container>
        <Row>
          <ProfileSidebar />
          <Col lg="9" className="inclusive">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              <Form>
                <div className="form-group">
                  <label htmlFor="file" className="mx-3 fw-bold">Dosya:</label>
                  <Field
                    type="file"
                    name="filePath"
                    className="form-control-file"
                  />
                  <ErrorMessage
                    name="filePath"
                    component="div"
                    className="text-danger"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  className="d-grid gap-2 col-3 mx-auto mb-5 rounded-5"
                >
                  Kaydet
                </Button>
              </Form>
            </Formik>
            <Col xs={10}>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Dosya Adı</th>
                    <th>Tarih</th>
                    <th>İşlem</th>
                  </tr>
                </thead>
                <tbody>
                  {certificateList.map((certificate) => (
                    <tr key={certificate.id}>
                      <td>{certificate.filePath}</td>
                      <td>{certificate.uploadDate.split('T')[0]}</td>
                      <td>
                        <Button
                          variant="danger"
                          onClick={() =>
                            handleCertificateDelete(certificate.id)
                          }
                        >
                          Sil
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Col>
        </Row>
      </Container>
      <InnerFooter />
    </>
  );
};
export default MyCertificates;