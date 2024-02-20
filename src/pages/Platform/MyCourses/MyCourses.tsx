import { useEffect, useState } from "react";
import {
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import InnerNavbar from "../../../components/Navbar/InnerNavbar";
import InnerFooter from "../../../components/Footer/InnerFooter";
import { Link } from "react-router-dom";
import CourseCard from "../../../components/Card/CourseCard";
import "./my-courses.css";
import courseService from "../../../services/courseService";
import { PageRequestModel } from "../../../core/pageRequestModel/pageRequest";

export interface CourseModel {
  id: string;
  userId: string;
  userName: string;
  title: string;
  imageUrl: string;
}

const MyCourses = () => {
  const pageRequest: PageRequestModel = {
    index: 0,
    size: 10,
  };
  const [courses, setCourses] = useState<CourseModel[]>([]);
  const fetchCourses = async (pageRequest: any) => {
    await courseService.getAll(pageRequest).then((response: any) => {
      setCourses(response.data.items);
    });
  };

  const [selectedOption, setSelectedOption] =
    useState<string>("Adına Göre (A-Z)");
  const handleDropdownSelect = (eventKey: any, event: any) => {
    setSelectedOption(eventKey);
  };
  useEffect(() => {
    fetchCourses(pageRequest);
  }, []);

  return (
    <>
      <InnerNavbar />
      <main>
        <Container fluid>
          <div className="page-banner-card">
            <Container>
              <Row>
                <span>Eğitimlerim</span>
              </Row>
            </Container>
          </div>
        </Container>
        <div className="container-mt-3">
          <div className="row">
            <div className="col-md-5 col-12 mb-4">
              <div className="searchBox search-box">
                <input
                  className="w-100 form-control"
                  type="text"
                  id="search"
                  placeholder="Arama"
                  defaultValue=""
                />
                <button className="btn btn-primary">
                  <svg
                    viewBox="0 0 512 512"
                    fill="gray"
                    height="1rem"
                    width="1rem"
                  >
                    <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z" />
                  </svg>
                  <span className="ms-2"></span>
                </button>
              </div>
            </div>
            <div className="col-md-6 col-12 mb-4">
              <div className="row">
                <div className="col-md-6 col-12 mb-4">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="primary"
                      id="organization-dropdown"
                    >
                      Kurum Seçiniz
                    </Dropdown.Toggle>
                    <DropdownMenu>
                      <DropdownItem>İstanbul Kodluyor</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <div className="col-md-6 col-12 mb-4">
                  <Dropdown
                    onSelect={(eventKey, event) =>
                      handleDropdownSelect(eventKey, event)
                    }
                  >
                    <DropdownToggle variant="primary" id="sorting-dropdown">
                      {selectedOption}
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem eventKey="Adına Göre (A-Z)">
                        Adına Göre (A-Z)
                      </DropdownItem>
                      <DropdownItem eventKey="Adına Göre (Z-A)">
                        Adına Göre (Z-A)
                      </DropdownItem>
                      <DropdownItem eventKey="Tarihe Göre (Y-E)">
                        Tarihe Göre (Y-E)
                      </DropdownItem>
                      <DropdownItem eventKey="Tarihe Göre (E-Y)">
                        Tarihe Göre (E-Y)
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </div>
            <Col>
              <Col className="mb-4">
                <Tabs
                  className="nav nav-tabs mainTablist d-flex justify-content-center"
                  id="myTab"
                  defaultActiveKey="Eğitimlerim"
                  transition={false}
                >
                  <Tab eventKey="Eğitimlerim" title="Tüm Eğitimlerim">
                    <Row>
                      <Col md="2" className=" mb-4">
                        <div className="corp-edu-card">
                          <img alt="" className="card-img" />
                          <div className="card-content">
                            <div className="d-flex flex-column">
                              <span>Dr. Ecmel Ayral'dan Hoşgeldin Mesajı</span>
                              <span className="platform-course-date">
                                21 Eylül 2023 15:20
                              </span>
                            </div>
                            <Link to="/content" className="apply-btn">
                              Eğitime Git
                            </Link>
                          </div>
                        </div>
                      </Col>
                      {courses.map((course) => (
                        <Col key={course.id} md="2" className=" mb-4">
                          <CourseCard course={course} />
                        </Col>
                      ))}
                    </Row>
                  </Tab>
                  <Tab eventKey="started" title="Devam Ettiklerim"></Tab>
                  <Tab eventKey="done-lessons" title="Tamamladıklarım"></Tab>
                </Tabs>
              </Col>
            </Col>
          </div>
        </div>
      </main>
      <InnerFooter />
    </>
  );
};

export default MyCourses;
