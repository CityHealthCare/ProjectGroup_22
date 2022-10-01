
package com.example.entity;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "hospital")
public class Hospital implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int hospid;
	private String hospitalname;
	private String address;
	private String locality;
	private String email;
	private String password;
	private String contact;
	private String ambulancecontact;
	
	
	private int ventilator;
	private int oxygen;
	private int normal;
	
	private String a_pos;
	private String a_neg;
	private String b_pos;
	private String b_neg;
	private String ab_pos;
	private String ab_neg;
	private String o_pos;
	private String o_neg;
	
	private int oxygenavailable;
	
	
	@OneToMany(mappedBy = "hospital",fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	private List<Doctorinfo> doctorinfos;
	
	@OneToMany(mappedBy = "hospital")
	private List<Request>requests;
	
	
	public Hospital() {}

	

	



	public Hospital(int hospid, String hospitalname, String address, String locality, String email, String password,
			String contact, String ambulancecontact, int ventilator, int oxygen, int normal, String a_pos, String a_neg,
			String b_pos, String b_neg, String ab_pos, String ab_neg, String o_pos, String o_neg, int oxygenavailable,
			List<Doctorinfo> doctorinfos, List<Request> requests) {
		super();
		this.hospid = hospid;
		this.hospitalname = hospitalname;
		this.address = address;
		this.locality = locality;
		this.email = email;
		this.password = password;
		this.contact = contact;
		this.ambulancecontact = ambulancecontact;
		this.ventilator = ventilator;
		this.oxygen = oxygen;
		this.normal = normal;
		this.a_pos = a_pos;
		this.a_neg = a_neg;
		this.b_pos = b_pos;
		this.b_neg = b_neg;
		this.ab_pos = ab_pos;
		this.ab_neg = ab_neg;
		this.o_pos = o_pos;
		this.o_neg = o_neg;
		this.oxygenavailable = oxygenavailable;
		this.doctorinfos = doctorinfos;
		this.requests = requests;
	}







	public int getHospid() {
		return hospid;
	}







	public void setHospid(int hospid) {
		this.hospid = hospid;
	}







	public String getHospitalname() {
		return hospitalname;
	}







	public void setHospitalname(String hospitalname) {
		this.hospitalname = hospitalname;
	}







	public String getAddress() {
		return address;
	}







	public void setAddress(String address) {
		this.address = address;
	}







	public String getLocality() {
		return locality;
	}







	public void setLocality(String locality) {
		this.locality = locality;
	}







	public String getEmail() {
		return email;
	}







	public void setEmail(String email) {
		this.email = email;
	}







	public String getPassword() {
		return password;
	}







	public void setPassword(String password) {
		this.password = password;
	}







	public String getContact() {
		return contact;
	}







	public void setContact(String contact) {
		this.contact = contact;
	}







	public String getAmbulancecontact() {
		return ambulancecontact;
	}







	public void setAmbulancecontact(String ambulancecontact) {
		this.ambulancecontact = ambulancecontact;
	}







	public int getVentilator() {
		return ventilator;
	}







	public void setVentilator(int ventilator) {
		this.ventilator = ventilator;
	}







	public int getOxygen() {
		return oxygen;
	}







	public void setOxygen(int oxygen) {
		this.oxygen = oxygen;
	}







	public int getNormal() {
		return normal;
	}







	public void setNormal(int normal) {
		this.normal = normal;
	}







	public String getA_pos() {
		return a_pos;
	}







	public void setA_pos(String a_pos) {
		this.a_pos = a_pos;
	}







	public String getA_neg() {
		return a_neg;
	}







	public void setA_neg(String a_neg) {
		this.a_neg = a_neg;
	}







	public String getB_pos() {
		return b_pos;
	}







	public void setB_pos(String b_pos) {
		this.b_pos = b_pos;
	}







	public String getB_neg() {
		return b_neg;
	}







	public void setB_neg(String b_neg) {
		this.b_neg = b_neg;
	}







	public String getAb_pos() {
		return ab_pos;
	}







	public void setAb_pos(String ab_pos) {
		this.ab_pos = ab_pos;
	}







	public String getAb_neg() {
		return ab_neg;
	}







	public void setAb_neg(String ab_neg) {
		this.ab_neg = ab_neg;
	}







	public String getO_pos() {
		return o_pos;
	}







	public void setO_pos(String o_pos) {
		this.o_pos = o_pos;
	}







	public String getO_neg() {
		return o_neg;
	}







	public void setO_neg(String o_neg) {
		this.o_neg = o_neg;
	}







	public int getOxygenavailable() {
		return oxygenavailable;
	}







	public void setOxygenavailable(int oxygenavailable) {
		this.oxygenavailable = oxygenavailable;
	}







	public List<Doctorinfo> getDoctorinfos() {
		return doctorinfos;
	}







	public void setDoctorinfos(List<Doctorinfo> doctorinfos) {
		this.doctorinfos = doctorinfos;
	}







	public List<Request> getRequests() {
		return requests;
	}







	public void setRequests(List<Request> requests) {
		this.requests = requests;
	}







	public static long getSerialversionuid() {
		return serialVersionUID;
	}



	
	
}
