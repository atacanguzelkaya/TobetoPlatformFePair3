import { Col, Row } from "react-bootstrap";

const CatalogCard = () => {
  const educationDataArray = [
    {
      imgSrc: "https://tobeto.s3.cloud.ngn.com.tr/ENK_36573_a8546fa0ff.jpg",
      author: "Gürkan İlişen",
      duration: "30dk",
      title: "Dinle, Anla, İfade Et: Etkili İletişim Gelişim Yolculuğu",
    },
    {
      imgSrc: "https://tobeto.s3.cloud.ngn.com.tr/ENK_365670_08eb2bab1a.jpg",
      author: "Gürkan İlişen",
      duration: "40dk",
      title: "Sürdürülebilir Bir Dünya için Bireysel Farkındalık",
    },
    {
      imgSrc: "https://tobeto.s3.cloud.ngn.com.tr/ENK_365693_fd2d22fa3a.jpg",
      author: "Gürkan İlişen",
      duration: "53dk",
      title: "Hibrit Yaşamda Duyguyu Düzenleme",
    },
    {
      imgSrc: "https://tobeto.s3.cloud.ngn.com.tr/ENK_365274_0e51ec7bdb.jpg",
      author: "Gürkan İlişen",
      duration: "55dk",
      title: "Web Sayfası Tasarımı Nasıl Oluşturulur? - HTML (Temel Seviye)",
    },
    {
      imgSrc: "https://tobeto.s3.cloud.ngn.com.tr/ENK_365270_7e8908a0c2.jpg",
      author: "Gürkan İlişen",
      duration: "36dk",
      title: "Mehmet Auf ile İyi Günde, Kötü Günde",
    },
    {
      imgSrc: "https://tobeto.s3.cloud.ngn.com.tr/ENKG_616_3e86ae6eba.jpg",
      author: "Gürkan İlişen",
      duration: "1s",
      title: "Programlamanın Tarihçesi ve Gelişimi",
    },
    {
      imgSrc: "https://tobeto.s3.cloud.ngn.com.tr/ENKG_616_3e86ae6eba.jpg",
      author: "Gürkan İlişen",
      duration: "2s",
      title: "Yazılım Geliştirme ve Programlama Temel Kavramları",
    },
    {
      imgSrc: "https://tobeto.s3.cloud.ngn.com.tr/ENKG_389_65af6d2667.jpg",
      author: "Gürkan İlişen",
      duration: "1s",
      title: "Fiziksel ve Dijital Çalışma Alanınızın Düzenlenmesi",
    },
    {
      imgSrc: "https://tobeto.s3.cloud.ngn.com.tr/ENIB_116_5a33bf9410.jpg",
      author: "Gürkan İlişen",
      duration: "2s",
      title: "Biz Bir Ekibiz",
    },
    {
      imgSrc: "https://tobeto.s3.cloud.ngn.com.tr/ENIB_238_ea465ab18a.jpg",
      author: "Gürkan İlişen",
      duration: "20dk",
      title: "Yaratıcı Düşünme ve İnovasyon Teknikleri",
    },
    {
      imgSrc: "https://tobeto.s3.cloud.ngn.com.tr/ENIB_210_e8f964f5a9.jpg",
      author: "Gürkan İlişen",
      duration: "1.15dk",
      title: "Problem Çözme Teknikleri",
    },
    {
      imgSrc: "https://tobeto.s3.cloud.ngn.com.tr/ENIB_195_b77497161b.jpg",
      author: "Gürkan İlişen",
      duration: "17dk",
      title: "Müşteri Ne İster?",
    },
  ];
  return (
    <Row>
      {educationDataArray.map((educationData, index) => (
        <Col lg={4} md={6} key={index} className="educard-mobile mb-4 ">
          <div className="education-box-new fade-in">
            <img className="edubox-img" src={educationData.imgSrc} alt="" />
            <div className="content">
              <div>
                <div className="property">
                  <div>
                    <span className="pro">{educationData.author}</span>
                  </div>
                  <div>
                    <span className="pro">{educationData.duration}</span>
                  </div>
                  <div>
                    <span className="pro"></span>
                  </div>
                </div>
                <div className="name">{educationData.title}</div>
              </div>
            </div>
            <div className="prog-cont">
              <div className="entry-btn">
              </div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default CatalogCard ;