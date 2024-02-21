import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { badges, legendData, MyProfileLogic, cleanUrl } from "./my-profile";
import InnerNavbar from "../../../../components/Navbar/InnerNavbar";
import InnerFooter from "../../../../components/Footer/InnerFooter";
import "./my-profile.css";

const MyProfile = () => {
  const {
    userName,
    personalInfoList,
    abilityList,
    foreignLanguageList,
    certificateList,
    socialMediaList,
    educationList,
    experienceList,
  } = MyProfileLogic();

  return (
    <>
      <InnerNavbar />
      <Container className="inclusive">
        <Row className="iconrow">
          <Col className="d-flex justify-content-end">
            <Link
              className="cv-edit-icon"
              to="/profilim/profilimi-duzenle/kisisel-bilgilerim"
            ></Link>
            <div className="dropdown">
              <button
                type="button"
                id="dropdown-basic"
                aria-expanded="false"
                className="cv-share-icon editicon"
              ></button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={4} xs={12}>
            <Row>
              <Col xs={12}>
                <div className="cv-box">
                  <div className="cv-pp ">
                    <div className="area"></div>
                    <span className="profile-span">
                      <span className="profile-span2">
                        <img
                          className="profile-img"
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27128%27%20height=%27128%27/%3e"
                        ></img>
                      </span>
                      <img
                        alt=""
                        src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=128&q=75"
                        decoding="async"
                        data-nimg="intrinsic"
                        className="cv-pp-img rounded-circle profile-img2"
                      ></img>
                    </span>
                  </div>
                  <div className="cv-info cv-padding">
                    <div className="info-box">
                      <div className="info-icon name"></div>
                      <div className="info-text">
                        <span className="header">Ad Soyad</span>
                        <span className="text">{userName}</span>
                      </div>
                    </div>
                    <div className="info-box">
                      <div className="info-icon date"></div>
                      <div className="info-text">
                        <span className="header">Doğum Tarihi</span>
                        <span className="text">
                          {personalInfoList[0]
                            ? personalInfoList[0].birthDate.split("T")[0]
                            : "GG.MM.YYYY"}
                        </span>
                      </div>
                    </div>
                    <div className="info-box">
                      <div className="info-icon mail"></div>
                      <div className="info-text">
                        <span className="header">E-Posta Adresi</span>
                        <span className="text">
                          {personalInfoList[0]
                            ? personalInfoList[0].email
                            : "E-mail"}
                        </span>
                      </div>
                    </div>
                    <div className="info-box">
                      <div className="info-icon phone"></div>
                      <div className="info-text">
                        <span className="header">Telefon Numarası</span>
                        <span className="text">
                          {personalInfoList[0]
                            ? personalInfoList[0].phoneNumber
                            : "+90XXXXXXXXXX"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12}>
                <div className="cv-box cv-padding">
                  <div className="cv-box-header">
                    <span>Hakkımda</span>
                    <hr></hr>
                  </div>
                  <span>
                    {personalInfoList[0] ? personalInfoList[0].about : " "}
                  </span>
                </div>
              </Col>
              <Col xs={12}>
                <div className="cv-box cv-padding">
                  <div className="cv-box-header">
                    <div className="d-flex justify-content-between">
                      <span>Yetkinliklerim</span>
                    </div>
                    <hr></hr>
                  </div>
                  <div>
                    <div className="skills">
                      {abilityList.map((ability) => (
                        <span className="skill" key={ability.id}>
                          {ability.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12}>
                <div className="cv-box cv-padding">
                  <div className="cv-box-header">
                    <div className="d-flex justify-content-between">
                      <span>Yabancı Dillerim</span>
                    </div>
                    <hr></hr>
                  </div>
                  <div className="my-langs">
                    {foreignLanguageList.map((foreignLanguage) => (
                      <div className="lang w-100" key={foreignLanguage.id}>
                        <div className="lang-info">
                          <div className="lang-title">
                            <div className="d-flex flex-column">
                              <span className="lang-name">
                                {foreignLanguage.name}
                              </span>
                              <span className="lang-degree">
                                {foreignLanguage.languageLevel}
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className="lang-degree-symbol main-lang"></span>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
              <Col xs={12}>
                <div className="cv-box cv-padding">
                  <div className="cv-box-header">
                    <div className="d-flex justify-content-between">
                      <span>Sertifikalarım</span>
                    </div>
                    <hr></hr>
                  </div>
                  <div>
                    <div className="skills">
                      {certificateList.map((certificate) => (
                        <span className="skill" key={certificate.id}>
                          {certificate.filePath}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
              <Col xs={12}>
                <div className="cv-box cv-padding">
                  <div className="cv-box-header">
                    <span>Medya Hesaplarım</span>
                    <hr></hr>
                  </div>
                  <div className="cv-social-media">
                    {socialMediaList.map((account) => (
                      <Link
                        key={account.id}
                        className={`cv-${cleanUrl(account.name)}`}
                        target="_blank"
                        to={account.accountUrl}
                      ></Link>
                    ))}
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={8} xs={12}>
            <Row>
              <Col xs={12}>
                <div className="cv-box cv-padding">
                  <div className="cv-box-header">
                    <div className="d-flex justify-content-between">
                      <span>Tobeto İşte Başarı Modelim</span>
                      <span className="cv-see-icon"></span>
                    </div>
                    <hr />
                  </div>
                  <div className="model-padding">
                    <Row>
                      <div className="col-md-6 col-12 my-3">
                        <canvas className="radar chartjs-radar" />
                      </div>
                      <div className="col-md-6 col-12 d-flex my-3">
                        <div className="radar-labels">
                          {legendData.map((item, index) => (
                            <div className="label" key={index}>
                              <span className={`legend legend${index + 1}`}>
                                {item.legend}
                              </span>
                              <span className="legendName">
                                {item.legendName}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="cv-box cv-padding">
                  <div className="cv-box-header">
                    <div className="d-flex justify-content-between">
                      <span>Tobeto Seviye Testlerim</span>
                    </div>
                    <hr />
                  </div>
                  <Row className="g-4">
                    <Col className="envantoryList">
                      <div className="envantory-result">
                        <div className="d-flex justify-content-between w-100">
                          <span className="examName">
                            Herkes için Kodlama 2A Değerlendirme Sınavı
                          </span>
                          <span className="examTime">16-10-2023</span>
                        </div>
                        <span className="examResult">100.00</span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col xs={12}>
                <div className="cv-box cv-padding">
                  <div className="cv-box-header">
                    <div className="d-flex justify-content-between">
                      <span>Yetkinlik Rozetlerim</span>
                    </div>
                    <hr />
                  </div>
                  <div className="cv-box cv-padding">
                    <Row className="d-flex justify-content-start badge-container">
                      {badges.map((badge, index) => (
                        <div className="badge-card" key={index}>
                          <img className="img-fluid" src={badge} alt="" />
                        </div>
                      ))}
                    </Row>
                  </div>
                </div>
              </Col>
              <Col xs={12}>
                <div className="cv-box cv-padding">
                  <div className="cv-box-header">
                    <div className="d-flex justify-content-between">
                      <span>Eğitim Hayatım ve Deneyimlerim</span>
                    </div>
                    <hr />
                  </div>
                  <div className="timeline">
                    <div className="line">
                      {educationList.map((education) => (
                        <div className="circle" key={education.id}>
                          <div className="before">
                            <div className="content">
                              <ul>
                                <li>
                                  {education.startDate} -{" "}
                                  {education.graduationYear}
                                </li>
                                <li className="text-truncate cv-box-content">
                                  {education.university}
                                </li>
                                <li className="text-truncate cv-box-content">
                                  {education.department}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                      {experienceList.map((experience) => (
                        <div className="circle" key={experience.id}>
                          <div className="before">
                            <div className="content">
                              <ul>
                                <li>
                                  {experience.startDate} - {experience.endDate}
                                </li>
                                <li className="text-truncate cv-box-content">
                                  {experience.organizationName}
                                </li>
                                <li className="text-truncate cv-box-content">
                                  {experience.position}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <InnerFooter />
    </>
  );
};
export default MyProfile;
