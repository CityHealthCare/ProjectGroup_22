package com.example.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.entity.HospitalServices;




@Repository
public interface HospitalServicesRepository extends JpaRepository<HospitalServices, Integer> {

	@Query(nativeQuery=true,value="select * from hospital_services"+ " where hospid=:hospid")
	HospitalServices findByHospid(int hospid);
	
	@Query(value="select id from hospital_services order by id desc limit 1",nativeQuery=true)
	int findHospitalServicesIDByIdDesc();

	@Modifying
	@Query(nativeQuery=true,value="update hospital_services h set h.blood_test=:blood_test, h.ctscan=:ctscan, h.diagnosis=:diagnosis, h.icu=:icu,h.mri=:mri,h.maternity=:maternity,h.pharmacy=:pharmacy,h.sergery=:sergery,h.sonography=:sonography,h.ultra_sound=:ultra_sound,h.urin_test=:urin_test,h.xray=:xray where hospid=:hospid")
	void updateHospitalServices(String blood_test,String ctscan,String diagnosis,String icu,String mri,String maternity,String pharmacy,String sergery,String sonography,String ultra_sound,String urin_test,String xray,int hospid);
}
