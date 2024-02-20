import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Tab,
  Tabs,
  Button,
  Offcanvas,
  Accordion,
  Stack,
  ProgressBar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./live-course-content.css";

const LiveCourseContent = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleClose = () => setShowOffcanvas(false);
  const handleShow = () => setShowOffcanvas(true);

  return (
    <>
      <Container className="cv-box cv-padding display-flex">
        <Container className="lg-3 md-12">
          <Row>
            <Col xs={1}>
              <Image
                alt=""
                src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOHiut7Ip2g6BA%3d%3d"
                width={75}
                height={75}
                rounded
                loading="lazy"
              />
            </Col>
            <Col xs={11}>
              <Stack gap={2}>
                <div className="p-2">
                  <Row>
                    <Col>
                      <h6>.NET & React Fullstack - 1A</h6>
                    </Col>
                    <Col md="auto">
                      <i className="fa-solid fa-heart"></i>
                    </Col>
                    <Col md="auto">
                      <i className="fa-solid fa-bookmark"></i>
                    </Col>
                  </Row>
                </div>
                <div className="p-2">
                  <ProgressBar variant="success" now={100} />
                </div>
              </Stack>
            </Col>
          </Row>
        </Container>
        <Container>
          <Tabs defaultActiveKey="/content">
            <Tab eventKey="/content" title="İçerik">
              <Row>
                <Col lg={5} md={5} sm={12} xs={12}>
                  <div className="list-group">
                    <Link
                      to="#item-1"
                      className="list-group-item list-group-item-action"
                    >
                      .NET & React Fullstack
                    </Link>
                  </div>
                </Col>
                <Col lg={7} md={7} sm={12} xs={12}>
                  <Container
                    className="cv-box cv-padding display-flex"
                    id="item-1"
                  >
                    <div>
                      <Image
                        alt=""
                        src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=DiBldjEKnwKDQVcjzXYj%2bf53hQnzP5df"
                        className="card-img-top" loading="lazy"
                      />
                    </div>
                    <Row>
                      <Col lg={9} md={8} sm={9} xs={12}>
                        <div className="card-content">
                          <div className="d-flex flex-column">
                            <span>
                              <b>.NET & React Fullstack</b>
                            </span>
                            <span className="platform-course-date">
                              Sanal Sınıf
                            </span>
                          </div>
                        </div>
                      </Col>
                      <Col lg={3} md={4} sm={3} xs={12}>
                        <Button
                          variant="primary"
                          type="button"
                          onClick={handleShow}
                        >
                          Detay
                        </Button>
                        <Offcanvas
                          show={showOffcanvas}
                          onHide={handleClose}
                          placement="end"
                        >
                          <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Detaylar</Offcanvas.Title>
                          </Offcanvas.Header>
                          <Offcanvas.Body>{/* ... */}</Offcanvas.Body>
                        </Offcanvas>
                      </Col>
                    </Row>
                    <Row>
                      <span className="oturum">
                        <b>Oturumlar</b>
                      </span>
                      <Accordion
                        defaultActiveKey={["1"]}
                        alwaysOpen
                        className="spec-acc"
                      >
                        <Accordion.Item eventKey="1">
                          <Accordion.Header>
                            <Col lg={3} md={3} sm={3} xs={6}>
                              1. Oturum
                            </Col>
                            <Col lg={9} md={9} sm={9} xs={6}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-check-circle-fill"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                              </svg>
                            </Col>
                          </Accordion.Header>
                          <Accordion.Item eventKey="1">
                            <Accordion.Body>
                              <Row>
                                <Col lg={3} md={4} sm={3} xs={6}>
                                  <span>Başlangıç</span>
                                </Col>
                                <Col lg={9} md={8} sm={9} xs={6}>
                                  26 EKİ 2023 09:00
                                </Col>
                                <Col lg={3} md={4} sm={3} xs={6}>
                                  <span>Bitiş</span>
                                </Col>
                                <Col lg={9} md={8} sm={9} xs={6}>
                                  26 EKİ 2023 12:00
                                </Col>
                                <hr />
                                <Col lg={3} md={4} sm={3} xs={6}>
                                  <span>Eğitmen</span>
                                </Col>
                                <Col lg={9} md={8} sm={9} xs={6}>
                                  <span>
                                    {" "}
                                    <a className="userName">
                                      Gürkan İlişen
                                    </a>{" "}
                                  </span>
                                  <span>
                                    {" "}
                                    <a className="userName">Kader Yavuz</a>{" "}
                                  </span>
                                  <span>
                                    {" "}
                                    <a className="userName">Ali Seyhan</a>{" "}
                                  </span>
                                </Col>
                              </Row>
                              <hr />
                              <Row>
                                <Col xs={12}>
                                  <b>Oturum Kayıtları</b>
                                  <p>
                                    Oturumlara ilişkin kayıtlar, canlı oturumlar
                                    tamamlandıktan sonra izlenebilir.
                                  </p>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg={9} md={8} sm={9} xs={12}>
                                  <span>Oturum_1-23.10.2023 09:00:00</span>
                                </Col>
                                <Col lg={3} md={4} sm={3} xs={12}>
                                  <Button variant="primary">
                                    <span>KAYDI AÇ</span>
                                  </Button>
                                </Col>
                              </Row>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                          <Accordion.Header>2. Oturum</Accordion.Header>
                          <Accordion.Item eventKey="2">
                            <Accordion.Body>
                              <Row>
                                <Col lg={3} md={4} sm={3} xs={6}>
                                  <span>Başlangıç</span>
                                </Col>
                                <Col lg={9} md={8} sm={9} xs={6}>
                                  29 EKİ 2023 12:00
                                </Col>
                                <Col lg={3} md={4} sm={3} xs={6}>
                                  <span>Bitiş</span>
                                </Col>
                                <Col lg={9} md={8} sm={9} xs={6}>
                                  29 EKİ 2023 13:00
                                </Col>
                                <hr />
                                <Col lg={3} md={4} sm={3} xs={6}>
                                  <span>Eğitmen</span>
                                </Col>
                                <Col lg={9} md={8} sm={9} xs={6}>
                                  <span>
                                    {" "}
                                    <a className="userName">
                                      Gürkan İlişen
                                    </a>{" "}
                                  </span>
                                  <span>
                                    {" "}
                                    <a className="userName">Kader Yavuz</a>{" "}
                                  </span>
                                  <span>
                                    {" "}
                                    <a className="userName">Ali Seyhan</a>{" "}
                                  </span>
                                </Col>
                              </Row>
                              <hr />
                              <Row>
                                <Col lg={9} md={8} sm={9} xs={12}>
                                  <span>Canlı oturum başladı.</span>
                                </Col>
                                <Col lg={3} md={4} sm={3} xs={12}>
                                  <Button variant="primary">
                                    <span>KATIL</span>
                                  </Button>
                                </Col>
                              </Row>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                          <Accordion.Header>3. Oturum</Accordion.Header>
                          <Accordion.Item eventKey="3">
                            <Accordion.Body>
                              <Row>
                                <Col lg={3} md={4} sm={3} xs={6}>
                                  <span>Başlangıç</span>
                                </Col>
                                <Col lg={9} md={8} sm={9} xs={6}>
                                  31 EKİ 2023 09:00
                                </Col>
                                <Col lg={3} md={4} sm={3} xs={6}>
                                  <span>Bitiş</span>
                                </Col>
                                <Col lg={9} md={8} sm={9} xs={6}>
                                  31 EKİ 2023 12:00
                                </Col>
                                <hr />
                                <Col lg={3} md={4} sm={3} xs={6}>
                                  <span>Eğitmen</span>
                                </Col>
                                <Col lg={9} md={8} sm={9} xs={6}>
                                  <span>
                                    {" "}
                                    <a className="userName">
                                      Gürkan İlişen
                                    </a>{" "}
                                  </span>
                                  <span>
                                    {" "}
                                    <a className="userName">Kader Yavuz</a>{" "}
                                  </span>
                                  <span>
                                    {" "}
                                    <a className="userName">Ali Seyhan</a>{" "}
                                  </span>
                                </Col>
                              </Row>
                            </Accordion.Body>
                          </Accordion.Item>
                        </Accordion.Item>
                      </Accordion>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="/about" title="Hakkında">
              <Row>
                <Col lg={2} md={2} sm={3} xs={5}>
                  <strong>Başlangıç</strong>
                </Col>
                <Col lg={10} md={10} sm={9} xs={7}>
                  8 EYL 2023 14:06
                </Col>
              </Row>
              <Row>
                <Col lg={2} md={2} sm={3} xs={5}>
                  <strong>Bitiş</strong>
                </Col>
                <Col lg={10} md={10} sm={9} xs={7}>
                  <span>31 MAR 2024 23:59</span>
                </Col>
              </Row>
              <Row>
                <Col lg={2} md={2} sm={3} xs={5}>
                  <strong>Geçirdiğin Süre</strong>
                </Col>
                <Col lg={10} md={10} sm={9} xs={7}>
                  <span>1 dakikadan az</span>
                </Col>
              </Row>
              <Row>
                <Col lg={2} md={2} sm={3} xs={5}>
                  <strong>Tahmini Süre</strong>
                </Col>
                <Col lg={10} md={10} sm={9} xs={7}>
                  1 dk
                </Col>
              </Row>
              <Row>
                <Col lg={2} md={2} sm={3} xs={5}>
                  <strong>Eğitim Türü</strong>
                </Col>
                <Col lg={10} md={10} sm={9} xs={7}>
                  Eğitim
                </Col>
              </Row>
              <Row>
                <Col lg={2} md={2} sm={3} xs={5}>
                  <strong>Kategori</strong>
                </Col>
                <Col lg={10} md={10} sm={9} xs={7}>
                  <div>Genel</div>
                </Col>
              </Row>
              <Row>
                <Col lg={2} md={2} sm={3} xs={7}>
                  <strong>İçerik</strong>
                </Col>
                <Col lg={10} md={10} sm={9} xs={5}>
                  1
                </Col>
              </Row>
              <Row>
                <Col lg={2} md={2} sm={3} xs={7}>
                  <strong>Video</strong>
                </Col>
                <Col lg={10} md={10} sm={9} xs={5}>
                  1
                </Col>
              </Row>
              <Row>
                <Col lg={2} md={2} sm={3} xs={5}>
                  <strong>Üretici Firma</strong>
                </Col>
                <Col lg={10} md={10} sm={9} xs={7}>
                  <a className="btn-change">Kurum içi üretim</a>
                </Col>
              </Row>
            </Tab>
          </Tabs>
        </Container>
      </Container>
    </>
  );
};
export default LiveCourseContent;
