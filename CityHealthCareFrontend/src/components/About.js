import React from "react";
import "./Aboutus.css";
import { Button, Card } from "react-bootstrap";
import avinash from "./images/AvinashKadam.png";
import psutar from "./images/PSutar.png";
import ashinde from "./images/AShinde.png";
import npsingh from "./images/Npsingh.png";


export default function About() {
  return (
    <>
      <div className="container">
        <h2 className="text-start pb-2 mt-2">About Us</h2>
        <h3>City Health Care Portal</h3>
        <p >
          This project city health care portal aims at to develop the application
          that covers all the aspects of management and operations of hospital.
          So, with the victim and proof of corona pandemic situation we are
          introducing this project. So, if further in future again pandemic
          situation like corona comes into human life at that time this application
          will help the peoples a lot in the procedure of finding facilities.
          This application enables the health providers to provide the operational
          health care availability, reduce time consumption and enhance delivery
          of quality of care. The main purpose of our project is to make
          hospital related task easy and saves the time of public while
          searching health care facilities. This project maintains helps to
          maintains the details of hospital related queries (like oxygen
          availability, Bed availability etc.) With this application people can get
          the information of nearby hospital location wise wherever they are.
        </p>
        <hr />
        <h3>Our Team</h3>
        <div class="wrapper">
          <div class="team">
            <div class="team_member">
              <div class="team_img">
                <img src={avinash} alt="Team_image" />
              </div>
              <h3>Avinash Kadam</h3>
            </div>
            
            <div class="team_member">
              <div class="team_img">
                <img src={ashinde} alt="Team_image" />
              </div>
              <h3>Akshay Shinde</h3>
            </div>

            <div class="team_member">
              <div class="team_img">
                <img src={psutar} alt="Team_image" />
              </div>
              <h3>Pradyumna Sutar</h3>
            </div>

            <div class="team_member">
              <div class="team_img">
                <img src={npsingh} alt="Team_image" />
              </div>
              <h3>Narayan Rawat</h3>
            </div>
           
           
           
          </div>
        </div>
      </div>
    </>
  );
}
