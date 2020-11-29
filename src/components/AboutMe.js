import React from "react"
import Card from "react-bootstrap/Card"
import { DiReact } from "react-icons/di";

const AboutMe = () => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-10 aboutContainer">
          <h3 className="aboutTitle">hello world</h3>
          <div className="imgWrap">
            <img src="/assets/img/Tessa.jpg" className="img-fluid aboutImg" />
          </div>
          <div className="bioSection">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <div className="row cardsSection">
            <Card className="col-12 col-md-3 aboutCard">
              <DiReact className="reactIcon"/>
              <Card.Body>
                <Card.Title>Lorem Ipsum</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="col-12 col-md-3 aboutCard">
            <DiReact className="reactIcon"/>
              <Card.Body>
                <Card.Title>Lorem Ipsum</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="col-12 col-md-3 aboutCard">
            <DiReact className="reactIcon"/>
              <Card.Body>
                <Card.Title>Lorem Ipsum</Card.Title>
                <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe