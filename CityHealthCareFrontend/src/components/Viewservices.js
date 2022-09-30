import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import HospitalServiceApi from "../service/HospitalServiceApi.js";
var i;
export default class Viewservices extends Component {
  constructor(props) {
    super(props);

    this.state = {
        iCU: "",
        cTScan: "",
        xRAY: "",
        mRI: "",
        bloodTest: "",
        urinTest: "",
        sergery: "",
        pharmacy: "",
        diagnosis: "",
        ultraSound: "",
        maternity: "",
        sonography: "",
        emergency: "",
       message: null,
    };

    this.search = this.search.bind(this);
    this.onChange = this.onChange.bind(this);
    this.loadhospital = this.loadhospital.bind(this);
  }
  componentDidMount() {
    this.loadhospital();
  }
  loadhospital() {
    let hosp = JSON.parse(sessionStorage.getItem("hospital"));
    console.log(hosp.id);
    i = hosp.id;
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

    HospitalServiceApi.getServicesByHospId(i).then(
      (response) => {
        console.log(this.state.hospitalname);
        let hospital = response.data;
        this.setState({
            iCU: hospital.iCU,
            cTScan: hospital.cTScan,
            xRAY: hospital.xRAY,
            mRI: hospital.mRI,
            bloodTest: hospital.bloodTest,
            urinTest: hospital.urinTest,
            sergery: hospital.sergery,
            pharmacy: hospital.pharmacy,
            diagnosis: hospital.diagnosis,
            ultraSound: hospital.ultraSound,
            maternity: hospital.maternity,
            sonography: hospital.sonography,
            emergency: hospital.emergency,
          message: "Services list rendered successfully",
        });
        console.log(response.data);
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

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  backtodash() {
    window.location = "/hospitaldashboard";
  }

  render() {
    return (
      <>
        <div className="container my-4">
          <Button
            className="btn btn-secondary my-2 offset-10"
            onClick={this.backtodash}
            style={{ minWidth: "13vw" }}
          >
            Back To Dashboard
          </Button>

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

          <div>
            <h3>Available Services List</h3>
            <table className="table table-bordered">
            <thead className="bg-primary text-light">
            <tr><th>Hospital Name</th></tr>
            </thead>
            <tbody>
                <tr><td>{this.state.hospitalname}</td></tr>
            </tbody>
            </table>
            <table className="table table-bordered mb-5">
              <thead className="bg-primary text-light">
                <tr>
                  
                  <th>Services</th>
                  <th>Status</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr>
                
                  <td>ICU </td>
                  <td>{this.state.iCU} </td>
                </tr>
                <tr>
                  
                  <td>CTScan</td>
                  <td>{this.state.cTScan} </td>
                  
                </tr>
                <tr>
                  
                  <td>X-Ray</td>
                  <td>{this.state.xRAY} </td>
                  
                </tr>
                <tr>
                  
                  <td>MRI</td>
                  <td>{this.state.mRI} </td>
                  
                </tr>
                <tr>
                  
                  <td>Blood-Test</td>
                  <td>{this.state.bloodTest} </td>
                  
                </tr>
                <tr>
                  
                  <td>Urin-Test</td>
                  <td>{this.state.urinTest} </td>
                  
                </tr>
                <tr>
                  
                  <td>Surgery</td>
                  <td>{this.state.sergery} </td>
                  
                </tr>
                <tr>
                  
                  <td>Pharmacy</td>
                  <td>{this.state.pharmacy} </td>
                  
                </tr>
                <tr>
                  
                  <td>Diagnosis</td>
                  <td>{this.state.diagnosis} </td>
                  
                </tr>
                <tr>
                  
                  <td>Ultra-Sound</td>
                  <td>{this.state.ultraSound} </td>
                  
                </tr>
                <tr>
                  
                  <td>Maternity</td>
                  <td>{this.state.maternity} </td>
                  
                </tr>
                <tr>
                  
                  <td>Sonography</td>
                  <td>{this.state.sonography} </td>
                  
                </tr>
                <tr>
                  
                  <td>Emergency</td>
                  <td>{this.state.emergency} </td>
                  
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
