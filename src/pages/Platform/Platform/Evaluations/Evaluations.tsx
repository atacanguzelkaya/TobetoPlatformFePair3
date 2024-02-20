import { Link } from 'react-router-dom';
import InnerNavbar from "../../../components/Navbar/InnerNavbar";
import InnerFooter from "../../../components/Footer/InnerFooter";
import './evaluations.css';

const Evaluations = () => {
  return (
    <>
      <InnerNavbar />
      <main>
      <section className="py-5">
          <div className="position-relative mt-12">
            <div className="vector">
              <span>
                <span>
                  <img
                    alt=""
                    aria-hidden={true}
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27150%27%20height=%27150%27/%3e"
                  />
                </span>
                <img
                  alt=""
                  src="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg"
                  decoding="async"
                  data-nimg="intrinsic"
                />
              </span>
            </div>
            <div className="container text-center">
              <div className="mw-5xl mx-auto">
                <h2 className="text-indigo fw-normal">
                  Yetkinlik<span className="text-dark fw-normal">lerini ücretsiz ölç, </span>bilgi<span className="text-dark fw-normal">lerini test et.</span>
                </h2>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5 ">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-12 mb-5">
                <div className="dashboard-card">
                  <span>Tobeto İşte Başarı Modeli</span>
                  <p>
                    80 soru ile yetkinliklerini <span>ölç</span>, önerilen eğitimleri <span>tamamla</span>, rozetini <span>kazan.</span>
                  </p>
                  <Link className="btn btn-primary rounded-5 color" to="/profilim/degerlendirmeler/rapor/tobeto-iste-basari-modeli/1">
                   <b>Başla</b> 
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-8 d-none">
                <div className="dashboard-card2">
                  <span>Kişisel Gelişim Envanteri</span>
                  <p>
                    Kendin için en uygun kariyer alanlarını <b>keşfet</b>
                  </p>
                  <span>YAKINDA</span>
                  <label className="switch soon-shape mx-auto">
                    <span className="slider round" />
                  </label>
                </div>
                <div className="w-100 d-flex justify-content-center" />
              </div>
              <div className="col-12 col-md-6 mb-8">
                <div className="dashboard-card1 equal-box">
                  <span>Yazılımda Başarı Testi</span>
                  <p>
                    Çoktan seçmeli sorular ile teknik bilgini <span> test et.</span>
                  </p>
                  <label className="text-white">&gt;&gt;&gt;</label>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-8">
                <div className="d-flex flex-column equal-box">
                  <div className=" dashboard-card-slim">
                    <div className="d-flex align-items-center">
                      <img
                        className="platformIcon "
                        src='https://tobeto.com/platform-icon.png'/>
                      <span>Front End</span>
                    </div>
                    <button className="btn btn-light rounded-5"><b>Başla</b></button>
                  </div>
                  <div className=" dashboard-card-slim">
                    <div className="d-flex align-items-center">
                      <img
                        className="platformIcon "
                        src='https://tobeto.com/platform-icon.png'/>
                      <span>Full Stack</span>
                    </div>
                    <button className="btn btn-light rounded-5"><b>Başla</b></button>
                  </div>
                  <div className=" dashboard-card-slim">
                    <div className="d-flex align-items-center">
                      <img
                        className="platformIcon "
                        src='https://tobeto.com/platform-icon.png'/>
                      <span>Back End</span>
                    </div>
                    <button className="btn btn-light rounded-5"><b>Başla</b></button>
                  </div>
                  <div className=" dashboard-card-slim">
                    <div className="d-flex align-items-center">
                      <img
                        className="platformIcon "
                        src='https://tobeto.com/platform-icon.png'/>
                      <span>Microsoft SQL Server</span>
                    </div>
                    <button className="btn btn-light rounded-5"><b>Başla</b></button>
                  </div>
                  <div className=" dashboard-card-slim">
                    <div className="d-flex align-items-center">
                      <img
                        className="platformIcon "
                        src='https://tobeto.com/platform-icon.png'/>
                      <span>Masaüstü Programlama</span>
                    </div>
                    <button className="btn btn-light rounded-5"><b>Başla</b></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="position-relative ">
            <div className="gradient-line3 mt-5" />
            <div className="container text-center">
              <div className="mw-5xl mx-auto">
                <h3 className="text-indigo fw-normal">
                  Aboneliğe özel <span className="text-dark fw-normal">değerlendirme araçları için</span>
                </h3>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-2 mb-20">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 mb-8">
                <div className="dashboard-card4 equal-box">
                  <span>Kazanım Odaklı Testler</span>
                  <p>
                    Dijital gelişim kategorisindeki eğitimlere
                    başlamadan öncekonuyla ilgili bilgin
                    ölçülür ve seviyene göre yönlendirilirsin.
                  </p>
                  <p />
                </div>
              </div>
              <div className="col-12 col-md-6 mb-8">
                <div className="dashboard-card4 equal-box">
                  <span>
                    Huawei Talent Interview <br /> Teknik Bilgi Sınavı*
                  </span>
                  <p className="mt-4">
                    <b>
                      <i>Sertifika alabilmen için,</i>
                    </b>{' '}
                    eğitim yolculuğunun sonunda teknik yetkinliklerin ve kod bilgin ölçülür.
                    <br />
                    <br />
                    4400+ soru | 30+ programlama dili <br />4 zorluk seviyesi
                  </p>
                  <small className="text-white">
                    *Türkiye Ar-Ge Merkezi tarafından tasarlanmıştır.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <InnerFooter />
    </>
  );
};

export default Evaluations;