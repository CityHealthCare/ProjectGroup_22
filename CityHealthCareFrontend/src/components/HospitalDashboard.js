import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import HospitalServiceApi from "../service/HospitalServiceApi.js";

class HospitalDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hospitalId: "",
      Name: "",
    };

    this.loadHospital = this.loadHospital.bind(this);
  }

  componentDidMount() {
    this.loadHospital();
  }

  loadHospital = () => {
    let hospital = JSON.parse(sessionStorage.getItem("hospital"));
    this.setState({
      hospitalId: hospital.id,
      Name: hospital.name,
    });
  };

  logout() {
    HospitalServiceApi.logoutHospital();
    window.location = "/";
  }
  addbed() {
    window.location = "/addbed";
  }
  addblood() {
    window.location = "/addblood";
  }
  addoxygen() {
    window.location = "/addoxygen";
  }
  adddoctorinfo() {
    window.location = "/adddoctorinfo";
  }
  bedlist() {
    window.location = "/bedlist";
  }
  bloodlist() {
    window.location = "/bloodlist";
  }
  oxygenlist() {
    window.location = "/oxygenlist";
  }
  doctorinfolist() {
    window.location = "/doctorinfolist";
  }
  viewappointmentrequest() {
    window.location = "/viewappointmentrequest";
  }
  approverejectappointment() {
    window.location = "/approverejectappointment";
  }


  viewservices() {
    window.location = "/viewservices";
  }
  addservices() {
    window.location = "/addservices";
  }


  render() {
    let { hospitalId, Name } = this.state;
    return (
      <div className="container-fluid hospitaldash pb-5">
        <div className="row py-3">
          <div className="col-sm-6">
            <h2 className="text-capitalize text-light">Welcome, {Name}</h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={this.logout}
              className="btn btn-link btn-danger text-light offset-10 text-uppercase text-decoration-none "
            >
              Logout
            </Button>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">Add Bed</h5>
                <p className="card-text">Add bed details to database.</p>
                <Button className="btn btn-success" onClick={this.addbed}>
                  ADD
                </Button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">View Bed List</h5>
                <p className="card-text">
                  View details of all Beds in hospitals.
                </p>
                <Button className="btn btn-primary" onClick={this.bedlist}>
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3 justify-content-center">
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">Add Blood</h5>
                <p className="card-text">Add Blood details of hospitals.</p>
                <Button className="btn btn-success" onClick={this.addblood}>
                  ADD
                </Button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">View Blood List</h5>
                <p className="card-text">
                  View details of all Blood in hospitals.
                </p>
                <Button className="btn btn-primary" onClick={this.bloodlist}>
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="row my-3 justify-content-center">
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">Add Oxygen</h5>
                <p className="card-text">Add Oxygen details of hospitals.</p>
                <Button className="btn btn-success" onClick={this.addoxygen}>
                  ADD
                </Button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">View Oxygen List</h5>
                <p className="card-text">
                  View details of all Oxygen in hospitals.
                </p>
                <Button className="btn btn-primary" onClick={this.oxygenlist}>
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>


        <div className="row my-3 justify-content-center">
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">Add DoctorInfo</h5>
                <p className="card-text">Add Doctor details of hospitals.</p>
                <Button
                  className="btn btn-success"
                  onClick={this.adddoctorinfo}
                >
                  ADD
                </Button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">View DoctorInfo List</h5>
                <p className="card-text">
                  View details of all Doctor in hospitals.
                </p>
                <Button
                  className="btn btn-primary"
                  onClick={this.doctorinfolist}
                >
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>




<div className="row my-3 justify-content-center">
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">Add Services</h5>
                <p className="card-text">Add Services details of hospitals.</p>
                <Button
                  className="btn btn-success"
                  onClick={this.addservices}
                >
                  ADD
                </Button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">View Services List</h5>
                <p className="card-text">
                  View details of all Services in hospitals.
                </p>
                <Button
                  className="btn btn-primary"
                  onClick={this.viewservices}
                >
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-3 mb-5 justify-content-center">
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">Action on Request</h5>
                <p className="card-text">Approve or Reject the Requests.</p>
                <Button
                  className="btn btn-primary"
                  onClick={this.approverejectequest}
                >
                  View
                </Button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">View Request</h5>
                <p className="card-text">View Request details of hospitals.</p>
                <Button className="btn btn-primary" onClick={this.viewrequest}>
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-3 mb-5 justify-content-center">
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">Action on Appointments</h5>
                <p className="card-text">Approve or Reject the Appointments.</p>
                <Button
                  className="btn btn-primary"
                  onClick={this.approverejectappointment}
                >
                  View
                </Button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div
              className="card"
              style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            >
              <div className="card-body">
                <h5 className="card-title">View Appointments</h5>
                <p className="card-text">View Appointments details of Patients.</p>
                <Button className="btn btn-primary" onClick={this.viewappointmentrequest}>
                  View
                </Button>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    );
  }
}

export default HospitalDashboard;
