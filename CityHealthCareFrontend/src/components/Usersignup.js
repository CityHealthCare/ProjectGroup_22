import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import UserServiceApi from "../service/UserServiceApi";

class Usersignup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      contact: "",
      address: "",
      gender: "",
      age: "",
      message: null,
    };
    this.signUp = this.signUp.bind(this);
  }
  validateName() {
    let name = document.getElementById("name").value;
    var regexname = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (regexname.test(name) === true) {
      document.getElementById("nameVr").innerHTML = "";
      return true;
    } else {
      document.getElementById("nameVr").innerHTML =
        "Name must be in alphabets.";
    }
  }
  validatePassword() {
    let password = document.getElementById("pwd").value;
    var regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;;

    if (regexPassword.test(password) === true) {
      document.getElementById("passwordVr").innerHTML = "";
      return true;
    } else {
      document.getElementById("passwordVr").innerHTML =
        "password must be alphanumeric and should contains at least a special character with length 5";
    }
  }

  validateEmail() {
    let email = document.getElementById("email").value;

    var regexEmail = /\S+@\S+\.\S+/;
    if (regexEmail.test(email) === true) {
      document.getElementById("emailVr").innerHTML = "";
      return true;
    } else {
      document.getElementById("emailVr").innerHTML =
        "email format should be 'abc@gmail.com'";
    }
  }

  removeWarnings() {
    document.getElementById("nameVr").innerHTML = "";
    document.getElementById("passwordVr").innerHTML = "";
    document.getElementById("emailVr").innerHTML = "";
    document.getElementById("contactVr").innerHTML = "";
  }

  validateMobileNumber() {
    let number = document.getElementById("contact").value;
    var regexMobile = /^\d{10}$/;
    if (regexMobile.test(number)) {
      document.getElementById("contactVr").innerHTML = "";
    } else {
      document.getElementById("contactVr").innerHTML =
        "Phone number must be 10 digits.";

      return false;
    }
  }

  signUp = (p) => 
  {
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.password === "" ||
      this.state.contact === "" ||
      this.state.address === "" ||
      this.state.gender === "" ||
      this.state.age === ""
    ) {
      Swal.fire({
        title: "All Fields are Mandatory",

        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    var regexname = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (regexname.test(this.state.name) === false) {
      Swal.fire({
        title: "Enter valid name.",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }

    var regexEmail = /\S+@\S+\.\S+/;
    if (regexEmail.test(this.state.email) === false) {
      Swal.fire({
        title: "Enter valid email",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    var regexPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (regexPassword.test(this.state.password) === false) {
      Swal.fire({
        title: "Enter valid password",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }
    var regexMobile = /^\(?([7-9]{1})\)?[-. ]?([0-9]{5})[-. ]?([0-9]{4})$/;
    if (regexMobile.test(this.state.contact) === false) {
      Swal.fire({
        title: "Enter valid contact",
        icon: "warning",
        confirmButtonText: "Ok",
      });
      return false;
    }

    p.preventDefault();
    let user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      contact: this.state.contact,
      address: this.state.address,
      gender: this.state.gender,
      age: this.state.age,
    };
    UserServiceApi.addUser(user)
      .then((res) => {
        console.log(res.data);
        this.setState({ message: "User added successfully." });
        console.log(this.state.message);
        Swal.fire({
          title: this.state.message,
          icon: "success",
          confirmButtonText: "Ok",
        });
        window.location = "/";
      })
      .catch((error) => {
        console.error("in err ", error.response.data);
        Swal.fire({
          title: this.state.message,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  onChange = (p) => this.setState({ [p.target.name]: p.target.value });

  render() {
    return (
      <>
        <div className="container-fluid signup row justify-content-center ">
          <div
            className="col-sm-8 overflow-hidden border border-primary rounded opacity-60"
            style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
          >
            <div className="row py-3">
              <div className="col-sm-8">
                <h3 className="text-dark offset-7">User Registration</h3>
              </div>
              <div className="col-sm-3">
                <Button
                  className="btn btn-me  offset-8" variant="outline-dark"
                  href="/"
                >
                  Back
                </Button>
              </div>
            </div>
            <form className="mb-5">
              <div className="form-group row my-3 justify-content-center">
                <label htmlFor="name" className="col-2 col-form-label">
                  Full Name
                </label>
                <div className="col-5">
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Full Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    onFocus={this.removeWarnings}
                    onBlur={this.validateName}
                    required
                  />
                  <span style={{ color: "red" }} id="nameVr"></span>
                </div>

            

               


              </div>
              <div className="form-group row my-3 justify-content-center">
                <label htmlFor="email" className="col-2 col-form-label">
                  Email
                </label>
                <div className="col-5">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="e.g. abc@xyz.com"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    required
                    onFocus={this.removeWarnings}
                    onBlur={this.validateEmail}
                  />
                  <span style={{ color: "red" }} id="emailVr"></span>
                </div>
              </div>
              <div className="form-group row my-3 justify-content-center">
                <label htmlFor="pwd" className="col-2 col-form-label">
                  Password
                </label>
                <div className="col-5">
                  <input
                    type="password"
                    id="pwd"
                    className="form-control"
                    placeholder="Enter Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    onBlur={this.validatePassword}
                    onFocus={this.removeWarnings}
                    required
                  />
                  <span style={{ color: "red" }} id="passwordVr"></span>
                </div>
              </div>
              <div className="form-group row my-3 justify-content-center">
                <label className="col-2 col-form-label">Gender</label>
                <div className="col-5 d-flex justify-content-between">
                  <div>
                    <input
                      type="radio"
                      id="gender"
                      name="gender"
                      value="MALE"
                      onChange={this.onChange}
                    />
                    Male
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="gender"
                      name="gender"
                      value="FEMALE"
                      onChange={this.onChange}
                    />
                    Female
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="gender"
                      name="gender"
                      value="OTHER"
                      onChange={this.onChange}
                    />
                    Other
                  </div>
                </div>
              </div>
              <div className="form-group row my-3 justify-content-center">
                <label htmlFor="contact" className="col-2 col-form-label">
                  Contact
                </label>
                <div className="col-5">
                  <select><option>+91</option></select>
                  <input
                    type="phone"
                    id="contact"
                    className="form-control"
                    placeholder="Enter your contact details"
                    name="contact"
                    value={this.state.contact}
                    onChange={this.onChange}
                    pattern="[0-9]{1}-[0-9]{5}-[0-9]{4}"
                    onBlur={this.validateMobileNumber}
                    onFocus={this.removeWarnings}
                    required
                  />
        
                  <span id="contactVr" style={{ color: "red" }}></span>
                </div>
              </div>

              <div className="form-group row mt-3 justify-content-center">
                <label htmlFor="age" className="col-2 col-form-label">
                  Age
                </label>
                <div className="col-5">
                  <input
                    type="number"
                    id="age"
                    className="form-control"
                    placeholder="Enter Age"
                    name="age"
                    value={this.state.age}
                    onChange={this.onChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group row mt-3 justify-content-center">
                <label htmlFor="address" className="col-2 col-form-label">
                  Address
                </label>
                <div className="col-5">
                  <input
                    type="text"
                    id="address"
                    className="form-control"
                    placeholder="Enter Address "
                    name="address"
                    value={this.state.address}
                    onChange={this.onChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group row mt-3 justify-content-center">
              <label htmlFor="address" className="col-2 col-form-label">
                 Accept Terms and Conditions
                 </label>
                 <div class="form-check justify-content-center col-5">
                   <input class="form-check-input col-5 justify-content-center mx-auto" type="checkbox" value="" id="check" required/>
                   
                 </div>
                 
                

              </div>

              <div className="form-group row justify-content-center">
                <div className="offset-9">
                  <Button
                    className="btn btn-me btn-primary text-uppercase mt-3"
                    onClick={this.signUp}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Usersignup;