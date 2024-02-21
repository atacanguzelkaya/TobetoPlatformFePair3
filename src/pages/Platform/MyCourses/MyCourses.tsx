import { useEffect, useState } from "react";
import {Button,Col,Container,Dropdown,DropdownButton,Row,Tab,Tabs} from "react-bootstrap";
import { PageRequestModel } from "../../../core/pageRequestModel/pageRequest";
import InnerNavbar from "../../../components/Navbar/InnerNavbar";
import InnerFooter from "../../../components/Footer/InnerFooter";
import CourseCard from "../../../components/Card/CourseCard";
import courseService from "../../../services/courseService";
import "./my-courses.css";

export interface CourseModel {
  id: string;
  userId: string;
  userName: string;
  title: string;
  imageUrl: string;
}

const MyCourses = () => {
  const pageRequest: PageRequestModel = { index: 0, size: 10 };
  const [courses, setCourses] = useState<CourseModel[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("Sıralama");
  const fetchCourses = async (pageRequest: any) => {
    await courseService.getAll(pageRequest).then((response: any) => {
      setCourses(response.data.items);
    });
  };

  const handleDropdownSelect = (eventKey: any, event: any) => {
    setSelectedOption(eventKey);
    sortCourses(eventKey);
  };
  const sortCourses = (sortOption: string) => {
    let sortedCourses: any[] = [];

    if (sortOption === "Adına Göre (A-Z)") {
      sortedCourses = [...courses].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
    } else if (sortOption === "Adına Göre (Z-A)") {
      sortedCourses = [...courses].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
    }
    setCourses(sortedCourses);
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
        <div className="container-mt-3 mx-5">
          <Row >
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
            <div className="col-md-6 col-12 mb-4">
              <Row >
              <div className="col-md-3 col-12 mb-4">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="bg-light"
                      className="rounded-5"
                      id="organization-dropdown"
                    >
                      Tür
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>İstanbul Kodluyor</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="col-md-2 col-12 mb-4">
                  <DropdownButton
                    id="sorting-dropdown"
                    title={selectedOption}
                    onSelect={handleDropdownSelect}
                    variant="bg-light rounded-5"
                  >
                    <Dropdown.Item eventKey="Adına Göre (A-Z)">
                      Adına Göre (A-Z)
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="Adına Göre (Z-A)">
                      Adına Göre (Z-A)
                    </Dropdown.Item>
                  </DropdownButton>
                </div>
              </Row>
            </div>
            <Col>
              <Col mb="4">
                <Tabs
                  className="nav nav-tabs mainTablist d-flex justify-content-center"
                  id="myTab"
                  defaultActiveKey="Eğitimlerim"
                  transition={false}
                >
                  <Tab eventKey="Eğitimlerim" title="Tüm Eğitimlerim">
                    <Row>
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
          </Row>
        </div>
      </main>
      <InnerFooter />
    </>
  );
};

export default MyCourses;