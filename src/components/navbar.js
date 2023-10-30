import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function Navbarcomp (){
    const [show, setShow] = useState(false);
const handleShow = () => setShow(true);
return(
    <>
    {[false].map((expand) => (
    <Navbar expand='lg'sticky="top">
    <Container>
      <Navbar.Brand href="#home">
        <img
          src='https://augmntx.com/assets/img/AugmntX-Logo.png'
          width="160"
          height="30"
          className="d-inline-block align-top"
          alt="logo"
        />
        
      </Navbar.Brand>
      <Navbar.Toggle  show={show}  aria-controls="basic-navbar-nav" responsive="lg" onClick={handleShow} />
      <Navbar.Offcanvas  responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>AugmntX</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item >
          <Nav.Link href="link-3">Why</Nav.Link>
        </Nav.Item> 
        <NavDropdown title="Industries" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Travel</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Automotive</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.4">
                Banking
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">
              Capital-markets
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
              Healthcare
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
              Digital Commerce
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.6">
              View all
              </NavDropdown.Item>
            </NavDropdown>
        <Nav.Item>
          <Nav.Link eventKey="/profile"><Link style={{color:'#343f52'}} to="/profile">Find Dev</Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Apply as Vendor</Nav.Link>
        </Nav.Item>
        <Nav.Item className='hire'>
          <Nav.Link  eventKey="link-2"><Link to={"/signup"}><Button variant="primary" className='btn-hire'show={show} responsive="lg" onClick={handleShow} >Hire Dev</Button></Link></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/login"> <Link style={{color:'#343f52'}} to="/login">login</Link></Nav.Link>
        </Nav.Item>
            </Nav>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Container>
  </Navbar>
    ))}
    </>

)
}
export default Navbarcomp;