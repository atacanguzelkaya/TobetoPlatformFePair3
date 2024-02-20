import { Container, Row, Col } from 'react-bootstrap';
import "./istanbul-kodluyor.css";

const IstanbulKodluyor = () => (
  <>
    <Container fluid>
      <Row className="bg-darkblue">
        <Col className="d-flex justify-content-center p-10 istkaLogo">
          <img
            alt="İstanbul Kodluyor Logo"
            src="https://tobeto.com/_next/static/media/ik-logo-light-sm.8412685f.svg"
            decoding="async"
            data-nimg="intrinsic"
            className="logo"
          />
        </Col>
        <Col className="d-flex flex-column justify-content-center px-10 text-center">
          <span className="header-text-md mt-4">
            Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al.
          </span>
          <span className="header-text mt-8 mb-10">
            Aradığın <span className="quot">&nbsp;“</span>İş<span className="quot">”&nbsp;</span> Burada!
          </span>
        </Col>
      </Row>
      <Row className="bg-lightgreen p-0">
        <Col className="istka-md-text">
          <span>Türkiye’nin İlk Sosyal Etki Tahvili: “İstanbul Kodluyor” Projesi&nbsp;</span>
        </Col>
        <Col className="px-md-20 px-sm-0 text-center">
          <p className="istka-sm-text mmt-0">
            Sanayi ve Teknoloji Bakanlığı Kalkınma Ajansları Genel Müdürlüğü koordinasyonunda İstanbul Kalkınma Ajansı (İSTKA) ve İngiltere merkezli Bridges Outcomes Partnerships iş birliğinde başladı!
          </p>
        </Col>
      </Row>
      <Row className="bg-lightgreen">
        <div className="header-left-2">
          <span className="header-left-text">İstanbul Kodluyor Projesi Hakkında </span>
        </div>
        <Col className="mt-5">
          <p>
            <b>Yazılım ve teknoloji</b> alanında meslek sahibi olmak isteyen genç yetişkinlere, <b>ücretsiz ve kapsamlı eğitimlerle</b> gerekli bilgi ve becerileri kazandıran, Türkiye’nin önde gelen kurumlarında <b>işe yerleşmelerini</b> sağlayan bir projedir. Teknoloji alanında nitelikli insan kaynağını geliştirmeyi amaçlayan bu proje, aynı zamanda <b>kadınların</b> sektördeki temsiliyetini artırmayı da hedeflemektedir.
          </p>
        </Col>
      </Row>
      <Row className="bg-darkblue p-10">
        <span className="text-neon">SÜREÇ</span>
        <Col className="position-relative text-center">
          <section className="ps-timeline-sec">
            <Container fluid>
              <ol className="ps-timeline">
                <li>
                  <div className="ps-top">
                    <p>Başvuru ve <br /> Ön-değerlendirme</p>
                  </div>
                  <span className="ps-sp-top">1</span>
                </li>
                <li>
                  <div className="ps-bot">
                    <p>"Herkes için Kodlama" Eğitimleri</p>
                  </div>
                  <span className="ps-sp-bot">2</span>
                </li>
                <li>
                  <div className="ps-top">
                    <p>Seçme ve Değerlendirme</p>
                  </div>
                  <span className="ps-sp-top">3</span>
                </li>
                <li>
                  <div className="ps-bot">
                    <p>Mesleki ve Profesyonel Gelişim Eğitimleri</p>
                  </div>
                  <span className="ps-sp-bot">4</span>
                </li>
                <li>
                  <div className="ps-top">
                    <p>İstihdam</p>
                  </div>
                  <span className="ps-sp-top">5</span>
                </li>
              </ol>
            </Container>
          </section>
        </Col>
      </Row>
      <Row className="bg-neongreen">
        <div className="header-right-2">
          <span className="header-right-text">İstihdama Giden Yol</span>
        </div>
        <Col className="mt-20 text-center-mobil">
          <span className="neontext">Yazılım ve Teknoloji Alanında Meslek Edinmeye Yönelik Eğitimler</span>
          <div className="detailList">
            <div className="list">
              <span>Mesleki Eğitimler</span>
              <ul>
                <li>Online Canlı Dersler</li>
                <li>Video İçerikler</li>
                <li>İstanbul’da Kampüs Buluşmaları</li>
                <li>Proje Uygulamaları</li>
              </ul>
            </div>
            <div>
              <span className="plusIcon">+</span>
            </div>
            <div className="list">
              <span>Profesyonel Gelişim Eğitimleri</span>
              <ul>
                <li>İşte Başarı Eğitimleri</li>
                <li>Sektör Buluşmaları ve Webinarlar</li>
                <li>Kariyer Gelişim Desteği</li>
                <li>Mentörlük</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </>
);

export default IstanbulKodluyor;