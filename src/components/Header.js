import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Scroll from 'react-scroll';
import { MDBSmoothScroll } from "mdbreact";

const Header = () => {

  return (
    
    <header className="headerContainer navHeader">

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" className="brand">Teresa Pierce <span className="navTitle">Full Stack Developer & Digital Expert</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navLinks">
            <Nav.Link id="navAbout smooth-scroll">
              <MDBSmoothScroll to="aboutme">about</MDBSmoothScroll>
            </Nav.Link>
            <Nav.Link href="#portfolio" id="navPortfolio">
            <MDBSmoothScroll to="portfolio">portfolio</MDBSmoothScroll>
            </Nav.Link>
            <Nav.Link href="#contact" id="navContact">
            <MDBSmoothScroll to="contact">contact</MDBSmoothScroll>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header