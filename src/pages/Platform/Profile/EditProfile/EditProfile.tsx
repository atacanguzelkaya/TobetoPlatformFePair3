import { Container, Row, Button, Col } from "react-bootstrap";
import { Field, Formik, Form } from "formik";
import {cities,initialValues,validationSchema,EditProfileLogic} from "./edit-profile";
import ProfileSidebar from "../../../../components/Sidebar/profileSidebar";
import InnerNavbar from "../../../../components/Navbar/InnerNavbar";
import InnerFooter from "../../../../components/Footer/InnerFooter";
import ProfileFormikInput from "../../../../components/FormikInput/ProfileFormikInput";
import "./edit-profile.css";

const EditProfile = () => {
  const { editProfileList, handleEditProfileDelete, handleSubmit } =
    EditProfileLogic();

  return (
    <>
      <InnerNavbar />
      <Container>
        <Row>
          <ProfileSidebar />
          <Col lg="9" className="edit-inclusive">
            <Formik
              onSubmit={handleSubmit}
              initialValues={initialValues}
              validationSchema={validationSchema}
            >
              <Form>
                <Row className="mb-2">
                  <div className="col-12 col-md-6 mb-6">
                    <ProfileFormikInput
                      name="firstName"
                      label="Adınız*"
                      placeholder=" "
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-6">
                    <ProfileFormikInput
                      name="lastName"
                      label="Soyadınız*"
                      placeholder=" "
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-6">
                    <ProfileFormikInput
                      name="phoneNumber"
                      label="Telefon Numaranız*"
                      placeholder=" "
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-6">
                    <ProfileFormikInput
                      name="birthDate"
                      label="Doğum Tarihiniz*"
                      type="date"
                      placeholder=" "
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-6">
                    <ProfileFormikInput
                      name="nationalIdentity"
                      label="TC Kimlik No*"
                      placeholder=" "
                    />
                    <span className="text-danger warning-text">
                      *Aboneliklerde fatura için doldurulması zorunlu alan
                    </span>
                  </div>
                  <div className="col-12 col-md-6 mb-6">
                    <ProfileFormikInput
                      name="email"
                      label="E-posta*"
                      placeholder=" "
                    />
                  </div>
                  <div className="col-12 mb-6">
                    <ProfileFormikInput
                      name="country"
                      label="Ülke*"
                      placeholder=" "
                    />
                  </div>
                  <div className="col-12 col-md-6 mb-4">
                    <label className="form-label">İl*</label>
                    <Field as="select" name="city" className="form-select">
                      <option value="">Şehir Seçiniz..</option>
                      {cities.map((city) => (
                        <option key={city.code} value={city.code}>
                          {city.name}
                        </option>
                      ))}
                    </Field>
                  </div>
                  <div className="col-12 col-md-6 mb-4">
                    <ProfileFormikInput
                      name="district"
                      label="İlçe*"
                      placeholder="Merkez"
                    />
                  </div>
                  <div className="col-12 mb-6">
                    <ProfileFormikInput
                      name="address"
                      as="textarea"
                      label="Mahalle / Sokak"
                    />
                  </div>
                  <div className="col-12 mb-6">
                    <ProfileFormikInput
                      name="about"
                      as="textarea"
                      label="Hakkımda"
                      placeholder="Kendini kısaca tanıt"
                    />
                  </div>
                  <div className="col-12 mb-6">
                    <ProfileFormikInput
                      name="profileImageUrl"
                      label="Profil Url*"
                      placeholder=" "
                    />
                  </div>
                </Row>
                <Button type="submit" variant="primary">
                  Kaydet
                </Button>
              </Form>
            </Formik>
            <Col xs={12}>
              {editProfileList?.map((profile) => (
                <div className="my-grade" key={profile.id}>
                  <div className="grade-header">
                    <span className="fw-bold">
                      {profile.firstName} {profile.lastName}
                    </span>
                  </div>
                  <div className="grade-details">
                    <Row>
                      <Col mx={4} className="grade-details-col">
                        <span className="grade-details-header">
                          Telefon No:
                        </span>
                        <span className="grade-details-content">
                          {profile.phoneNumber}
                        </span>
                      </Col>
                      <Col xs={4} className="grade-details-col">
                        <span className="grade-details-header">
                          Doğum Tarihi:
                        </span>
                        <span className="grade-details-content">
                          {" "}
                          {profile.birthDate}{" "}
                        </span>
                      </Col>
                      <Col xs={4} className="grade-details-col">
                        <span className="grade-details-header">
                          TC Kimlik No:
                        </span>
                        <span className="grade-details-content">
                          {" "}
                          {profile.nationalIdentity}{" "}
                        </span>
                      </Col>
                      <hr />
                      <Col xs={4} className="grade-details-col">
                        <span className="grade-details-header">E-posta:</span>
                        <span className="grade-details-content">
                          {" "}
                          {profile.email}
                        </span>
                      </Col>
                      <Col xs={4} className="grade-details-col">
                        <span className="grade-details-header">Ülke:</span>
                        <span className="grade-details-content">
                          {" "}
                          {profile.country}{" "}
                        </span>
                      </Col>
                      <Col xs={4} className="grade-details-col">
                        <span className="grade-details-header">İl/İlçe:</span>
                        <span className="grade-details-content">
                          {" "}
                          {profile.city}/{profile.district}{" "}
                        </span>
                      </Col>
                      <hr />
                      <Col xs={4} className="grade-details-col">
                        <span className="grade-details-header">Mahalle:</span>
                        <span className="grade-details-content">
                          {" "}
                          {profile.address}{" "}
                        </span>
                      </Col>
                      <Col xs={4} className="grade-details-col">
                        <span className="grade-details-header">Hakkımda:</span>
                        <span className="grade-details-content">
                          {" "}
                          {profile.about}{" "}
                        </span>
                      </Col>
                    </Row>
                    <span
                      className="grade-delete g-del"
                      onClick={() => handleEditProfileDelete(profile.id)}
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
export default EditProfile;