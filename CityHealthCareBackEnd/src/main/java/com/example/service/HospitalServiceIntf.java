package com.example.service;

import java.util.List;


import com.example.entity.Doctorinfo;
import com.example.entity.Hospital;
import com.example.entity.HospitalServices;

public interface HospitalServiceIntf {
	
	Hospital savehospital(Hospital hosp);
	
	Hospital getHospitalById(int hospital);
	
	List<Hospital> getAllHospital();
		
	void updateBed(Hospital hosp, int id);
	
	void updateBlood(Hospital hosp, int id); 
	
	void  updateOxygen(Hospital hosp, int id);
	
	Hospital getBedByHospitalname(String hosname);
	
	Hospital getBloodByHospitalname(String hosname);
	
	Hospital getOxygenByHospitalname(String hosname);
	
	Doctorinfo savedoctorinfo(Doctorinfo doctorinfo, int id);
	
	void saveHospitalServices(HospitalServices saveHospitalServices);

	HospitalServices getHospitalServicesByHospitalID(int gethid);

	void deleteHospital(int id);

	List<Hospital> getHospitalBylocality(String locaity);


	
	
}
