import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import brandlogo from './assets/logo.png'
function Navbarmenu(){
    return(
      <Navbar expand="lg" className="Header-main">
      <Container>
       <Navbar.Brand href="#home">
          <img src={brandlogo}  alt="Brand Logo" className="logo-header d-inline-block align-top"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="header-link" href="#home">Home</Nav.Link>
            <Nav.Link className="header-link" href="#link">About</Nav.Link>
            <Nav.Link className="header-link" href="#link">Work</Nav.Link>
            <Nav.Link className="header-link" href="#link">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    );
}

export default Navbarmenu