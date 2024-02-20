import { useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Dropdown, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthService from '../../services/authService';
import './navbar.css';

const UserFullName = () => {
  const userData = localStorage.getItem("user");
  if(userData){
  const getUser = JSON.parse(userData);
  return (getUser.firstName +" "+getUser.lastName);
  }
}

const InnerNavbar = () => {

  const [userName, setUserName] = useState<string | null>();
  useEffect( () => {
    const fullName = UserFullName();
    if (fullName) {
      setUserName(fullName)
    }
  }, [userName]);
  const handleLogout = () => { AuthService.logout(); };

  return (
    <Navbar bg='white' expand="lg" variant='white' className="position-relative border-0 px-3 py-4 w-100 m-0 z-index-999">
      <Container fluid>
        <Navbar.Brand as={Link} to="/platform">
          <Image alt='tobeto-logo' src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftobeto-logo.409772fc.png&w=256&q=75" width="60%" height="50%" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto px-5 mx-5">
            <Nav.Link as={Link} to="/platform">Ana Sayfa</Nav.Link>
            <Nav.Link as={Link} to="/profilim">Profilim</Nav.Link>
            <Nav.Link as={Link} to="/degerlendirmeler">Değerlendirmeler</Nav.Link>
            <Nav.Link as={Link} to="/platform-katalog">Katalog</Nav.Link>
            <Nav.Link as={Link} to="/takvim">Takvim</Nav.Link>
            <Nav.Link as={Link} to="/istanbul-kodluyor">İstanbul Kodluyor</Nav.Link>
          </Nav>
          <Nav className="me-right mx-5">
            <Navbar.Brand as={Link} to="/">
              <span className="tbt-gradient"></span>
            </Navbar.Brand>
            <NavDropdown title={userName} className='mb-0 name' id="offcanvasNavbarDropdown">
              <Dropdown.Item as={Link} to="/profilim/profilimi-duzenle/kisisel-bilgilerim">Profil Bilgileri</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as={Link} onClick={handleLogout} to="/">Oturumu Kapat</Dropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};
export default InnerNavbar;