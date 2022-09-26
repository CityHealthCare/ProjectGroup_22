import React from "react";
import "./Contactus.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Contactus() {
  return (
    <>
    <Card>
      <Card.Header as="h5">Contact Us</Card.Header>
      <Card.Body>
        <Card.Title>City Health Care Portal</Card.Title>
        <Card.Text>
        <h4>If Hospital wants to register for this Portal.
        Please Contact the Admin on below Contact Details.</h4>
        <h6> Contact: 7040004283</h6>
        <h6> Email: admin@cityhealthcareportal.com</h6>
        </Card.Text>
        <Button variant="primary" href="https://mail.google.com/mail/&ogbl">Send Mail</Button>
      </Card.Body>
    </Card>
    </>
  );
}
    
