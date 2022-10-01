import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

import AppointmentServiceApi from "../service/AppointmentServiceApi";

var i = 0;
var j = 0;
var k = 0;
export default class Userbedbook extends Component {
  constructor(props) {
    super(props);
    this.i = 0;

    this.state = {
      patientName: "",
      symptom: "",
      
      status: "",
      message: null,
    };
    this.saveRequest = this.saveRequest.bind(this);
    this.loadUser = this.loadUser.bind(this);
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser() {
    let user = JSON.parse(sessionStorage.getItem("user"));
    console.log("User id "+user.id);
    i = user.id;
    let id = JSON.parse(sessionStorage.getItem("hospid1"));
    console.log("hosp id " + id);
    j = id;
    k = JSON.parse(sessionStorage.getItem("docid"));
    console.log("Doc id " + k);
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  saveRequest = (e) => {
    if (
      this.state.patientName === "" ||
      this.state.symptom === "" 
      
    ) {
      Swal.fire({
        title: "All Fields are Mandatory",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    e.preventDefault();
    
    let request = {
      patientName: this.state.patientName,
      symptom: this.state.symptom,
      date: (new Date()).toString(),
      status: "pending",
    };
    console.log("userid " + i);
    console.log("hospid=" + j);

    console.log(request);

    AppointmentServiceApi.addAppointment(i,j,k,request).then((res) => {
      this.setState({ message: "Request send successfully." });
      console.log(this.state.message);
      Swal.fire({
        title: this.state.message,
        icon: "success",
        confirmButtonText: "Ok",
      });
      window.location = "/userdashboard";
    });
  };
  goback() {
    window.location = "/doctorinfo";
  }
  render() {
    return (
      <div className="container ">
        <div className="row my-3">
          <div className="col-sm-6"></div>

          <div className="col-sm-6">
            <Button
              onClick={this.goback}
              className="btn btn-link btn-primary text-light offset-10 text-uppercase text-decoration-none "
            >
              Back
            </Button>
          </div>
        </div>
        <div>
          <h3>Doctor Booking</h3>
          <h5>Please, fill all required details given below.</h5>
        </div>

        <form className="mb-5">
          <div className="form-group row my-3 justify-content-center">
            <label for="patientName" className="col-2 col-form-label">
              Patient Name
            </label>
            <div className="col-5">
            <input
                type="text"
                id="patientName"
                className="form-control"
                placeholder="Patient Name"
                name="patientName"
                value={this.state.patientName}
                onChange={this.onChange}
                required
              />
            </div>
          </div>
          <div className="form-group row my-3 justify-content-center">
            <label htmlFor="symptom" className="col-2 col-form-label">
              Symtomps
            </label>
            <div className="col-5">
              <input
                type="text"
                id="symptom"
                className="form-control"
                placeholder="Symptom"
                name="symptom"
                value={this.state.symptom}
                onChange={this.onChange}
                required
              />
            </div>
          </div>
          <div className="form-group row my-3 justify-content-center">
            <label htmlFor="date" className="col-2 col-form-label">
              Date
            </label>
            <div className="col-5">
              <input
                type="date"
                id="date"
                className="form-control"
                
                name="date"
                value={this.state.Date}
                onChange={this.onChange}
                required
              />
            </div>
          </div>
          <div className="form-group row justify-content-center">
            <div className="offset-9">
              <button
                className="btn btn-primary text-uppercase mt-3"
                onClick={this.saveRequest}
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
