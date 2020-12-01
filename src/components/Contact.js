import React from "react"
import styled, { keyframes } from 'styled-components';
import { bounce, fadeIn } from 'react-animations';
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;
const FadeIn = styled.div`animation: 2s ${keyframes`${fadeIn}`};`;

const Contact = () => {

  return (
    <div className="container" id="contact">
      <div className="row">
        <div className="col-10 aboutContainer">
          <FadeIn><h3 className="aboutTitle text-center">contact me</h3></FadeIn>
          <div className="contactLinks text-center">
            <a href="https://github.com/tesssapierce" target="_blank" rel="noreferrer">
            < FaGithub className="contactLink" />
              </a> 

              <a href="https://www.linkedin.com/in/tesssapierce" target="_blank" rel="noreferrer">
              < FaLinkedin className="contactLink"/>
              </a> 
          </div>

          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label className="contactForm">name</Form.Label>
              <Form.Control type="name" placeholder="john doe" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput2">
              <Form.Label className="contactForm">email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="contactForm">message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Hello, it's nice to meet you!"/>
            </Form.Group>
            <Button variant="outline-dark" type="submit">submit</Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Contact