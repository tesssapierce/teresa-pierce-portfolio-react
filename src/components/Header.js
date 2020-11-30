import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Scroll from 'react-scroll';

const Header = () => {
  return (
    <header className="headerContainer navHeader">

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" className="brand">Teresa Pierce <span className="navTitle">Full Stack Developer & Digital Expert</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navLinks">
            <Nav.Link
              onSelect={() => Scroll.scrollTo('aboutme', {
                smooth: true,
                offset: -70,
                duration: 500,
              })}
            >
              about
            </Nav.Link>
            <Nav.Link href="#link">portfolio</Nav.Link>
            <Nav.Link href="#link">contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header