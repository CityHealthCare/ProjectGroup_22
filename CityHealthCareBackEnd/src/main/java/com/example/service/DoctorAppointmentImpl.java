package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.entity.Doctorinfo;
import com.example.entity.DoctorsAppointment;
import com.example.entity.Hospital;
import com.example.entity.User;
import com.example.repository.AppointmentRepository;
import com.example.repository.DoctorinfoRepository;
import com.example.repository.HospitalRepository;
import com.example.repository.UserRepository;

@Service
public class DoctorAppointmentImpl implements DoctorAppointmentIntf {

	@Autowired
	HospitalRepository hospitalRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Autowired
	DoctorinfoRepository doctorinfoRepository;
	
	@Autowired
	AppointmentRepository appointmentRepository;
	

	@Override
	public void savedoctorAppointment(DoctorsAppointment saveDoctorsAppointment, int userid, int hospid, int doctorid) {
		Optional<Hospital> h1=hospitalRepository.findById(hospid);
		Optional<User> u1=userRepository.findById(userid);
		Optional<Doctorinfo> d1=doctorinfoRepository.findById(doctorid);
		saveDoctorsAppointment.setHospital(h1.get());
		saveDoctorsAppointment.setDoctor(d1.get());
		saveDoctorsAppointment.setUser(u1.get());
		appointmentRepository.save(saveDoctorsAppointment);
	}


	@Override
	public List<DoctorsAppointment> allAppointment() {
		
		return appointmentRepository.findAll();
	}


	@Override
	public DoctorsAppointment getDoctorsAppointmentByID(int userid) {
	
		return appointmentRepository.findByUser(userid);
	}

	
	

	
	
}
