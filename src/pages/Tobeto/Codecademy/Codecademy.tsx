import OutBanner from "../../../components/Banner/OutBanner";
import OutNavbar from "../../../components/Navbar/OutNavbar";
import OutFooter from "../../../components/Footer/OutFooter";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import "./codeacademy.css";

const Codecademy = () => {
  return (
    <>
      <OutBanner />
      <OutNavbar />
      <main className="bg-front-dark">
        <section className="mt-10 p-5">
          <div className="position-relative">
            <Container>
              <Row>
                <Col>
                  <p className="ca-header">
                    Kodlama, pek çok olasılığı içinde barındıran bir dünya.{" "}
                    <br />
                    Başlamak için tek gereken ise merak ve öğrenme dürtüsü.
                  </p>
                </Col>
              </Row>
              <Row>
                <div className="ca-content1">
                  <div>
                    <span>
                      <span>
                        <img
                          alt=""
                          aria-hidden="true"
                          src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fca-1.cf0e22ca.png&w=640&q=75"
                        />
                      </span>
                    </span>
                  </div>
                  <div>
                    <p>
                      Dünya çapında milyonlarca insanın günümüz dijital
                      dünyasında başarılı olmak için ihtiyaç duyduğu becerileri
                      eğlenceli bir şekilde edinmelerine olanak sağlayan{" "}
                      <Link
                        to="https://www.codecademy.com/"
                        target="_blank"
                        className="codecademy-link"
                      >
                        {" "}
                        Codecademy*{" "}
                      </Link>
                      içerikleri şimdi Tobeto deneyimi ile sana daha yakın!
                    </p>
                    <p className="casub-text">
                      *Codecademy; 2011'den beri, 50 milyondan fazla üyenin
                      kendi için yeni bir yaşam ve kariyer geliştirmesine,
                      projelerini hayata geçirmesine yardımcı olan bir kodlama
                      eğitimi platformudur.
                    </p>
                  </div>
                </div>
              </Row>
              <Row className="row mt-4">
                <Col >
                  <p className="ca-header-left ">Codecademy &amp; Tobeto </p>
                  <p className="ca-text">
                    Codecademy'nin tüm kaynaklarına Tobeto aboneliği ile
                    erişebilirsin.
                    <br />
                    <br />
                    Aboneliğin sağlayacağı Türkçe <b>canlı dersler</b>, alanında
                    uzman eğitmenler ve öğrenmeni kolaylaştıracak <b>mentör</b>{" "}
                    desteğiyle ile öğrenmeni destekleyici kaynaklarımız bu
                    süreci kolaylaştırmak ve hızlandırmak için senin yanında!
                  </p>
                  <button className="btn btn-primary ">Hemen Abone Ol!</button>
                </Col>
              </Row>
            </Container>
            <Container>
              <Container>
                <Row >
                  <div className=" cagif">
                    <div className=" ">
                      <span>
                          <img
                            alt=""
                            aria-hidden="true"
                            src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcacode.e3ffebc4.gif&w=3840&q=75"
                          />
                      </span>
                    </div>
                  </div>
                </Row>
              </Container>
            </Container>
            <div className="container">
              <Row className="mt-5">
                <div className="teams-vector" />
                <div className="ca-header-left">
                  Şimdi <br /> Codecademy'nin <br /> zengin kataloğu ile :
                </div>
                <p className="ca-text mt-5">
                  Gerçek zamanlı, kendi hızında kod yaz, anında geri bildirim
                  al, etkileşimle yaparak öğren. Öğrenme deneyimine destek için
                  makaleler, videolar ve projelerden faydalan.
                </p>
                <button className="btn btn-primary mt-5 w-auto ms-3 rounded-5">
                  Hemen Abone Ol!
                </button>
              </Row>
            </div>
          </div>
        </section>
      </main>
      <OutFooter />
    </>
  );
};

export default Codecademy;
