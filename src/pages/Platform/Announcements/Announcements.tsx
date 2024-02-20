import { useEffect, useState } from "react";
import {Button,Col,Container,Dropdown,DropdownButton,Modal,Row,Tab,Tabs} from "react-bootstrap";
import { PageRequestModel } from "../../../core/pageRequestModel/pageRequest";
import { GetAllAnnouncementResponse } from "../../../models/responses/announcement/getAllAnnouncementResponse";
import InnerNavbar from "../../../components/Navbar/InnerNavbar";
import InnerFooter from "../../../components/Footer/InnerFooter";
import announcementService from "../../../services/announcementService";
import "./announcements.css";

const Announcements = () => {
  const [announcementsList, setAnnouncementsList] = useState<
    GetAllAnnouncementResponse[]
  >([]);
  const pageRequest: PageRequestModel = { index: 0, size: 10 };
  const [selectedCard, setSelectedCard] = useState<GetAllAnnouncementResponse | null>(null);
  const [modalShow, setModalShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("Sıralama");
  const handleShowModal = (announcementId: string) => {
    const selectedAnnouncement = announcementsList.find(
      (announcement) => announcement.id === announcementId
    );
    setSelectedCard(selectedAnnouncement || null);
    setModalShow(true);
  };

  useEffect(() => {
    fetchAnnouncements(pageRequest);
  }, []);
  const fetchAnnouncements = async (pageRequest: any) => {
    await announcementService.getAll(pageRequest).then((response: any) => {
      if (response) {
        const newAnnouncement = response.data.items;
        setAnnouncementsList(newAnnouncement);
      }
    });
  };

  const handleDropdownSelect = (eventKey: any, event: any) => {
    setSelectedOption(eventKey);
    sortAnnouncements(eventKey);
  };
  const sortAnnouncements = (sortOption: string) => {
    let sortedAnnouncements: GetAllAnnouncementResponse[] = [];
    if (sortOption === "Tarihe Göre (Y-E)") {
      sortedAnnouncements = [...announcementsList].sort(
        (a, b) =>
          new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime()
      );
    } else if (sortOption === "Tarihe Göre (E-Y)") {
      sortedAnnouncements = [...announcementsList].sort(
        (a, b) =>
          new Date(a.createdDate).getTime() - new Date(b.createdDate).getTime()
      );
    }
    setAnnouncementsList(sortedAnnouncements);
  };

  return (
    <>
      <InnerNavbar />
      <div className="main">
        <Container fluid>
          <div className="page-banner-card">
            <Container>
              <Row>
                <span>Duyurularım</span>
              </Row>
            </Container>
          </div>
        </Container>
        <Container className="container-A">
          <Row>
            <div className="col-md-5 col-12 mb-4">
              <div className="searchBox search-box">
                <input
                  className="w-100 form-control"
                  type="text"
                  id="search"
                  placeholder="Arama"
                  defaultValue=""
                />
                <Button variant="light">
                  <svg
                    viewBox="0 0 512 512"
                    fill="gray"
                    height="1rem"
                    width="1rem"
                  >
                    <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" />
                  </svg>
                  <span className="ms-2"></span>
                </Button>
              </div>
            </div>
            <Col className="col-md-6 mb-4">
              <Row>
                <Col className="col-md-3 mb-4">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="bg-light"
                      className="rounded-5"
                      id="organization-dropdown"
                    >
                      Tür
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Haber</Dropdown.Item>
                      <Dropdown.Item>Duyuru</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col className="col-md-4 mb-4">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="bg-light rounded-5"
                      id="organization-dropdown"
                    >
                      Organizasyon
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>İstanbul Kodluyor</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col className="col-md-2 mb-4">
                  <DropdownButton
                    id="sorting-dropdown"
                    title={selectedOption}
                    onSelect={handleDropdownSelect}
                    variant="bg-light rounded-5"
                  >
                    <Dropdown.Item eventKey="Tarihe Göre (Y-E)">
                      Tarihe Göre (Y-E)
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="Tarihe Göre (E-Y)">
                      Tarihe Göre (E-Y)
                    </Dropdown.Item>
                  </DropdownButton>
                </Col>
              </Row>
            </Col>
          </Row>
          <div>
            <Tabs
              className="nav nav-tabs mainTablist d-flex justify-content-center"
              id="myTab"
              defaultActiveKey="AnnouncementAndNews"
              transition={false}
            >
              <Tab eventKey="AnnouncementAndNews" title="Duyuru ve Haberlerim">
                <Row>
                  {announcementsList.map((announcement) => (
                    <Col className="col-md-4 my-4" key={announcement.id}>
                      <div className="notfy-card notify">
                        <div className="d-flex flex-column">
                          <div className="d-flex justify-content-between mb-4">
                            <span className="type">
                              {announcement.announcementsNewsCategoryName}
                            </span>
                            <span className="corp-names type">
                              {announcement.projectName}
                            </span>
                          </div>
                          <span className="header">{announcement.title}</span>
                        </div>
                        <div className="d-flex justify-content-between">
                          <span className="date">
                            {announcement.createdDate.split("T")[0]}
                          </span>
                          <span
                            className="read-more"
                            onClick={() => handleShowModal(announcement.id)}
                          >
                            Devamını Oku
                          </span>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Tab>
            </Tabs>
          </div>
        </Container>
      </div>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop
        show={modalShow}
        onHide={() => setModalShow(false)}
        className="modal fade"
      >
        {selectedCard && (
          <div key={selectedCard.id}>
            <Modal.Header>
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {selectedCard.title}
              </h1>
              <Button
                type="button"
                className="btn-close btn-danger"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setModalShow(false)}
              ></Button>
            </Modal.Header>
            <Modal.Body>
              <p>{selectedCard.announcementContent}</p>
            </Modal.Body>
          </div>
        )}
      </Modal>
      <InnerFooter />
    </>
  );
};
export default Announcements;