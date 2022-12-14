import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import AppointmentServiceApi from "../service/AppointmentServiceApi.js";

export default class BookingAppointmentStatus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requests: [],
      message: null,
    };

    this.reloadHospitalList = this.reloadHospitalList.bind(this);
  }

  componentDidMount() {
    this.reloadHospitalList();
  }

  reloadHospitalList() {
    let u = JSON.parse(sessionStorage.getItem("user"));
    console.log(u);
    AppointmentServiceApi.getAllAppointment().then((resp) => {
      console.log(resp.data);

      this.setState({
        
        requests: resp.data,
        message: "Request list rendered successfully",
      });
      console.log(resp.data);
      console.log(this.state.message);
    });
  }

  backtodash() {
    window.location = "/userdashboard";
  }

  render() {
    return (
      <>
        <div className="container my-4">
          <Button
            className="btn btn-secondary offset-10"
            onClick={this.backtodash}
            style={{ minWidth: "12vw" }}
          >
            Back to Dashboard
          </Button>
          <div>
            <h3>Request List</h3>
            <table className="table table-bordered">
              <thead className="bg-primary text-light">
                <tr>
                <th className="visually-hidden"></th>
                  <th>Patient Name</th>
                  <th>symptoms</th>
                  <th>Date</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                {this.state.requests.map((request) => (
                
                    <tr key={request.id}>
                      <td className="visually-hidden">{request.id}</td>
                    <td>{request.patientName}</td>
                    <td>{request.symptom}</td>
                    <td>{request.date}</td>
                    <td>{request.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
