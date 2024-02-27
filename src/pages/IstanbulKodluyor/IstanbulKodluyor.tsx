import { Container, Row, Col,Image } from 'react-bootstrap';
import "./istanbul-kodluyor.css";
import { Link } from 'react-router-dom';

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
      <Row>
      <Col md={6} xs={12} className="bg-lightblue d-flex justify-content-center">
          <p className="text-center ic-header">Yazılım ve teknoloji alanında yeni bir kariyere adım atmak istiyorsan</p>
          <ul className="ic-list">
            <li>18-35 yaş arasındaysan</li>
            <li>Lise veya üniversite mezunuysan</li>
            <li>Son 6 aydır ve şu an öğrenci değilsen</li>
            <li>Son 1 yıldır çalışmıyorsan</li>
            <li>İş arayışındaysan</li>
          </ul>
          <span>O halde doğru yerdesin!</span>
          <hr style={{ width: 'inherit' }} />
          <span>Aklına takılan tüm sorular için;</span>
          <div className="mt-3">
            <div className="istka-flex">
              <div className="d-flex justify-content-center align-items-center" style={{ gap: '14px' }}>
                <span className='align-items-center'>1</span>
                <h4 className='text-center'>Sıkça Sorulan Sorulara Bakabilirsin</h4>
              </div>
              <Link to="/istanbul-kodluyor#sss" className="btn btn-dark ms-5 my-sm-4" >S.S.S.</Link>
            </div>
            <div className="istka-flex">
              <div className="d-flex justify-content-center align-items-center" style={{ gap: '14px' }}>
              <span className='align-items-center'>2</span>
                <h4>Bize Yazabilirsin</h4>
              </div>
              <Link to="mailto:istanbulkodluyor@tobeto.com" className="btn btn-dark ms-5 my-sm-4">
                <svg width="20" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M22 6L12 13L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </Link>
            </div>
          </div>
        </Col>
        <Col md={6} xs={12} className="d-flex justify-content-center">
              <div className="ik-banner-big h-100 text-center">
                <Image
                  alt="İstanbul Kodluyor Logo"
                  src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
                  width="200"
                  height="200"
                />
                 <div className="custom-text">
                  Aradığın "İş" Burada!
                </div>
                <div>
                  <Link to="/kayit-ol" onClick={() => window.scrollTo(0, 0)} className="btn btn-success px-5 rounded-4 w-100 mt-5">
                    Başvur
                  </Link>
                </div>
              </div>
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
      <Row className="bg-darkblue p-5">
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
        <Col className="mt-5 text-center-mobil">
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