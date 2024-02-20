import { Container, Row, Col, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import InnerNavbar from "../../../components/Navbar/InnerNavbar";
import InnerFooter from "../../../components/Footer/InnerFooter";
import CatalogAccordion from "../../../components/Accordion/CatalogAccordion";
import CatalogCard from "../../../components/Card/CatalogCard";
import "./catalog.css";
const Catalog = () => {
  return (
    <>
      <InnerNavbar />
      <div className="search-section container-fluid">
        <Container>
          <Row>
            <Col md="9" className="search-container">
              <div className="education-count">
                <span>Öğrenmeye başla!</span>
              </div>
              <div className="search-box">
                <input
                  className="form-control"
                  type="text"
                  id="search"
                  placeholder="Eğitim arayın..."
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="mt-5">
        <Row>
          <CatalogAccordion />
          <Col lg="9" md="8">
            <Container>
              <Row gy="6" gx="3">
                <CatalogCard />
                <Col lg="4" md="6" className="educard-mobile"></Col>
                <Col lg="4" md="6" className="educard-mobile"></Col>
                <Pagination
                  className="justify-content-center"
                  role="navigation"
                  aria-label="Pagination"
                >
                  <Pagination.Prev />
                  <Pagination.Item as={Link} to="#1">
                    {" "}
                    1{" "}
                  </Pagination.Item>
                  <Pagination.Item as={Link} to="#2">
                    {" "}
                    2{" "}
                  </Pagination.Item>
                  <Pagination.Item as={Link} to="#3">
                    {" "}
                    3{" "}
                  </Pagination.Item>
                  <Pagination.Next />
                </Pagination>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <InnerFooter />
    </>
  );
};
export default Catalog;