import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div>
      <Container 
        fluid
        style={{
          backgroundColor: "#343a40",
          opacity:'0.9',
          padding: "2vh",
          color: "white",
        }}
      >
            This website uses News API .
            <a href="https://newsapi.org/">To know more </a>.
          
      </Container>
    </div>
  );
};

export default Footer;