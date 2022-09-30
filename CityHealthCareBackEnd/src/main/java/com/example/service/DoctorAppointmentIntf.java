package com.example.service;


import java.util.List;

import com.example.entity.Doctorinfo;
import com.example.entity.DoctorsAppointment;

public interface DoctorAppointmentIntf {

	void savedoctorAppointment(DoctorsAppointment saveDoctorsAppointment, int userid, int hospid, int doctorid);

	List<DoctorsAppointment> allAppointment();

	DoctorsAppointment getDoctorsAppointmentByID(int userid);

}
