package com.example.entity;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.boot.context.properties.bind.DefaultValue;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Appointment")
public class DoctorsAppointment implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String patientName;
	private String date;
	private String symptom;
	private String status;


	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "hospid")
	private Hospital hospital;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "doctorid")
	private Doctorinfo doctor;
	
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "userid")
	private User user;
	
	public DoctorsAppointment() {}

	public DoctorsAppointment(int id, String patientName, String date, String symptom, String status, Hospital hospital,
			Doctorinfo doctor, User user) {
		super();
		this.id = id;
		this.patientName = patientName;
		this.date = date;
		this.symptom = symptom;
		this.status = status;
		this.hospital = hospital;
		this.doctor = doctor;
		this.user = user;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPatientName() {
		return patientName;
	}

	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getSymptom() {
		return symptom;
	}

	public void setSymptom(String symptom) {
		this.symptom = symptom;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Hospital getHospital() {
		return hospital;
	}

	public void setHospital(Hospital hospital) {
		this.hospital = hospital;
	}

	public Doctorinfo getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctorinfo doctor) {
		this.doctor = doctor;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}


	
	

	
}
