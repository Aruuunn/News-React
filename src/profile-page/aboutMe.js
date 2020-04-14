import React from 'react';

import NavBar from '../nav-bar.js';
import Footer from '../footer.js';
// eslint-disable-next-line
import {Container,Image,Row,Col} from 'react-bootstrap';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import profile from '../assets/profile.jpg';
import  "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin ,faInstagram} from "@fortawesome/free-brands-svg-icons";
const AboutMe = (props) =>{
    return (
      <div>
        <NavBar Active="About Me" link={props.link} />
        <Container className="mt-3" style={{ marginBottom: "10vh" }}>
          <h1>About Me</h1>
          <Row>
            <Col>
              <img
                src={profile}
                alt="profile"
                style={{
                  width: "166.5px",
                  height: "199px",
                  borderRadius: "3%",
                }}
              />
            </Col>
            <Col>
              <p>
                <h2>
                  I'M <b className="text-primary">Arun</b> and I{" "}
                  <FontAwesomeIcon icon={faHeart} className="text-danger" />{" "}
                  designing websites .
                </h2>
                I am currently pursuing Bachelors in Computer Science at
                Thiagarajar College of Engineering , Madurai.
              </p>
              <p>
                This website is purely educational based . Feel Free to use it.
              </p>
              <div>
                <h3>Contact Me</h3>
                <a
                  href="https://www.linkedin.com/in/arun-murugan-50885717a/"
                  class="h2"
                >
                  <FontAwesomeIcon icon={faLinkedin} />{" "}
                </a>
                <a href="#insta" class="h2 text-danger">
                  {" "}
                  <FontAwesomeIcon icon={faInstagram} />{" "}
                </a>
              </div>
            </Col>
          </Row>
        </Container>
        <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
          <Footer />
        </div>
      </div>
    );
}



export default AboutMe;