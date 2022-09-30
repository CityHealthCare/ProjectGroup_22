import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import AppointmentServiceApi from "../service/AppointmentServiceApi";
import UserServiceApi from "../service/UserServiceApi";
import HospitalServiceApi from "../service/HospitalServiceApi";

var docid;
var id1;
export default class DoctorInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hospitalname: "",
      doctors: [],
      message: null,
    };

    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);
    this.gotodoctorbook = this.gotodoctorbook.bind(this);
  }

  search = (e) => {
    if (this.state.hospitalname === "") {
      Swal.fire({
        title: "Warning",
        text: "Please Enter the Hospital Name",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    e.preventDefault();
    UserServiceApi.getByHospname(this.state.hospitalname).then((response) => {

      let hospital = response.data;
      this.setState({
        doctors: response.data,
        message: "Doctors list rendered successfully",
      });
    });

    HospitalServiceApi.getByHospname(this.state.hospitalname).then(
      (response) => {
        console.log(this.state.hospitalname);
        let hospital1 = response.data;
        id1 = hospital1.hospid;
        sessionStorage.setItem("hospid1",id1);
        sessionStorage.setItem("docid",docid);
        console.log(id1);
        console.log(docid);
      }
    );
  };

  validateinput() {
    let hospname = document.getElementById("hospitalname").value;
    if (hospname === "") {
      document.getElementById("searchVl").innerHTML =
        "Please Enter Hospital Name";
      return true;
    }
  }
  removeWarnings() {
    document.getElementById("searchVl").innerHTML = "";
  }

  gotodoctorbook() {
    if (this.state.ventilator === "") {
      Swal.fire({
        title: "Warning",
        text: "Please Enter the Hospital Name",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      const docid=this.doctors.map((doctor)=>doctor.doctorid);
      console.log(docid);
      return false;
    }
    window.location = "/userdoctorbook";
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  backtodash() {
    window.location = "/userdashboard";
  }
  render() {
    return (
      <>
        <div className="container my-4">
          <button
            className="btn btn-secondary my-2 offset-10"
            onClick={this.backtodash}
            style={{ minWidth: "13vw" }}
          >
            Back To Dashboard
          </button>
          <form>
            <div className="form-group row mt-3 justify-content-center">
              <label
                htmlFor="hospitalname"
                className="col-2 col-form-label"
                style={{ fontWeight: "bold" }}
              >
                Hospital Name
              </label>
              <div className="col-5">
                <input
                  type="text"
                  id="hospitalname"
                  className="form-control"
                  placeholder="Hospital name"
                  name="hospitalname"
                  value={this.state.hospitalname}
                  onChange={this.onChange}
                  onBlur={this.validateinput}
                  onFocus={this.removeWarnings}
                  required
                />
                <span style={{ color: "red" }} id="searchVl"></span>
              </div>
            </div>
            <Button
              className="btn btn-primary mt-3 offset-6"
              onClick={this.search}
            >
              Search
            </Button>
          </form>
          <h3>Doctor Information List</h3>
          <form className="mb-5">
            <table className="table table-bordered">
              <thead className="bg-primary text-light">
                <tr>
                  <th className="">Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Qualification</th>
                  <th>Specilization</th>
                  <th>TimeSlot</th>
                  <th>Fees</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.doctors.map((doctor) => (
                  <tr key={doctor.doctorid}>
                    <td className="">{docid=doctor.doctorid}</td>
                    <td>{doctor.name}</td>
                    <td>{doctor.email}</td>
                    <td>{doctor.qualification}</td>
                    <td>{doctor.specialization}</td>
                    <td>{doctor.timeslotAM}<b className="text-success">AM</b>   <b>-</b>   {doctor.timeslotPM}<b className="text-danger">PM</b></td>
                    <td> Rs. {doctor.fees} /-</td>
                    <td><Button
                  className="btn btn-success "
                  onClick={this.gotodoctorbook}
                >
                  Book
                </Button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </form>
        </div>
      </>
    );
  }
}
