import { useEffect, useState } from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { PageRequestModel } from "../../../../core/pageRequestModel/pageRequest";
import { CreateExperienceRequest } from "../../../../models/requests/experience/createExperienceRequest";
import { getCities } from 'turkey-neighbourhoods'
import ProfileSidebar from "../../../../components/Sidebar/profileSidebar";
import InnerNavbar from "../../../../components/Navbar/InnerNavbar";
import InnerFooter from "../../../../components/Footer/InnerFooter";
import experienceService from "../../../../services/experienceService";
import ProfileFormikInput from "../../../../components/FormikInput/ProfileFormikInput";
import authService from "../../../../services/authService";
import * as Yup from "yup";

export interface ExperienceModel {
  id: string;
  organizationName: string;
  position: string;
  sector: string;
  city: string;
  startDate: string;
  endDate: string;
  description: string;
}
export interface GetAllExperiencesModel { from: number; index: number; size: number; count: number; page: number; items: ExperienceModel[]; hasPrevious: boolean; hasNext: boolean; }
const pageRequest: PageRequestModel = { index: 0, size: 10, };

const MyExperiences = () => {
  const [experiences, setExperiences] = useState<CreateExperienceRequest>();
  const [experienceList, setExperienceList] = useState<ExperienceModel[]>([]);
  const validationSchema = Yup.object().shape({
    organizationName: Yup.string().required("Kurum Adı zorunludur."),
    position: Yup.string().required("Pozisyon zorunludur."),
    sector: Yup.string().required("Sektör zorunludur."),
    city: Yup.string().required("Şehir zorunludur."),
    startDate: Yup.string().required("İş Başlangıcı zorunludur."),
    endDate: Yup.string().required("İş Bitişi zorunludur."),
    description: Yup.string().required("Açıklama zorunludur."),
  });
  const initialValues = {
    organizationName: "",
    position: "",
    sector: "",
    city: "",
    startDate: "",
    endDate: "",
    description: "",
  };

  const cities = getCities();
  const handleSubmit = async (values: CreateExperienceRequest) => {
    await experienceService.create(values).then((response) => {
      setExperiences(response.data)
      fetchExperience(pageRequest);
    }).catch((error: any) => { console.error(error) });
  };
  const fetchExperience = async (pageRequest: any) => {
    await experienceService.getAll(pageRequest).then((response: any) => {
      const userId = authService.getUserId();
      if (response) {
        const matchingExperience = response.data.items.filter((item: any) =>
          item.userId === userId)
        setExperienceList(matchingExperience);
      }
    });
  };
  const handleExperienceDelete = async (idToDelete: string) => {
    await experienceService.delete({ id: idToDelete });
    const updatedExperienceDetails = experienceList.filter(experience => experience.id !== idToDelete);
    setExperienceList(updatedExperienceDetails);
  };

  useEffect(() => { fetchExperience(pageRequest); }, []);
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
                  <ProfileFormikInput
                    name="organizationName"
                    label="Kurum Adı*"
                    placeholder="Kurum Adı"
                  />
                  <ProfileFormikInput
                    name="position"
                    label="Pozisyon*"
                    placeholder="Fullstack Developoer"
                  />
                </Row>
                <Row className="mb-3">
                  <ProfileFormikInput
                    name="sector"
                    label="Sektör*"
                    placeholder="Yazılım"
                  />
                  <Col className="mb-3">
                    <label className="form-label">Şehir*</label>
                    <Field as="select" name="city" className="form-select">
                      <option value="">Şehir seçiniz..</option>
                      {cities.map((city) => (
                        <option key={city.code} value={city.name}>
                          {city.name}
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
                    name="startDate"
                    label="İş Başlangıcı*"
                    type="date"
                    placeholder="gg.aa.yyyy"
                  />
                  <ProfileFormikInput
                    name="endDate"
                    label="İş Bitiş*"
                    type="date"
                    placeholder="gg.aa.yyyy"
                  />
                </Row>
                <Row className="mb-3">
                  <ProfileFormikInput
                    name="description"
                    label="İş Açıklaması*"
                    as="textarea"
                  />
                </Row>
                <Button variant="primary" type="submit">
                  Kaydet
                </Button>
              </Form>
            </Formik>
            <Col xs={12}>
              {experienceList?.map((experience) => (
                <div className="my-grade" key={experience.id}>
                  <div className="grade-header">
                    <span className="grade-date">{experience.startDate.split("T")[0]} - {experience.endDate.split("T")[0]}</span>
                  </div>
                  <div className="grade-details">
                    <Col as="span" className="grade-details-col">
                      <span className="grade-details-header">Kurum Adı</span>
                      <span className="grade-details-content">
                        {experience.organizationName}
                      </span>
                    </Col>
                    <Col as="span" className="grade-details-col">
                      <span className="grade-details-header">Pozisyon</span>
                      <span className="grade-details-content"> {experience.position} </span>
                    </Col>
                    <Col as="span" className="grade-details-col">
                      <span className="grade-details-header">Sektör</span>
                      <span className="grade-details-content"> {experience.sector} </span>
                    </Col>
                    <Col as="span" className="grade-details-col">
                      <span className="grade-details-header">Şehir</span>
                      <span className="grade-details-content"> {experience.city} </span>
                    </Col>
                    <span
                      className="grade-delete g-del"
                      onClick={() => handleExperienceDelete(experience.id)}
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
export default MyExperiences;