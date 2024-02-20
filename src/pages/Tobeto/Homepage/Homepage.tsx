import { Col, Container, Row, Image, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
import OutBanner from "../../../components/Banner/OutBanner";
import OutNavbar from "../../../components/Navbar/OutNavbar";
import OutFooter from "../../../components/Footer/OutFooter";
import "./homepage.css";

const Homepage = () => {
  const accordionData = [
    {
      title: "Tobeto 'Yazılımda Başarı' Testi & Huawei Talent Interview",
      content:
        "Tobeto'da kendini sürekli değerlendirerek, öğrenim yolculuğunu kişiselleştirebilir ve işe hazırlık sürecine yön verebilirsin. Ücretsiz sunduğumuz Tobeto 'Yazılımda Başarı' Testi ile teknik bilgi ve yetkinliklerini kolaylıkla ölç. Aldığın mesleki eğitimlerin sonunda uluslararası geçerliliğe sahip Huawei Talent Interview teknik bilgi sınavları ile öğrendiğine emin ol, rozetini al.",
    },
    {
      title: "Tobeto Kişisel Gelişim Envanteri",
      content:
        "Yeni bir meslek. Daha yüksek ücret. Uzaktan çalışma. Hedeflediğin ne olursa olsun, hepsine uygun bir yol mutlaka var. Bir sonraki hamleni planlamaya başlamadan önce üyelerimize ücretsiz sunduğumuz Tobeto Kişisel Gelişim Envanteri'mizi yap, kendin için en uygun kariyer alanlarını keşfet.",
    },
    {
      title: "Codecademy & Tobeto",
      content:
        "Codecademy; 50 milyondan fazla üyesinin yeni teknolojik beceriler konusunda meraklanması, projelere imza atması, kariyerini geliştirmesine yardımcı olan bir online kodlama eğitimi platformudur. Tobeto'nun, gerçek zamanlı, kendi hızında, etkileşimli öğrenme ortamıyla öğrenmek daha kolay! Üstelik, Türkçe derslerimiz ve öğrenmeni destekleyici kaynaklarımız bu süreci kolaylaştırmak ve hızlandırmak için senin yanında!",
    },
    {
      title: "Bilgiyi Beceriye Çevirme",
      content:
        "Canlı dersler, becerilerini derinleştirebileceğin uygulamalar, gerçek senaryoları deneyimleyebileceğin projeler ve mentör desteği ile becerilerini geliştir, süreci kendin yönet.",
    },
    {
      title: "Doğru İş İle Eşleşme",
      content:
        "Uzmanlığın için yeni becerileri kazanmak (reskill) veya yeni bir role başlamak (upskill) için gelişim yolculuğunu tamamla, profilini güncelle, teknoloji odaklı iş fırsatlarıyla eşleş.",
    },
    {
      title: "Hayat Boyu Öğrenme",
      content:
        "Sürekli öğrenme ve sürdürebilir gelişim için Tobeto topluluğuna dahil ol.",
    },
  ];

  const tabNames = [
    "Object Oriented Programming (OOP)",
    "Microsoft SQL Server Database",
    "HTML-CSS-SASS",
    "Javascript",
    "ASPNET Core MVC",
    "C# Programming",
  ];
  const tabsData = [
    { title: "Full Stack Developer" },
    { title: "Front End Developer" },
    { title: "Web & Mobile Developer" },
    {
      title: "Siber Güvenlik Uzmanı",
      imageSrc:
        "https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9.svg?updated_at=2022-10-05T08:27:59.306Z",
    },
    {
      title: "Veri Bilimi Uzmanı",
      imageSrc:
        "https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9.svg?updated_at=2022-10-05T08:27:59.306Z",
    },
    {
      title: "UI/UX Developer",
      imageSrc:
        "https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9.svg?updated_at=2022-10-05T08:27:59.306Z",
    },
  ];
  return (
    <>
      <OutBanner />
      <OutNavbar />
      <main className="bg-front-dark mt-10 p-5">
        <Container className="pt-5">
          <Row>
            <Col md={6} xs={12}>
              <div className="tobeto-card">
                <span>Hayalindeki teknoloji kariyerini başlat!</span>
                <span className="fst-italic">
            İstediğin
            <div className="word-container">
                <span className="word1">&nbsp;yoldan</span>
                <span className="word2">&nbsp;hızda</span>
            </div>
        </span>
                <Link
                  className="btn d-md-inline-block mt-5 btn-dark rounded-5"
                  to="/kayit-ol"
                >
                  Ücretsiz Üye Ol
                </Link>
                <div className="person">
                  <Image alt='person'
                    src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FBANNER-12.4b21c70e.png&w=640&q=75"
                    width={200}
                    height={200}
                    loading="lazy"
                  />
                </div>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="ik-card">
                <div className="ik-container">
                  <div className="header-left-3">
                    <span className="h4 text-white fw-bold mx-auto">
                      Aradığın <span className="text-success">&nbsp;"</span>
                      İş
                      <span className="text-success">"&nbsp;</span> Burada!
                    </span>
                  </div>
                  <Image alt='ik-logo-light mx-auto'
                    src="https://tobeto.com/_next/static/media/ik-logo-light.ace655db.svg"
                    width={150}
                    height={150}
                    loading="lazy"
                  />
                </div>
                <Link
                  className="btn d-md-inline-block btn-success px-5 rounded-5"
                  to="/istanbul-kodluyor"
                >
                  Başvur
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="gradient-line2 my-5" />
        <div >
          <div >
            <Container>
              <Row >
                <Col lg={5}>
                  <h3 className="text-white">
                    Hangi Konuda Kendini
                    <br />
                    Geliştirmek İstersin?
                  </h3>
                  <div
                    className="nav flex-column nav-pills me-3"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <button
                      className="tab-button active mb-5"
                      id="v-pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-home"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-home"
                      aria-selected="true"
                    >
                      <div className="title">
                        Teknik ve Profesyonel Eğitimler
                      </div>
                      <div className="desc">
                        Kapsamlı beceri setlerinden, gelişmek istediğin konuyu
                        seç, kariyerinde bir adım öne geç.
                      </div>
                    </button>
                    <button
                      className="tab-button"
                      id="v-pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#v-pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="v-pills-profile"
                      aria-selected="false"
                      tabIndex={-1}
                    >
                      <div className="title">Yeni bir meslek</div>
                      <div className="desc">
                        İhtiyaç duyduğun kapsamlı beceri setlerinden oluşan
                        eğitim yolculuğunu seç, yazılım veya profesyonel iş
                        alanlarında tercih ettiğin yeni mesleğine doğru ilk
                        adımını at.
                      </div>
                    </button>
                  </div>
                </Col>
                <Col lg={1}></Col>
                <Col lg={6} className="tabs-content">
                  <div className="tab-vector">
                    <Image
                      src="https://tobeto.s3.cloud.ngn.com.tr/dot_purple_358e282aef.svg?updated_at=2022-09-20T12:52:57.402Z"
                      alt="dot-purple"
                      width={250}
                      height={250}
                    />
                  </div>
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className="tab-pane fade show active tabs-pane"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <Row >
                      {tabNames.map((tabName, index) => (
                          <div className="col-lg-6 col-6" key={index}>
                            <a className="tabs-box mb-5 position-relative">
                              {tabName}
                            </a>
                          </div>
                        ))}
                      </Row>
                    </div>
                    <div
                      className="tab-pane fade tabs-pane"
                      id="v-pills-profile"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <Row >
                      {tabsData.map((tab, index) => (
                          <div className="col-lg-6 col-6" key={index}>
                            <div className="tabs-box mb-5">
                              {tab.title}
                              {tab.imageSrc && (
                                <div className="overlay2">
                                  <div className="d-flex align-items-end justify-content-end h-100 px-4 py-2">
                                    <Image
                                      src={tab.imageSrc}
                                      alt="comingsoon"
                                      className="w-35"
                                    />
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </Row>
                    </div>
                  </div>
                </Col>
                <div className="my-10 d-flex justify-content-end">
                  <Link to="/egitimler" className="tab-link mobile-mx-auto">
                    Tümünü İncele &gt;
                  </Link>
                </div>
              </Row>
            </Container>
            <Container className="mt-5">
            <Row className="d-flex">
            <Col md="3" className="col-md-3">
                <Image alt="calago-dark"
                    src="https://tobeto.s3.cloud.ngn.com.tr/calogo_d676092a98.png?updated_at=2022-12-28T12:36:58.291Z"
                    className="image-container"
                />
                </Col>
                <Col md="6">
                  <h3 className="text-white">
                    Dünyanın en büyük kodlama eğitimi platformu içerikleri şimdi
                    Tobeto deneyimi ile!
                  </h3>
                </Col>
                <Col md="9" className="mt-4">
                    <h5 className="text-white">
                    Codecademy’nin tüm kaynaklarına Tobeto aboneliğinin sağlayacağı
                    avantajlar, alanında uzman eğitmenlerle canlı dersler ve
                    mentörlerin desteği ile erişebilir, yeni kariyerine
                    başlayabilirsin!
                  </h5>
                </Col>
              </Row>
            </Container>
            <div className="container-fluid section-three mt-5 mb-5 py-5">
              <Container>
                <Row>
                  <Col className="position-relative">
                    <p className="h5 px-10 mx-auto text-center text-white">
                      Tobeto Platform'da ücretsiz olarak; sahip olduğun
                      yetkinlikleri değerlendirir,
                      <br />
                      ilgi ve bilgi seviyene göre yüzlerce eğitim içeriğine
                      ulaşırsın. Bunları nasıl tamamlayacağını
                      <br />
                      hızına, bütçene ve zamanına göre kendin belirlersin.
                      <br />
                      <br />
                      Hemen ücretsiz üye ol, platforma katıl!
                    </p>
                    <div className="tab-vector3 mt-3">
                      <Image
                        src="https://tobeto.s3.cloud.ngn.com.tr/dot_white_1e7b4378ec.svg?updated_at=2022-09-20T12:52:57.424Z"
                        alt="dot-white"
                        width={125}
                        height={125}
                      />
                    </div>
                    <div className="tab-vector2 mb-2">
                      <Image
                        src="https://tobeto.s3.cloud.ngn.com.tr/04_b3b68891d7.svg?updated_at=2022-07-05T11:08:56.797Z"
                        alt="tab-star"
                        width={75}
                        height={75}
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <section className="headfarming-mobile">
              <Container>
                <Row>
                  <Col>
                    <div className="headfarming my-10">
                      <p className="h6 px-10 mx-auto text-center text-white">
                        Tobeto , 20. yy''ın “headhunting” yaklaşımını
                        “headfarming” olarak değiştirmeyi hedefler!
                        <br />
                        <br />
                        Headfarming: Genç yetenekleri, sürekli öğrenme hevesi
                        içinde olan profesyonelleri, 360 derece eğitmek,
                        değerlendirmek, yönlendirmek ve desteklemektir.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
            <div className="container-fluid py-5">
              <Container>
              <Row className="custom-row py-10">
            <Col lg={7} xs={12} className="custom-col">
                <div className="mw-xxl mx-auto">
                    <Image
                        alt='spider-data-gif'
                        src="https://tobeto.s3.cloud.ngn.com.tr/spider_2_75142468a4.gif"
                        className="custom-image"
                    />
                </div>
            </Col>
                  <Col lg={5} xs={12}>
                    <div className="mw-lg mx-auto mobile-text-center">
                      <h4 className="text-white ml-3">
                        Tobeto 'İşte Başarı Modeli'mizi Keşfet!
                      </h4>
                      <p className="d-block text-white ml-3 mt-6">
                        Üyelerimize ücretsiz sunduğumuz, iş bulma ve işte
                        başarılı olma sürecinde gerekli 80 tane davranış
                        ifadesinden oluşan Tobeto 'İşte Başarı Modeli' ile,
                        profesyonellik yetkinliklerini ölç,
                        <br />
                        raporunu gör.
                      </p>
                      <Link to="/kayit-ol" />
                      <Link
                        className="btn d-md-inline-block mt-3 mx-2 btn-secondary"
                        to="/kayit-ol"
                      >
                        Hemen Başla
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
        <Container className="mt-3">
          <Row className="acc-bg px-5">
            <Col>
              <Accordion id="accordionExample" className="accordion spec-acc">
              {accordionData.map((item, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{item.title}</Accordion.Header>
                    <Accordion.Body>
                      <Row>
                        <Col lg={12} xs={12}>
                          <div className="text-white">{item.content}</div>
                        </Col>
                      </Row>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Col>
          </Row>
        </Container>
        <div className=" pb-20" />
      </main>
      <OutFooter />
    </>
  );
};
export default Homepage;