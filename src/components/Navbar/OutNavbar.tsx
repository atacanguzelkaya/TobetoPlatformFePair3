import { useEffect, useState } from 'react';
import { Navbar,Nav,Button,Container,NavDropdown,Image} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

const UserFullName = () => {
  const userData = localStorage.getItem("user");
  if (userData) {
    const getUser = JSON.parse(userData);
    return (getUser.firstName + " " + getUser.lastName);
  }
}
const OutNavbar = () => {
  const token = localStorage.getItem("token");
  const [userName, setUserName] = useState<string | null>();
  useEffect(() => {
    const fullName = UserFullName();
    if (fullName) {
      setUserName(fullName)
    }
  }, [userName]);
  return (
    <Navbar
      bg="web"
      variant="dark"
      expand="lg"
      className="position-fixed border-0 px-3 py-4 mb-1 w-100 m-0 z-index-999"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <Image
            alt="Tobeto-beyaz-logo"
            src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=256&q=75"
            width="120"
            height="25"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/hakkimizda" onClick={() => window.scrollTo(0, 0)}>
              {" "}
              Biz Kimiz?{" "}
            </Nav.Link>
            <NavDropdown title="Neler Sunuyoruz?" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/bireyler-icin" onClick={() => window.scrollTo(0, 0)}>
                {" "}
                Bireyler İçin{" "}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/kurumlar-icin" onClick={() => window.scrollTo(0, 0)}>
                {" "}
                Kurumlar İçin{" "}
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/katalog" onClick={() => window.scrollTo(0, 0)}>
              {" "}
              Katalog{" "}
            </Nav.Link>
            <Nav.Link as={Link} to="/codecademy" onClick={() => window.scrollTo(0, 0)}>
              {" "}
              Codecademy{" "}
            </Nav.Link>
            <NavDropdown title="Tobeto'da Bu Ay" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/blog" onClick={() => window.scrollTo(0, 0)}>
                {" "}
                Blog{" "}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/basinda-biz" onClick={() => window.scrollTo(0, 0)}>
                {" "}
                Basında Biz{" "}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/takvim-anasayfa" onClick={() => window.scrollTo(0, 0)}>
                {" "}
                Takvim{" "}
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/istanbul-kodluyor" onClick={() => window.scrollTo(0, 0)}>
                {" "}
                İstanbul Kodluyor{" "}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="me-right mx-5">
            {token ? (
              <Nav.Link as={Link} to="/platform" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="outline-light" className="rounded-5">
                  {userName}
                </Button>
              </Nav.Link>
            ) : (
              <>
                <Nav.Link as={Link} to="/giris" onClick={() => window.scrollTo(0, 0)}>
                  <Button variant="outline-light" className="rounded-5">
                    Giriş Yap
                  </Button>
                </Nav.Link>
                <Nav.Link as={Link} to="/kayit-ol" onClick={() => window.scrollTo(0, 0)}>
                  <Button variant="rainbow">Ücretsiz Üye Ol</Button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default OutNavbar;