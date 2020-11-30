import React from "react"
import Card from "react-bootstrap/Card"
import { DiReact } from "react-icons/di";
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

const AboutMe = () => {

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-10 aboutContainer">
          <Bounce><h3 className="aboutTitle">hello world</h3></Bounce>
          <div className="imgWrap">
            <img src="/assets/img/Tessa.jpg" className="img-fluid aboutImg" />
          </div>
          <div className="bioSection">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe