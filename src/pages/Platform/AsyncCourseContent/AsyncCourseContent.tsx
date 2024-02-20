import { useEffect, useState  } from "react";
import {Container,Row,Col,Image,Tab,Tabs,Accordion,Stack,ProgressBar} from "react-bootstrap";
import { useParams } from "react-router-dom";
import asyncLessonsOfContentService from "../../../services/asyncLessonsOfContentService";
import "./async-course-countent.css";

const AsyncCourseContent = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const {id }= useParams();
  const fixedId = id?.toString() || '';
  const [asyncLessonsContent, setAsyncLessonsContent] = useState<any>("");
  const handleDersClick = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const about = [
    { label: "Başlangıç", value: "8 EYL 2023 14:00" },
    { label: "Bitiş", value: "31 MAR 2024 23:59" },
    { label: "Geçirdiğin Süre", value: "1 saat" },
    { label: "Tahmini Süre", value: "2 saat" },
    { label: "Eğitim Türü", value: "Eğitim" },
    { label: "Kategori", value: "Genel" },
    { label: "İçerik", value: "1" },
    { label: "Video", value: "1" },
    {
      label: "Üretici Firma",
      value: <a className="btn-change">Kurum içi üretim</a>,
    },
  ];

  const fetchAsyncLessonsContent = async () =>{
    await asyncLessonsOfContentService.get({asyncCourseId: fixedId}).then((response: any) => {
      setAsyncLessonsContent(response.data);
    });
  }
  useEffect(() => {
    fetchAsyncLessonsContent();
  }, [fixedId])
  
  return (
    <>
      <Container className="cv-box cv-padding display-flex">
        <Container className="lg-3 md-12">
          <Row>
            <Col xs={1}>
              <Image
                alt=""
                src={asyncLessonsContent.imageUrl}
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
                      <h6>{asyncLessonsContent.asyncContentName}</h6>
                    </Col>
                    <Col md="auto">
                    <i className="fa-solid fa-heart"></i>
                    </Col>
                    <Col  md="auto">
                      <i className="fa-solid fa-bookmark"></i>
                    </Col>
                  </Row>
                </div>
                <div className="p-2">
                  <ProgressBar variant="success" now={50} />
                </div>
              </Stack>
            </Col>
          </Row>
        </Container>
        <Container>
          <Tabs defaultActiveKey="/content">
            <Tab eventKey="/content" title="İçerik" >
              <Row>
                <Col lg={5} md={5} sm={12} xs={12}>
                  <Accordion className="spec-acc" defaultActiveKey="dersler">
                    <Accordion.Item eventKey="dersler">
                      <Accordion.Header>
                        <div className="title w-100">
                          <span>
                          {asyncLessonsContent.asyncContentName}
                          </span>
                        </div>
                      </Accordion.Header>
                      <Col lg={7} md={7} sm={12} xs={12}>
                        <Accordion.Item eventKey="dersler">
                          <Accordion.Body>
                            <div className="ders-listesi">
                                <div  className="list-group-item list-group-item-action"
                                  onClick={() => handleDersClick(asyncLessonsContent.videoUrl)}
                                >
                                 <b>{asyncLessonsContent.name}</b> 
                                </div>
                            </div>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Col>
                    </Accordion.Item>
                  </Accordion>
                </Col>
                <Col lg={7} md={7} sm={12} xs={12}>
                  {selectedVideo && (
                    <iframe
                      width="500"
                      height="300"
                      src={selectedVideo}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  )}
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="/about" title="Hakkında">
              {about.map((item, index) => (
                <Row key={index}>
                  <Col lg={2} md={2} sm={3} xs={5}>
                    <strong>{item.label}</strong>
                  </Col>
                  <Col lg={10} md={10} sm={9} xs={7}>
                    {item.value}
                  </Col>
                </Row>
              ))}
            </Tab>
          </Tabs>
        </Container>
      </Container>
    </>
  );
};
export default AsyncCourseContent;