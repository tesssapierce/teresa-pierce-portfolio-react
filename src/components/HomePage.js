import React, { useState, useEffect } from "react";
import Header from "./Header"
import AboutMe from "./AboutMe"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Welcome from "./Welcome"
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {

  return (
    <>
      <Header />
      <Welcome />
      <AboutMe />
      <Portfolio />
      <Contact />
    </>
  )

}

export default HomePage