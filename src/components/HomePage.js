import React, { useState, useEffect } from "react";
import Header from "./Header"
import AboutMe from "./AboutMe"
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {

  const [ data, setData ] = useState({})

  return (
    <>
    <Header />
    <AboutMe />
    </>
  )

}

export default HomePage