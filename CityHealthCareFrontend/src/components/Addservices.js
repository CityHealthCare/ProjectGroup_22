import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import HospitalServiceApi from "../service/HospitalServiceApi.js";

var i;
class Addservices extends Component {
  constructor(props) {
    super(props);
    this.i = 0;
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

    this.saveservices = this.saveservices.bind(this);
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

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  saveservices = (e) => {
    if (
       this.state.iCU === "" ||
       this.state.cTScan === "" ||
       this.state.xRAY === "" ||
       this.state.mRI === "" ||
       this.state.bloodTest=== "" ||
       this.state.urinTest=== "" ||
       this.state.sergery=== "" ||
       this.state.pharmacy=== "" ||
       this.state.diagnosis=== "" ||
       this.state.ultraSound=== "" ||
       this.state.maternity=== "" ||
       this.state.sonography=== "" ||
       this.state.emergency=== "" 
    ) {
      Swal.fire({
        title: "All Fields are Mandatory",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }

    e.preventDefault();
    let hospitalServices = {
        iCU:this.state.iCU,
        cTScan:this.state.cTScan,
        xRAY:this.state.xRAY,
        mRI:this.state.mRI,
        bloodTest:this.state.bloodTest,
        urinTest:this.state.urinTest,
        sergery:this.state.sergery,
        pharmacy:this.state.pharmacy,
        diagnosis:this.state.diagnosis,
        ultraSound:this.state.ultraSound,
        maternity:this.state.maternity,
        sonography:this.state.sonography,
        emergency:this.state.emergency,
        hospid:i
    };


    HospitalServiceApi.addServices(hospitalServices).then((res) => {
      this.setState({ message: "Services details updated successfully." });
      console.log(this.state.message);
      Swal.fire({
        title: this.state.message,
        icon: "success",
        confirmButtonText: "Ok",
      });
      window.location = "/hospitaldashboard";
    });
  };

  backtodash() {
    window.location = "/hospitaldashboard";
  }
  render() {
    return (
      <>
        <div className="container my-1">
          <Button
            className="btn btn-secondary my-2 offset-10"
            onClick={this.backtodash}
            style={{ minWidth: "12vw" }}
          >
            Back To Dashboard
          </Button>
          <h3>Add Services</h3>
          <form className="pb-5 overflow-hidden">
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="iCU" className="col-1 col-form-label">
                ICU
              </label>
              <div className="col-3">
                <input
                  type="text"
                  id="iCU"
                  className="form-control"
                  name="iCU"
                  value={this.state.iCU}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="cTScan" className="col-1 col-form-label">
                CTScan
              </label>
              <div className="col-3">
                <input
                  type="text"
                  id="cTScan"
                  className="form-control"
                  
                  name="cTScan"
                  value={this.state.cTScan}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="xRAY" className="col-1 col-form-label">
                X-Ray
              </label>
              <div className="col-3">
                <input
                  type="text"
                  id="xRAY"
                  className="form-control"
                  
                  name="xRAY"
                  value={this.state.xRAY}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="mRI" className="col-1 col-form-label">
                MRI
              </label>
              <div className="col-3">
                <input
                   type="text"
                  id="mRI"
                  className="form-control"
                  
                  name="mRI"
                  value={this.state.mRI}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="bloodTest" className="col-1 col-form-label">
                Blood-Test
              </label>
              <div className="col-3">
                <input
                  type="text"
                  id="bloodTest"
                  className="form-control"
                 
                  name="bloodTest"
                  value={this.state.bloodTest}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="urinTest" className="col-1 col-form-label">
                Urine-Test
              </label>
              <div className="col-3">
                <input
                  type="text"
                  id="urinTest"
                  className="form-control"
                  
                  name="urinTest"
                  value={this.state.urinTest}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="sergery" className="col-1 col-form-label">
                Surgery
              </label>
              <div className="col-3">
                <input
                  type="text"
                  id="sergery"
                  className="form-control"
                  
                  name="sergery"
                  value={this.state.sergery}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="pharmacy" className="col-1 col-form-label">
                Pharmacy
              </label>
              <div className="col-3">
                <input
                  type="text"
                  id="pharmacy"
                  className="form-control"
                  
                  name="pharmacy"
                  value={this.state.pharmacy}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>

            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="diagnosis" className="col-1 col-form-label">
                Diagnosis
              </label>
              <div className="col-3">
                <input
                  type="text"
                  id="diagnosis"
                  className="form-control"
                  
                  name="diagnosis"
                  value={this.state.diagnosis}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="ultraSound" className="col-1 col-form-label">
                Ultrasound
              </label>
              <div className="col-3">
                <input
                  type="text"
                  id="ultraSound"
                  className="form-control"
                  
                  name="ultraSound"
                  value={this.state.ultraSound}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="maternity" className="col-1 col-form-label">
                Maternity
              </label>
              <div className="col-3">
                <input
                  type="text"
                  id="maternity"
                  className="form-control"
                  
                  name="maternity"
                  value={this.state.maternity}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="sonography" className="col-1 col-form-label">
                Sonography
              </label>
              <div className="col-3">
                <input
                  type="text"
                  id="sonography"
                  className="form-control"
                  
                  name="sonography"
                  value={this.state.sonography}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>
            <div className="form-group row my-3 justify-content-center">
              <label htmlFor="emergency" className="col-1 col-form-label">
                Emergency
              </label>
              <div className="col-3">
                <input
                  type="text"
                  id="emergency"
                  className="form-control"
                  
                  name="emergency"
                  value={this.state.emergency}
                  onChange={this.onChange}
                  required
                />
              </div>
            </div>

            <div className="form-group row justify-content-center">
              <div className="offset-11">
                <Button
                  className="btn btn-primary text-uppercase mt-3"
                  onClick={this.saveservices}
                >
                  ADD
                </Button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Addservices;
