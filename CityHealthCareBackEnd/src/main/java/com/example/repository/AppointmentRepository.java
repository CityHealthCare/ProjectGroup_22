package com.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.entity.Doctorinfo;
import com.example.entity.DoctorsAppointment;
import com.example.entity.Hospital;

@Repository
public interface AppointmentRepository extends JpaRepository<DoctorsAppointment, Integer>{

	@Query(nativeQuery = true, value="select * from appointment where userid=:userid")
	DoctorsAppointment findByUser(int userid);
	
	

}
