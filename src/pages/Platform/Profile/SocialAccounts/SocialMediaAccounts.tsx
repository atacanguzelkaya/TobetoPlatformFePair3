import { useEffect, useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { PageRequestModel } from "../../../../core/pageRequestModel/pageRequest";
import { CreateSocialAccountRequest } from "../../../../models/requests/socialAccount/createSocialAccountRequest";
import ProfileSidebar from "../../../../components/Sidebar/profileSidebar";
import InnerNavbar from "../../../../components/Navbar/InnerNavbar";
import InnerFooter from "../../../../components/Footer/InnerFooter";
import socialAccountService from "../../../../services/socialAccountService";
import ProfileFormikInput from "../../../../components/FormikInput/ProfileFormikInput";
import authService from "../../../../services/authService";
import * as Yup from "yup";
import "./social-media-accounts.css";

export interface SocialAccountModel {
  id: string;
  userId: string;
  name: string;
  accountUrl: string;
}
export interface GetAllSocialAccountsModel {
  from: number;
  index: number;
  size: number;
  count: number;
  page: number;
  items: SocialAccountModel[];
  hasPrevious: boolean;
  hasNext: boolean;
}
const pageRequest: PageRequestModel = { index: 0, size: 10 };

const SocialMediaAccounts = () => {
  const [socialAccount, setSocialAccount] =
    useState<CreateSocialAccountRequest>();
  const [socialAccountList, setSocialAccountList] = useState<
    SocialAccountModel[]
  >([]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Sosyal Medya seçiniz.."),
    accountUrl: Yup.string().required("Url zorunludur."),
  });

  const initialValues = {
    name: "",
    accountUrl: "",
  };
  const levels = [
    { id: 1, name: "Instagram" },
    { id: 2, name: "Twitter" },
    { id: 3, name: "LinkedIn" },
    { id: 4, name: "Behance" },
    { id: 5, name: "Dribble" },
    { id: 6, name: "Github" },
  ];

  const handleSubmit = async (values: CreateSocialAccountRequest) => {
    await socialAccountService
      .create(values)
      .then((response) => {
        setSocialAccount(response.data);
        fetchSocialAccount(pageRequest);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  const fetchSocialAccount = async (pageRequest: any) => {
    await socialAccountService.getAll(pageRequest).then((response: any) => {
      const userId = authService.getUserId();
      if (response) {
        const matchingSocialMedia = response.data.items.filter(
          (item: any) => item.userId === userId
        );
        setSocialAccountList(matchingSocialMedia);
      }
    });
  };

  const handleSocialAccountDelete = async (idToDelete: string) => {
    await socialAccountService.delete({ id: idToDelete });
    const updatedSocialAccountDetails = socialAccountList.filter(
      (socialAccount) => socialAccount.id !== idToDelete
    );
    setSocialAccountList(updatedSocialAccountDetails);
  };

  useEffect(() => {
    fetchSocialAccount(pageRequest);
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
              <Col my={2}>
                <Form data-hs-cf-bound="true">
                  <Row mb={2} mt={4}>
                    <Col md={4} xs={12}>
                      <label className="form-label">Sosyal Medya*</label>
                      <Field as="select" name="name" className="form-select">
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
                    <Col md={8}>
                      <ProfileFormikInput
                        name="accountUrl"
                        label="Url*"
                        placeholder="http://"
                      />
                    </Col>
                  </Row>
                  <Button
                    className="primary py-2 mt-1 d-inline-block"
                    type="submit"
                  >
                    Kaydet
                  </Button>
                </Form>
              </Col>
            </Formik>
            <Col className="mt-5">
              {socialAccountList?.map((social) => (
                <div className="section-header mt-3" key={social.id}>
                  <span className="fw-bold mx-2">{social.name}</span>
                  <span
                    className={`form-control input-${social.name.toLowerCase()}`}
                  >
                    {" "}
                    {social.accountUrl}{" "}
                  </span>
                  <Button
                    className="social-delete i-size"
                    onClick={() => handleSocialAccountDelete(social.id)}
                  />
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
export default SocialMediaAccounts;