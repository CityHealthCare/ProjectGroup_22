import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" sticky="top" variant="dark" >
          <Navbar.Brand href="/" className="mx-2">
            <img src="https://img.icons8.com/external-nawicon-flat-nawicon/32/000000/external-hospital-location-nawicon-flat-nawicon.png" />
            CityHealthCare Portal
          </Navbar.Brand>
          <Container> 
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
          </Nav>
          <Button
              className="btn btn-me"
              variant="outline-warning"
              href="/login"
            >
              Login
            </Button>
            <Button
              className="btn btn-me mx-2 mr-2"
              variant="outline-warning"
              href="/usersignup"
            >
              SignUp
            </Button>
        </Container>
        
      </Navbar>
    </>
  );
}
