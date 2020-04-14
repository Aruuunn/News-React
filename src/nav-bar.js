import React from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Navbar,Nav} from 'react-bootstrap';
const NavBar = (props) => {
  
    return (
      <Navbar
        bg="dark"
        variant="dark"
        expand="sm"
        className="justify-content-between"
      >
        <Navbar.Brand>News</Navbar.Brand>

        <Navbar.Toggle aria-controls="nav-control" style={{ width: "100px" }} />

        <Navbar.Collapse id="nav-control">
          <Nav>
            {props.Active === "About Me" ? (
              <Nav.Link active>About Me</Nav.Link>
            ) : (
              <Nav.Link onClick={props.link}>About Me</Nav.Link>
            )}
            {props.Active === "TopHeadline" ? (
              <Nav.Link active>Top News</Nav.Link>
            ) : (
              <Nav.Link onClick={props.link}>Top News</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default NavBar;
