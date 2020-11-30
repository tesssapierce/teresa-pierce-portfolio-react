import React from "react"
import Card from "react-bootstrap/Card"
import { DiReact } from "react-icons/di";
import styled, { keyframes } from 'styled-components';
import { bounce, pulse } from 'react-animations';
import { SiJavascript, SiNodeDotJs, SiCsswizardry, SiReact, SiAdobephotoshop, SiAdobeindesign, SiAdobedreamweaver, SiAdobelightroomclassic, SiGithub, SiMysql, SiMongodb, SiNpm, SiShopify, SiSalesforce, SiWordpress, SiHeroku } from "react-icons/si";

const Bounce = styled.div`animation: 2s ${keyframes`${pulse}`} infinite`;

const AboutMe = () => {

  return (
    <div className="container text-center" id="aboutme">
      <div className="row">
        <div className="col-10 aboutContainer">
          <Bounce><h3 className="aboutTitle">hello world</h3></Bounce>
          <div className="imgWrap">
            <img src="/assets/img/Tessa.jpg" className="img-fluid aboutImg" />
          </div>
          <div className="bioSection">
            <h3>I create web experiences</h3>
            <p>I am a 27 year old woman living in Arvada, Colorado.  I have 5 years of blended experience across e-commerce, digital marketing, and web development.</p>
            <p>I graduated from the University of North Texas in 2015 with a B.S. in Digital Retailing and Merchandising.  In 2020, I completed a Full Stack Development Certificate program with the University of Denver.</p>
            <p>My diverse background includes website management, email and SMS marketing, photography, feed management, and full-stack development.</p>
          <div>
            <p className="icons">
            <SiJavascript /> < SiNodeDotJs /> <SiCsswizardry /> <SiReact /> <SiMysql /> <SiMongodb /> <SiNpm /> <SiGithub /> <SiHeroku /> 
            </p>
            <p className="icons"><SiShopify /> <SiSalesforce /> <SiWordpress /> <SiAdobedreamweaver /> <SiAdobephotoshop /> <SiAdobeindesign /> <SiAdobelightroomclassic />
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe