import OutBanner from "../../../components/Banner/OutBanner";
import OutNavbar from "../../../components/Navbar/OutNavbar";
import OutFooter from "../../../components/Footer/OutFooter";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./for-individuals.css";

const ForIndividuals = () => {
  return (
    <>
      <OutBanner />
      <OutNavbar />
      <main className="bg-front-dark mt-10">
        <Container className="mb-20">
          <Col className="py-4">
            <div className="ik-card-2">
              <div className="ik-container">
                <div className="header-left-3">
                  <span className="text-ik fw-bold header-left-text">
                    Aradığın <span className="text-success">&nbsp;"</span>İş
                    <span className="text-success">"&nbsp;</span> Burada!
                  </span>
                </div>
                <div className="ik-logo-container">
                <img
                    src="https://tobeto.com/_next/static/media/ik-logo-light.ace655db.svg"
                    alt=""
                    width={300}
                    height={100}
                  />
                </div>
              </div>
              <Link
                className="btn d-md-inline-block text-dark px-5 rounded-5 mt-5 btn-success"
                to="/istanbul-kodluyor"
              >
                <b>Başvur</b>
              </Link>
            </div>
          </Col>
        </Container>
        <div>
          <section>
            <div className="position-relative ">
              <div className="container text-center mt-5">
                <div className="mw-5xl mx-auto position-relative">
                  <div className="vector">
                    <img
                      src="https://tobeto.s3.cloud.ngn.com.tr/03_005013e668_71411c39a1.svg"
                      alt=""
                      width={100}
                      height={100}
                    />
                  </div>
                  <h1 className="text-white">Kariyerinin kontrolü</h1>
                  <h1 className="text-white mb-5">senin elinde</h1>
                  <p className="text-white lh-md borderp">
                    <Link className="text-white" to="#dijital-bir-meslek">
                      Dijital Bir Meslek
                    </Link>{" "}
                    edinmek,{" "}
                    <Link className="text-white" to="#profesyonel-bir-yonetici">
                      Profesyonel Bir Yönetici
                    </Link>
                    olmak ya da
                    <Link className="text-white" to="#kendini-gelistirmek">
                      Kendini Geliştirmek
                    </Link>{" "}
                    için İstediğin bölümden,
                    <br />
                    istediğin kadar eğitimi seçip, eş zamanlı olarak
                    alabilirsin.
                  </p>
                  <p className="text-white my-8">
                    <Link to="http://www.codecademy.com"> Codecademy</Link> iş
                    birliği ile, fark yaratmak senin elinde!
                  </p>
                  <Link to="/kayit-ol" className="btn mx-4 btn-rainbow py-4">
                    Uzmanlaşmak istediğin alanı seç, Tobeto platformda öğrenmeye
                    başla!
                  </Link>
                </div>
              </div>
              <div className="gradient-line2 mt-5"></div>
            </div>
          </section>
          <section>
            <div className="container web-pack">
              <div className="mw-5xl mx-auto position-relative">
                <h2 className="text-white mb-20 text-center mx-auto position-relative">
                  <b>Bir Yerden Başlamak İstiyorum</b>
                </h2>
                <div className="vector7" style={{ top: "-30px", right: 0 }}>
                  <img
                    src="https://tobeto.s3.cloud.ngn.com.tr/02_1a87a6ffc1_e4d2b2db45.svg"
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
                <Row className="pt-5">
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <a>C# Programming</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <a>
                        Object Oriented Programming
                        <br />
                        (OOP)
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <a>Windows Form Application Programming</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <a>
                        Microsoft
                        <br />
                        SQL Server
                        <br />
                        Database
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <a>ADONET</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <a>DAPPER</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <a>HTML-CSS-SASS</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <a>Javascript</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <a>ASPNET Core MVC</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <a>Git / Github</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <a>ReactJS</a>
                    </div>
                  </div>
                  <div className="col-lg-3 col-4">
                    <div className="pack-box">
                      <a>NextJS</a>
                    </div>
                  </div>
                </Row>
              </div>
              <Link
                to="/katalog"
                className="tab-link mobile-mx-auto d-flex justify-content-center"
              >
                Tümünü İncele &gt;&gt;
              </Link>
            </div>
          </section>
          <div className="gradient-line2 mt-5" id="dijital-bir-meslek"></div>
          <section className="pt-20 pb-8 container border-info web-pack">
            <div className="mw-5xl mx-auto text-center position-relative">
              <h2 className="text-white mb-20  mx-auto position-relative">
                <b>Dijital Bir Meslek İstiyorum</b>
              </h2>
              <div className="vector2">
                <img
                  src="https://tobeto.s3.cloud.ngn.com.tr/dot_gray_8a5a605556_eb3dd4f77d.svg"
                  alt=""
                  width={150}
                  height={150}
                />
              </div>
            </div>
            <Row className="mw-5xl pt-5 mx-auto">
              <div className="col-lg-3 col-4">
                <div className="pack-box">
                  <Link to="/programlar/frontend">
                    Front End
                    <br />
                    Developer
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-4">
                <div className="pack-box">
                  <Link to="/bilgi-al">
                    Back End
                    <br />
                    Developer
                  </Link>
                  <img alt=''
                    className="comingsoon"
                    src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg"
                  />
                </div>
              </div>
              <div className=" col-lg-3 col-4">
                <div className="pack-box">
                  <Link to="/programlar/full-stack-developer">
                    Full Stack
                    <br />
                    Developer
                  </Link>
                </div>
              </div>
              <div className="col-lg-3 col-4">
                <div className="pack-box">
                  <Link to="/programlar/web-mobile">
                    Web &amp; Mobile
                    <br />
                    Developer
                  </Link>
                </div>
              </div>
              <div className="col-lg-4 col-4">
                <div className="pack-box">
                  <Link to="/bilgi-al">
                    Veri Bilimi
                    <br />
                    Uzmanı
                  </Link>
                  <img alt=''
                    className="comingsoon"
                    src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-4">
                <div className="pack-box">
                  <Link to="/bilgi-al">
                    Siber Güvenlik
                    <br />
                    Uzmanı
                  </Link>
                  <img alt=''
                    className="comingsoon"
                    src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg"
                  />
                </div>
              </div>
              <div className=" col-lg-4 col-4">
                <div className="pack-box">
                  <Link to="/bilgi-al">
                    UI / UX
                    <br />
                    Developer
                  </Link>
                  <img alt=''
                    className="comingsoon"
                    src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg"
                  />
                </div>
              </div>
              <Link
                to=" /katalog"
                className="tab-link mobile-mx-auto d-flex justify-content-center"
              >
                Tümünü İncele &gt;&gt;
              </Link>
            </Row>
          </section>
          <Container>
            <Row>
              <Link
                to="/kayit-ol"
                className="btn mx-auto btn-rainbow py-4 rainbow-text"
              >
                Uzmanlaşmak istediğin alanı seç, Tobeto platformda öğrenmeye
                başla!
              </Link>
            </Row>
          </Container>
          <div
            className=" gradient-line2 mt-5"
            id="profesyonel-bir-yonetici"
          ></div>
          <section className="py-20 mobile-padding container web-pack">
            <div className="mw-5xl mx-auto text-center position-relative mobile-header">
              <div className="vector6">
                <img
                  src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg"
                  alt=""
                  width={130}
                />
              </div>
              <h2 className="text-white mb-20 tablet-75 mx-auto position-relative">
              <b>Profesyonel Bir Yönetici Olmak İstiyorum</b>
                <div className="vector4">
                  <img 
                    src="https://tobeto.s3.cloud.ngn.com.tr/04_b3b68891d7_5ad2591676.svg"
                    alt=""
                    width={125}
                    height={125}
                  />
                </div>
              </h2>
            </div>
            <Row className="mw-5xl mx-auto pt-5 d-flex justify-content-center">
              <div className="col-lg-2 col-4">
                <div className="pack-box">
                  <Link to="/bilgi-al">
                    Ürün <br /> Yönetimi <br /> Programı
                  </Link>
                  <img alt=''
                    className="comingsoon"
                    src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg"
                  />
                </div>
              </div>
              <div className=" col-lg-2 col-4">
                <div className="pack-box">
                  <Link to="/bilgi-al">
                    Dijital <br /> Pazarlama <br /> Programı
                  </Link>
                  <img alt=''
                    className="comingsoon"
                    src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg"
                  />
                </div>
              </div>
              <div className=" col-lg-2 col-4">
                <div className="pack-box">
                  <Link to="/bilgi-al">
                    Proje <br /> Yönetimi <br /> Programı
                  </Link>
                  <img alt=''
                    className="comingsoon"
                    src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg"
                  />
                </div>
              </div>
              <div className=" col-lg-2 col-4">
                <div className="pack-box">
                  <Link to="/bilgi-al">
                    Yetenek
                    <br />
                    Yönetimi
                    <br />
                    Programı
                  </Link>
                  <img alt=''
                    className="comingsoon"
                    src="https://tobeto.s3.cloud.ngn.com.tr/comingsoon_4e9690b5a9_84706ccf9b.svg"
                  />
                </div>
              </div>
            </Row>
          </section>
          <div className=" gradient-line2 mt-5" id="kendini-gelistirmek"></div>
        </div>
        <section className="containerpy-20">
          <div className="mw-5xl mx-auto text-center position-relative">
            <h2 className="text-white mb-20 mx-auto ">
             <b>Kendimi Geliştirmek İstiyorum</b> 
            </h2>
            <div className="vector2">
                <img
                  src="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg"
                  alt=""
                  width={150}
                  height={150}
                />
            </div> 
          </div>
          <Row className="pt-5 pb-5 mw-5xl mx-auto shadow-lg">
            <div className="col-12 text-center px-5 ">
              <div className="tag-list">
                <div className="loop-slider-one">
                  <div className="inner">
                    <div className="tag">Öz Farkındalık</div>
                    <div className="tag">Çeviklik</div>
                    <div className="tag">Anlaşmazlıkların Çözümü</div>
                    <div className="tag">Kişisel Motivasyon</div>
                    <div className="tag">Müşteri Odaklılık</div>
                    <div className="tag">Öz Farkındalık</div>
                    <div className="tag">Çeviklik</div>
                    <div className="tag">Anlaşmazlıkların Çözümü</div>
                    <div className="tag">Kişisel Motivasyon</div>
                    <div className="tag">Müşteri Odaklılık</div>
                  </div>
                </div>
                <div className="loop-slider-two">
                  <div className="inner">
                    <div className="tag">Etkili Düşünme</div>
                    <div className="tag">Yaratıcılık</div>
                    <div className="tag">Pozitif Bakış</div>
                    <div className="tag">Sürekli Öğrenme</div>
                    <div className="tag">Problem Çözme</div>
                    <div className="tag">Etkili Düşünme</div>
                    <div className="tag">Yaratıcılık</div>
                    <div className="tag">Pozitif Bakış</div>
                    <div className="tag">Sürekli Öğrenme</div>
                    <div className="tag">Problem Çözme</div>
                  </div>
                </div>
                <div className="loop-slider-three">
                  <div className="inner">
                    <div className="tag">Profesyonel Duruş</div>
                    <div className="tag">Problem Çözme</div>
                    <div className="tag">Azim ve Dayanıklılık</div>
                    <div className="tag">Ticari Bakış</div>
                    <div className="tag">Müzakere</div>
                    <div className="tag">Profesyonel Duruş</div>
                    <div className="tag">Problem Çözme</div>
                    <div className="tag">Azim ve Dayanıklılık</div>
                    <div className="tag">Ticari Bakış</div>
                    <div className="tag">Müzakere</div>
                  </div>
                </div>
                <div className="loop-slider-four">
                  <div className="inner">
                    <div className="tag">Takım Olma</div>
                    <div className="tag">Müşteri Odaklılık</div>
                    <div className="tag">Etik</div>
                    <div className="tag">Dijital Okur Yazarlık</div>
                    <div className="tag">Etkili Düşünme</div>
                    <div className="tag">Takım Olma</div>
                    <div className="tag">Müşteri Odaklılık</div>
                    <div className="tag">Etik</div>
                    <div className="tag">Dijital Okur Yazarlık</div>
                    <div className="tag">Etkili Düşünme</div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </section>
      </main>
      <OutFooter />
    </>
  );
};
export default ForIndividuals;