import React from "react";
import { Button, Carousel } from "react-bootstrap";
import image1 from "./images/2-1.jpg";
import bed from "./images/3.jpg";
import image2 from "./images/1.jpg";

export default function Home() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={image1} alt="First slide" />

          <Carousel.Caption>
            <h3 className="text-warning">
              Check Bed Availability and Book Bed
            </h3>
            <p>Book Bed Instantly and save the Time of Searching </p>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={image2} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="text-warning">Check Blood and Oxygen Availability</h3>
            <p>
              Get the information of blood and oxygen Availability at Hospitals
              Instantly.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img className="d-block w-100" src={bed} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="text-warning">Check Specialist Doctors Available</h3>
            <p className="text-dark">
              Get the information of all specialist Doctors Available at
              Different Hospitals Instantly.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
