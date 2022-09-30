import axios from "axios";

const Appoint_API_BASE_URL = "http://localhost:8083/appoint";

class RequestServiceApi {
  addAppointment(userid, hospid,doctorid, request) {
    console.log(userid + " " + hospid+" " + doctorid);
    return axios.post(
      Appoint_API_BASE_URL + "/addapoointment/" + userid + "/" + hospid+ "/" + doctorid,
      request
    );
  }


}

export default new RequestServiceApi();
