import { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { CreateEducationRequest } from "../../../../models/requests/education/createEducationRequest";
import { PageRequestModel } from "../../../../core/pageRequestModel/pageRequest";
import ProfileSidebar from "../../../../components/Sidebar/profileSidebar";
import InnerNavbar from "../../../../components/Navbar/InnerNavbar";
import InnerFooter from "../../../../components/Footer/InnerFooter";
import ProfileFormikInput from "../../../../components/FormikInput/ProfileFormikInput";
import educationService from "../../../../services/educationService";
import authService from "../../../../services/authService";
import * as Yup from "yup";

export interface EducationListModel {
  id: string;
  userId: string;
  userName: string;
  educationLevel: string;
  university: string;
  department: string;
  startDate: number;
  graduationYear: number;
}
export interface GetAllEducationsModel { from: number; index: number; size: number; count: number; page: number; items: EducationListModel[]; hasPrevious: boolean; hasNext: boolean; }
const pageRequest: PageRequestModel = { index: 0, size: 10, };

const MyEducation = () => {
  const [education, setEducation] = useState<CreateEducationRequest>();
  const [educationList, setEducationList] = useState<EducationListModel[]>([]);

  const validationSchema = Yup.object().shape({
    educationLevel: Yup.string().required("Eğitim Seviyesi zorunludur."),
    university: Yup.string().required("Üniversite zorunludur."),
    department: Yup.string().required("Bölüm zorunludur."),
    startDate: Yup.number()
      .required("Başlangıç Yılı zorunludur.")
      .min(2000, "2000 yılı ve sonrası olmalıdır.")
      .max(2050, "2050 yılı ve öncesi olmalıdır."),
    graduationYear: Yup.number()
      .required("Mezuniyet Yılı zorunludur.")
      .min(2000, "2000 yılı ve sonrası olmalıdır.")
      .max(2050, "2050 yılı ve öncesi olmalıdır."),
  });

  const initialValues = {
    educationLevel: "",
    university: "",
    department: "",
    startDate: 2010,
    graduationYear: 2020,
  };
  const levels = [
    { id: 1, name: "Ön Lisans" },
    { id: 2, name: "Lisans" },
    { id: 3, name: "Yüksek Lisans" },
    { id: 4, name: "Doktora" },
  ];

  const handleSubmit = async (values: CreateEducationRequest) => {
    await educationService.create(values).then((response) => {
      setEducation(response.data)
      fetchCourses(pageRequest);
    }).catch((error: any) => { console.error(error) });
  };

  const fetchCourses = async (pageRequest: any) => {
    await educationService.getAll(pageRequest).then((response: any) => {
      const userId = authService.getUserId();
      if (response) {
        const matchingEducation = response.data.items.filter((item: any) =>
          item.userId === userId);
        setEducationList(matchingEducation);
      }
    });
  };

  const handleEducationDelete = async (idToDelete: string) => {
    await educationService.delete({ id: idToDelete });
    const updatedEducationDetails = educationList.filter(education => education.id !== idToDelete);
    setEducationList(updatedEducationDetails);
  };

  useEffect(() => { fetchCourses(pageRequest); }, []);
  return (
    <>
      <InnerNavbar />
      <Container>
        <Row>
          <ProfileSidebar />
          <Col lg="9" className="inclusive">
            <Formik
              onSubmit={handleSubmit}
              initialValues={initialValues}
              validationSchema={validationSchema}
            >
              <Form>
                <Row className="mb-3">
                  <Col className="mb-3">
                    <label className="form-label">Eğitim Durumu*</label>
                    <Field
                      as="select"
                      name="educationLevel"
                      className="form-select"
                    >
                      <option value="">Seviye Seçiniz..</option>
                      {levels.map((level) => (
                        <option key={level.id} value={level.name}>
                          {level.name}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage name={"city"}>
                      {(message) => <p className="text-danger">{message}</p>}
                    </ErrorMessage>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <ProfileFormikInput
                    name="university"
                    label="Üniversite*"
                    placeholder="Kampüs 365"
                  />
                  <ProfileFormikInput
                    name="department"
                    label="Bölüm*"
                    placeholder="Yazılım"
                  />
                </Row>
                <Row className="mb-3">
                  <ProfileFormikInput
                    name="startDate"
                    label="Başlangıç Yılı*"
                    type="number"
                    placeholder="2010"
                  />
                  <ProfileFormikInput
                    name="graduationYear"
                    label="Mezuniyet Yılı*"
                    type="number"
                    placeholder="2020"
                  />
                </Row>
                <Button className="primary py-2 mt-1" type="submit">
                  Kaydet
                </Button>
              </Form>
            </Formik>
            <Col xs={12}>
              {educationList?.map((education) => (
                <div className="my-grade" key={education.id}>
                  <div className="grade-header">
                    <span className="grade-date">{education.startDate} - {education.graduationYear}</span>
                    <span className="grade-degree">Lisans</span>
                  </div>
                  <div className="grade-details">
                    <Col as="span" className="grade-details-col">
                      <span className="grade-details-header">Üniversite</span>
                      <span className="grade-details-content">
                        {education.university}
                      </span>
                    </Col>
                    <Col as="span" className="grade-details-col">
                      <span className="grade-details-header">Bölüm</span>
                      <span className="grade-details-content"> {education.department} </span>
                    </Col>
                    <span
                      className="grade-delete g-del"
                      onClick={() => handleEducationDelete(education.id)}
                    ></span>
                  </div>
                </div>
              ))}
            </Col>
          </Col>
        </Row>
      </Container>
      <InnerFooter />
    </>
  );
};
export default MyEducation;