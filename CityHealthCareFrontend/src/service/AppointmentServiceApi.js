import axios from "axios";

const Appoint_API_BASE_URL = "http://localhost:8083/appoint";

class AppointmentServiceApi {
  addAppointment(userid, hospid,doctorid, request) {
    console.log(userid + " " + hospid+" " + doctorid);
    return axios.post(
      Appoint_API_BASE_URL + "/addapoointment/" + userid + "/" + hospid+ "/" + doctorid,
      request
    );
  }

  getAllAppointment(){
    return axios.get(Appoint_API_BASE_URL+"/getappointment")
  }

  getAppointmentById(userid){
    return axios.get(Appoint_API_BASE_URL+"/getappointmentbyid"+"/"+userid)
  }


}

export default new AppointmentServiceApi();
