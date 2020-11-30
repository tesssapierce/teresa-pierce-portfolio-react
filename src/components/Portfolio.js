import React from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { FaHourglassHalf } from "react-icons/fa"
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';
import { DiJavascript1, DiBootstrap, DiHeroku, DiNodejs, DiMysql, } from "react-icons/di";

const Bounce = styled.div`animation: 2s ${keyframes`${pulse}`} infinite`;

const Portfolio = () => {

  return (
    <div className="container text-center" id="portfolio">
      <div className="row">
        <div className="col-12 portfolioContainer">
          <Bounce><h3 className="portfolioTitle">portfolio</h3></Bounce>

          {/* Portfolio Example 1 - BookShelf */}
          <div className="row portfolioExample">
            <div className="col-6">
              <img src="/assets/img/bookshelf.jpg" className="img-fluid portfolioImg" />
            </div>
            <div className="col-6 portfolioContainer">
              <h3>Bookshelf: Online Book Exchange</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>contributors: Casino Apte, Andy Greenhaw, Brenda Miller, Beni Mahat</p>
              <div className="technologyUsed">
              < DiJavascript1 alt="javascript"/> <DiBootstrap alt="bootstrap"/> <DiHeroku alt="heroku" /> <DiNodejs alt="node" /> <DiMysql alt="mysql"/>
              </div>
              <Button href="https://intense-earth-81966.herokuapp.com/" variant="outline-dark" className="portfolioBtn">deployed site</Button>
              <Button href="https://github.com/tesssapierce/BookShelf-Public-Library-Online-Rental-System-Javascript-Express-MySQL-Sequelize" variant="outline-dark" className="portfolioBtn">repository</Button>
            </div>
          </div>

          {/* Portfolio Example 2 - Meal Matchers */}
          <div className="row portfolioExample">
            <div className="col-6">
              <img src="/assets/img/bookshelf.jpg" className="img-fluid portfolioImg" />
            </div>
            <div className="col-6 portfolioContainer">
              <h3>Bookshelf: Online Book Exchange</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>contributors: Casino Apte, Andy Greenhaw, Brenda Miller, Beni Mahat</p>
              <div className="technologyUsed">
              < DiJavascript1 alt="javascript"/> <DiBootstrap alt="bootstrap"/> <DiHeroku alt="heroku" /> <DiNodejs alt="node" /> <DiMysql alt="mysql"/>
              </div>
              <Button href="https://intense-earth-81966.herokuapp.com/" variant="outline-dark" className="portfolioBtn">deployed site</Button>
              <Button href="https://github.com/tesssapierce/BookShelf-Public-Library-Online-Rental-System-Javascript-Express-MySQL-Sequelize" variant="outline-dark" className="portfolioBtn">repository</Button>
            </div>
          </div>

          {/* Portfolio Example 3 - Employee Directory */}
          <div className="row portfolioExample">
            <div className="col-6">
              <img src="/assets/img/bookshelf.jpg" className="img-fluid portfolioImg" />
            </div>
            <div className="col-6 portfolioContainer">
              <h3>Bookshelf: Online Book Exchange</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>contributors: Casino Apte, Andy Greenhaw, Brenda Miller, Beni Mahat</p>
              <div className="technologyUsed">
              < DiJavascript1 alt="javascript"/> <DiBootstrap alt="bootstrap"/> <DiHeroku alt="heroku" /> <DiNodejs alt="node" /> <DiMysql alt="mysql"/>
              </div>
              <Button href="https://intense-earth-81966.herokuapp.com/" variant="outline-dark" className="portfolioBtn">deployed site</Button>
              <Button href="https://github.com/tesssapierce/BookShelf-Public-Library-Online-Rental-System-Javascript-Express-MySQL-Sequelize" variant="outline-dark" className="portfolioBtn">repository</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio



{/* <div className="container text-center">
<div className="row">
  <div className="col-12 aboutContainer">
    <Bounce><h3 className="aboutTitle">portfolio</h3></Bounce>
    <div className="row cardsSection">
      <Card className="col-12 col-md-4 aboutCard">
      <img src="/assets/img/bookshelf.jpg" className="portfolioImg img-fluid"/>
        <Card.Body>
          <Card.Title>Bookshelf: Online Book Exchange</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Card.Text>
          <Button href="https://intense-earth-81966.herokuapp.com/" variant="outline-dark" className="portfolioBtn">deployed site</Button>
          <Button href="https://github.com/tesssapierce/BookShelf-Public-Library-Online-Rental-System-Javascript-Express-MySQL-Sequelize" variant="outline-dark" className="portfolioBtn">repository</Button>
        </Card.Body>
      </Card>

      <Card className="col-12 col-md-4 aboutCard">
      <img src="/assets/img/mealmatcher.jpg" className="img-fluid"/>
        <Card.Body>
          <Card.Title>Meal Matcher: Online Recipe Book</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Card.Text>
          <Button href="https://tesssapierce.github.io/Meal-Matcher-Recipe-Book-JS-HTML-CSS-AJAX/" variant="outline-dark" className="portfolioBtn">deployed site</Button>
          <Button href="https://github.com/tesssapierce/Meal-Matcher-Recipe-Book-JS-HTML-CSS-AJAX" variant="outline-dark" className="portfolioBtn">repository</Button>
        </Card.Body>
      </Card>

      <Card className="col-12 col-md-4 aboutCard">
      < FaHourglassHalf className="reactIcon"/>
        <Card.Body>
          <Card.Title>Employee Directory</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Card.Text>
          <Button href="" variant="outline-dark" className="portfolioBtn">deployed site</Button>
          <Button href="https://github.com/tesssapierce/Employee-Directory-React-JS" variant="outline-dark" className="portfolioBtn">repository</Button>
        </Card.Body>
      </Card>

      <Card className="col-12 col-md-4 aboutCard">
      <img src="/assets/img/bookshelf.jpg" className="img-fluid"/>
        <Card.Body>
          <Card.Title>Weather Dashboard</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Card.Text>
          <Button href="https://tesssapierce.github.io/Weather-Dashboard-API/" variant="outline-dark" className="portfolioBtn">deployed site</Button>
          <Button href="https://github.com/tesssapierce/Weather-Dashboard-API" variant="outline-dark" className="portfolioBtn">repository</Button>
        </Card.Body>
      </Card>

      <Card className="col-12 col-md-4 aboutCard">
      <img src="/assets/img/mealmatcher.jpg" className="img-fluid"/>
        <Card.Body>
          <Card.Title>Custom ORM: Restaurant Manager</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Card.Text>
          <Button href="https://dry-headland-18207.herokuapp.com/" variant="outline-dark" className="portfolioBtn">deployed site</Button>
          <Button href="https://github.com/tesssapierce/Express-Handlebars-Restaurant-Manager" variant="outline-dark" className="portfolioBtn">repository</Button>
        </Card.Body>
      </Card>

      <Card className="col-12 col-md-4 aboutCard">
      < FaHourglassHalf className="reactIcon"/>
        <Card.Body>
          <Card.Title>Employee Directory</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Card.Text>
          <Button href="" variant="outline-dark" className="portfolioBtn">deployed site</Button>
          <Button href="https://github.com/tesssapierce/Employee-Directory-React-JS" variant="outline-dark" className="portfolioBtn">repository</Button>
        </Card.Body>
      </Card>
    </div>
  </div>
</div>
</div> */}