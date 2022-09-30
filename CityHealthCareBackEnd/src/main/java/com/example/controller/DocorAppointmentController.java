package com.example.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.entity.Doctorinfo;
import com.example.entity.DoctorsAppointment;
import com.example.entity.HospitalServices;
import com.example.service.DoctorAppointmentIntf;
import com.example.service.DoctorinfoServiceInft;
import com.example.service.HospitalServiceIntf;

@RestController
@RequestMapping("/appoint")
public class DocorAppointmentController {

	@Autowired
	private HospitalServiceIntf hospitalService;
	@Autowired
	private DoctorinfoServiceInft doctorinfoService; 
	@Autowired
	private DoctorAppointmentIntf doctorAppointmentIntf;
	
	@GetMapping("/getappointment")
	private List<DoctorsAppointment> getdoc() {
		return doctorAppointmentIntf.allAppointment();
	}
	
	@GetMapping("/getappointmentbyid/{userid}")
	private DoctorsAppointment getdoc(@PathVariable int userid) {
		return doctorAppointmentIntf.getDoctorsAppointmentByID(userid);
	}
	
	@PostMapping("/addapoointment/{userid}/{hospid}/{doctorid}")
	private ResponseEntity<String> saveDoctorsAppointment(@RequestBody DoctorsAppointment saveDoctorsAppointment,@PathVariable int userid,@PathVariable int hospid,@PathVariable int doctorid) {
		
		System.out.println(userid);
		System.out.println(hospid);
		System.out.println(doctorid);
		System.out.println(saveDoctorsAppointment.getPatientName());
		doctorAppointmentIntf.savedoctorAppointment(saveDoctorsAppointment,userid,hospid,doctorid);
		return new ResponseEntity<String>(" Services Added Successfully in " + " this HospitalID", HttpStatus.OK);
	}
}
