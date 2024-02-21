import { useEffect, useState } from "react";
import { Col, Row, Button, Container } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { PageRequestModel } from "../../../../core/pageRequestModel/pageRequest";
import { CreateForeignLanguageRequest } from "../../../../models/requests/foreignLanguage/createForeignLanguageRequest";
import ProfileSidebar from "../../../../components/Sidebar/profileSidebar";
import InnerNavbar from "../../../../components/Navbar/InnerNavbar";
import InnerFooter from "../../../../components/Footer/InnerFooter";
import foreignLanguageService from "../../../../services/foreignLanguageService";
import authService from "../../../../services/authService";
import * as Yup from "yup";

export interface LanguageModel {
  id: string;
  name: string;
  languageLevel: string;
}
export interface GetLanguagesModel {
  from: number;
  index: number;
  size: number;
  count: number;
  page: number;
  items: LanguageModel[];
  hasPrevious: boolean;
  hasNext: boolean;
}
const pageRequest: PageRequestModel = { index: 0, size: 10 };
const ForeignLanguage = () => {
  const languageOptions = [
    { value: "Almanca", label: "Almanca" },
    { value: "Arapça", label: "Arapça" },
    { value: "Çince", label: "Çince" },
    { value: "Fransızca", label: "Fransızca" },
    { value: "İngilizce", label: "İngilizce" },
    { value: "İspanyolca", label: "İspanyolca" },
    { value: "İtalyanca", label: "İtalyanca" },
    { value: "Japonca", label: "Japonca" },
    { value: "Korece", label: "Korece" },
    { value: "Portekizce", label: "Portekizce" },
    { value: "Romence", label: "Romence" },
    { value: "Rusça", label: "Rusça" },
    { value: "Türkçe", label: "Türkçe" },
    { value: "Yunanca", label: "Yunanca" },
  ];
  const proficiencyOptions = [
    { value: "Temel Seviye ( A1 , A2)", label: "Temel Seviye ( A1 , A2)" },
    { value: "Orta Seviye (B1 , B2)", label: "Orta Seviye (B1 , B2)" },
    { value: "İleri Seviye (C1 , C2)", label: "İleri Seviye (C1 , C2)" },
    { value: "Anadil", label: "Anadil" },
  ];

  const [languages, setLanguages] = useState<CreateForeignLanguageRequest>();
  const [languageList, setLanguageList] = useState<LanguageModel[]>([]);

  const validationSchema = Yup.object().shape({
    name: Yup.string(),
    languageLevel: Yup.string(),
  });

  const initialValues = {
    name: "",
    languageLevel: "",
  };

  const handleSubmit = async (values: CreateForeignLanguageRequest) => {
    await foreignLanguageService
      .create(values)
      .then((response) => {
        setLanguages(response.data);
        fetchLanguage(pageRequest);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };
  const fetchLanguage = async (pageRequest: any) => {
    await foreignLanguageService.getAll(pageRequest).then((response: any) => {
      const userId = authService.getUserId();
      if (response) {
        const matchingForeignLanguage = response.data.items.filter(
          (item: any) => item.userId === userId
        );
        setLanguageList(matchingForeignLanguage);
      }
    });
  };
  const handleForeignLanguageDelete = async (idToDelete: string) => {
    await foreignLanguageService.delete({ id: idToDelete });
    const deletedLanguage = languageList.filter(
      (language) => language.id !== idToDelete
    );
    setLanguageList(deletedLanguage);
  };
  useEffect(() => {
    fetchLanguage(pageRequest);
  }, []);
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
                <Row className="mb-2 mt-4">
                  <Col md={6} xs={12}>
                    <Field as="select" name="name" className="form-select">
                      <option value="">Yabancı Dil Seçiniz..</option>
                      {languageOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage name={"name"}>
                      {(message) => <p className="text-danger">{message}</p>}
                    </ErrorMessage>
                  </Col>
                  <Col md={6} xs={12}>
                    <Field
                      as="select"
                      name="languageLevel"
                      className="form-select"
                    >
                      <option value="">Seviye Seçiniz..</option>
                      {proficiencyOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </Field>
                    <ErrorMessage name={"languageLevel"}>
                      {(message) => <p className="text-danger">{message}</p>}
                    </ErrorMessage>
                  </Col>
                </Row>
                <Button
                  type="submit"
                  className="btn-primary py-2 m-3 d-inline-block"
                >
                  Kaydet
                </Button>
              </Form>
            </Formik>
            <Row>
              <Col xs={12}>
                {languageList?.map((language) => (
                  <div className="lang-edit m-3" key={language.id}>
                    <div className="lang-info">
                      <div className="lang-title ">
                        <div className="d-flex flex-column">
                          <span className="lang-name">{language.name}</span>
                          <span className="lang-degree">
                            {language.languageLevel}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="lang-degree-symbol main-lang"></span>
                    <span
                      className="delete-lang"
                      onClick={() => handleForeignLanguageDelete(language.id)}
                    ></span>
                  </div>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <InnerFooter />
    </>
  );
};
export default ForeignLanguage;