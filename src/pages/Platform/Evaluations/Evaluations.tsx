import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import InnerNavbar from "../../../components/Navbar/InnerNavbar";
import InnerFooter from "../../../components/Footer/InnerFooter";
import "./evaluations.css";

const Evaluations = () => {
  const platforms = [
    {
      name: "Front End",
      icon: "https://tobeto.com/platform-icon.png",
    },
    {
      name: "Full Stack",
      icon: "https://tobeto.com/platform-icon.png",
    },
    {
      name: "Back End",
      icon: "https://tobeto.com/platform-icon.png",
    },
    {
      name: "Microsoft SQL Server",
      icon: "https://tobeto.com/platform-icon.png",
    },
    {
      name: "Masaüstü Programlama",
      icon: "https://tobeto.com/platform-icon.png",
    },
  ];

  return (
    <>
      <InnerNavbar />
      <main>
        <section className="py-5">
          <div className="position-relative">
            <div className="container text-center">
              <div className="mw-5xl mx-auto">
                <h2 className="text-indigo fw-normal">
                  Yetkinlik
                  <span className="text-dark fw-normal">
                    lerini ücretsiz ölç,{" "}
                  </span>
                  bilgi
                  <span className="text-dark fw-normal">lerini test et.</span>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-3">
          <Container>
            <Row>
              <Col className="col-md-12 mb-5">
                <div className="dashboard-card">
                  <span>Tobeto İşte Başarı Modeli</span>
                  <p>
                    80 soru ile yetkinliklerini <span>ölç</span>, önerilen
                    eğitimleri <span>tamamla</span>, rozetini{" "}
                    <span>kazan.</span>
                  </p>
                  <Link
                    className="btn btn-primary rounded-5 color"
                    to="/profilim/"
                  >
                    <b>Başla</b>
                  </Link>
                </div>
              </Col>
              <Col className="col-md-6">
                <div className="dashboard-card1 equal-box">
                  <span>Yazılımda Başarı Testi</span>
                  <p>
                    Çoktan seçmeli sorular ile teknik bilgini{" "}
                    <span> test et.</span>
                  </p>
                  <label className="text-white">&gt;&gt;&gt;</label>
                </div>
              </Col>
              <div className="col-12 col-md-6 mb-8">
                <div className="d-flex flex-column equal-box">
                  {platforms.map((platform, index) => (
                    <div className="dashboard-card-slim" key={index}>
                      <div className="d-flex align-items-center">
                        <img
                          className="platformIcon"
                          src={platform.icon}
                          alt={platform.name}
                        />
                        <span>{platform.name}</span>
                      </div>
                      <button className="btn btn-light rounded-5">
                        <b>Başla</b>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </Row>
          </Container>
        </section>
        <section className="py-5">
          <div className="position-relative ">
            <div className="gradient-line3 mb-3 mt-3" />
            <div className="container text-center">
              <div className="mw-5xl mx-auto">
                <h3 className="text-indigo fw-normal">
                  Aboneliğe özel{" "}
                  <span className="text-dark fw-normal">
                    değerlendirme araçları için
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-2">
          <Container>
            <Row>
              <Col className="col-md-6">
                <div className="dashboard-card4 equal-box">
                  <span>Kazanım Odaklı Testler</span>
                  <p>
                    Dijital gelişim kategorisindeki eğitimlere başlamadan
                    öncekonuyla ilgili bilgin ölçülür ve seviyene göre
                    yönlendirilirsin.
                  </p>
                  <p />
                </div>
              </Col>
              <Col className="col-md-6">
                <div className="dashboard-card4 equal-box">
                  <span>
                    Huawei Talent Interview <br /> Teknik Bilgi Sınavı*
                  </span>
                  <p className="mt-4">
                    <b>
                      <i>Sertifika alabilmen için,</i>
                    </b>{" "}
                    eğitim yolculuğunun sonunda teknik yetkinliklerin ve kod
                    bilgin ölçülür.
                    <br />
                    <br />
                    4400+ soru | 30+ programlama dili <br />4 zorluk seviyesi
                  </p>
                  <small className="text-white">
                    *Türkiye Ar-Ge Merkezi tarafından tasarlanmıştır.
                  </small>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <InnerFooter />
    </>
  );
};

export default Evaluations;