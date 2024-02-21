import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Tabs, Tab, Image } from "react-bootstrap";
import InnerNavbar from "../../../components/Navbar/InnerNavbar";
import InnerFooter from "../../../components/Footer/InnerFooter";
import "./platform.css";

const cards = [
  {
    imageUrl: "https://tobeto.s3.cloud.ngn.com.tr/23_EAH_1_45f7232003.jpg",
    title: "Dr. Ecmel Ayral'dan Hoşgeldin Mesajı",
    date: "21 Eylül 2023 15:20",
    link: "/content",
  },
  {
    imageUrl: "https://tobeto.s3.cloud.ngn.com.tr/23_ENK_1_b4d858c1a9.jpg",
    title: "Eğitimlere Nasıl Katılırım?",
    date: "8 Eylül 2023 17:06",
    link: "",
  },
  {
    imageUrl: "https://tobeto.s3.cloud.ngn.com.tr/CFE_20233_6c045c22ae.jpg",
    title: "Herkes İçin Kodlama 1C",
    date: "8 Eylül 2023 17:06",
    link: "",
  },
  {
    imageUrl: "https://tobeto.s3.cloud.ngn.com.tr/23_ENK_1_b4d858c1a9.jpg",
    title: "İstanbul Kodluyor Proje Aşamaları",
    date: "8 Eylül 2023 17:06",
    link: "",
  },
];

const notifications = [
  {
    type: "Duyuru",
    corpName: "İstanbul Kodluyor",
    header: "Ocak Ayı Bilgilendirmesi",
    date: "12.01.2024",
  },
  {
    type: "Duyuru",
    corpName: "İstanbul Kodluyor",
    header: "Şubat Ayı Bilgilendirmesi",
    date: "06.01.2024",
  },
  {
    type: "Duyuru",
    corpName: "İstanbul Kodluyor",
    header: "Mart Ayı Bilgilendirmesi",
    date: "03.01.2024",
  },
];

function UserFullName() {
  const userData = JSON.parse(localStorage.getItem("user")!);
  if (userData) {
    return userData.firstName;
  }
}
const Platform = () => {
  const [userName, setUserName] = useState<string>();
  useEffect(() => {
    const user = UserFullName();
    setUserName(user);
  }, []);

  return (
    <>
      <InnerNavbar />
      <div className="platform-page">
        <section className="py-5">
          <div className="position-relative">
            <div className="container text-center">
              <div className="mw-5xl mx-auto">
                <h3>
                  <span className="fw-normal fw-bold text-indigo">
                    {" "}
                    TOBETO{" "}
                  </span>
                  <span className="fw-normal ">'ya </span>
                  <span className="fw-normal "> hoş geldin </span>
                </h3>
                <h4 className="fw-normal fw-bold mb-5 text-indigo">
                  {" "}
                  {userName}{" "}
                </h4>
                <p className="tobeto-slogan">
                  Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda
                  senin yanında!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="my-2">
          <Container>
            <Row className="cv-box cv-padding display-flex mmt-n-4">
              <Col className="ik-logo-platform">
                <div className="p-4">
                  <span className="logo">
                    <span>
                      <Image
                        alt=""
                        src="./assets/svg/ik-logo-dark.7938c0de.svg"
                        loading="lazy"
                      />
                    </span>
                  </span>
                </div>
                <div className="mt-2 d-flex flex-column justify-content-center px-10 text-center">
                  <span className="header-text-md mt-4 ">
                    Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini
                    al.
                  </span>
                  <span className="header-text mt-4 mb-4">
                    Aradığın <span className="quot">“</span>İş
                    <span className="quot">”</span> Burada!
                  </span>
                </div>
                <Col mb="4">
                  <Tabs
                    className="nav nav-tabs mainTablist d-flex justify-content-center"
                    id="myTab"
                    defaultActiveKey="basvurularim"
                    transition={false}
                  >
                    <Tab eventKey="basvurularim" title="Başvurularım">
                      <Col>
                        <div className="tab-content" id="myTabContent">
                          <div
                            className="tab-pane fade show active"
                            id="apply-tab-pane"
                            role="tabpanel"
                            aria-labelledby="apply-tab"
                            tabIndex={0}
                          >
                            <Row>
                              <Col md="6" className="mt-2">
                                <div className="status-card status_accepted">
                                  <div className="form-group">
                                    <label
                                      htmlFor="organization"
                                      className="form_name"
                                    >
                                      İstanbul Kodluyor
                                    </label>
                                  </div>
                                  <div className="form-group">
                                    <label htmlFor="info" className="form_name">
                                      Bilgilendirme
                                    </label>
                                  </div>
                                  <div className="form-group">
                                    <div className="d-flex align-items-center">
                                      <i
                                        className="fa fa-check fa-sm text-success"
                                        aria-hidden="true"
                                      />
                                      <span className="form_date">
                                        İstanbul Kodluyor Başvuru Formu
                                        onaylandı.
                                      </span>
                                    </div>
                                  </div>
                                  <div className="form-group">
                                    <div className="d-flex align-items-center">
                                      <i
                                        className="fa fa-check fa-sm text-success"
                                        aria-hidden="true"
                                      />
                                      <span className="form_date">
                                        İstanbul Kodluyor Belge Yükleme Formu
                                        onaylandı.
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </Col>
                    </Tab>
                    <Tab eventKey="egitimlerim" title="Eğitimlerim">
                      <Row>
                        {cards.map((card, index) => (
                          <Col md="3" className="mb-4" key={index}>
                            <div className="corp-edu-card">
                              <div
                                className="card-img"
                                style={{
                                  backgroundImage: `url("${card.imageUrl}")`,
                                }}
                              />
                              <div className="card-content">
                                <div className="d-flex flex-column">
                                  <span>{card.title}</span>
                                  <span className="platform-course-date">
                                    {card.date}
                                  </span>
                                </div>
                                <Link to={card.link} className="apply-btn">
                                  Eğitime Git
                                </Link>
                              </div>
                            </div>
                          </Col>
                        ))}
                        <div className="text-center">
                          <Link to="/egitimlerim" className="btn btn-success">
                            Daha fazla göster
                          </Link>
                        </div>
                      </Row>
                    </Tab>
                    <Tab
                      eventKey="DuyuruveHaberlerim"
                      title="Duyuru ve Haberlerim"
                    >
                      <Row>
                        {notifications.map((notification, index) => (
                          <div className="col-md-4 col-12 my-4" key={index}>
                            <div className="notfy-card notify">
                              <div className="d-flex flex-column">
                                <div className="d-flex justify-content-between mb-4">
                                  <span className="type">
                                    {notification.type}
                                  </span>
                                  <span className="corp-names type">
                                    {notification.corpName}
                                  </span>
                                </div>
                                <span className="header">
                                  {notification.header}
                                </span>
                              </div>
                              <div className="d-flex justify-content-between">
                                <span className="date">
                                  {notification.date}
                                </span>
                                <span className="read-more">Devamını Oku</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </Row>
                      <div className="text-center">
                        <Link to="/duyurularim" className="btn btn-success">
                          Daha fazla göster
                        </Link>
                      </div>
                    </Tab>
                    <Tab eventKey="Anketlerim" title="Anketlerim">
                      <div className="noDataCard card">
                        <div className="card-body">
                          <p className="card-text">
                            Atanmış herhangi bir anketiniz bulunmamaktadır
                          </p>
                        </div>
                      </div>
                    </Tab>
                  </Tabs>
                </Col>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="my-2">
          <Container>
            <Row className="cv-box cv-padding">
              <Col className="position-relative">
                <span className="exams-header">Sınavlarım</span>
              </Col>
              <div className="exams my-3">
                <div className="exam-card ">
                  <div className="exam-header">
                    <span className="exam-name">
                      Herkes için Kodlama 1C Değerlendirme Sınavı
                    </span>
                    <span className="lesson-name">
                      Herkes İçin Kodlama - 1C
                    </span>
                  </div>
                  <div className="exam-details">
                    <div>
                      <span className="exam_time">45 Dakika</span>
                    </div>
                  </div>
                  <span className="status-done" />
                </div>
              </div>
            </Row>
          </Container>
        </section>
        <section className="my-2">
          <Container className="mt-4">
            <div className="new-packs my-10">
              <div className="package-card">
                <div className="details pack-bg-2">
                  <h1>
                    <br /> Profilini oluştur
                  </h1>
                  <Link
                    to="/profilim/profilimi-duzenle/kisisel-bilgilerim"
                    className="btn btn-light w-100 rounded-5 "
                  >
                    Başla
                  </Link>
                </div>
              </div>
              <div className="package-card">
                <div className="details pack-bg-3">
                  <h1 className="mb-6">
                    <br /> Kendini değerlendir
                  </h1>
                  <Link
                    to="/degerlendirmeler"
                    className="btn btn-light w-100 rounded-5"
                  >
                    Başla
                  </Link>
                </div>
              </div>
              <div className="package-card">
                <div className="details pack-bg-1">
                  <h1 className="mb-6">
                    <br /> Öğrenmeye başla
                  </h1>
                  <Link
                    to="/platform-katalog"
                    className="btn btn-light w-100 rounded-5"
                  >
                    Başla
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </div>
      <InnerFooter />
    </>
  );
};
export default Platform;