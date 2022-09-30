package com.example.entity;

import java.util.List;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.CascadeType;
import javax.persistence.Entity;

import org.hibernate.annotations.ManyToAny;
import org.springframework.beans.factory.annotation.Value;



@Entity
@Table(name="HospitalServices")
public class HospitalServices {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int ID;
	
	@Value("NO")
	String iCU;
	
	@Value("NO")
	String cTScan;
	
	@Value("NO")
	String xRAY;
	
	@Value("NO")
	String mRI;
	
	@Value("NO")
	String bloodTest;
	
	@Value("NO")
	String urinTest;
	
	@Value("NO")
	String sergery;
	
	@Value("NO")
	String pharmacy;
	
	@Value("NO")
	String diagnosis;
	
	@Value("NO")
	String ultraSound;
	
	@Value("NO")
	String maternity;
	
	@Value("NO")
	String sonography;
	
	@Value("NO")
	String emergency;
	
	int hospid;

	public HospitalServices() {
		super();
	}


	public HospitalServices(int iD, String iCU, String cTScan, String xRAY, String mRI, String bloodTest,
			String urinTest, String sergery, String pharmacy, String diagnosis, String ultraSound, String maternity,
			String sonography, String emergency, int hospid) {
		super();
		ID = iD;
		this.iCU = iCU;
		this.cTScan = cTScan;
		this.xRAY = xRAY;
		this.mRI = mRI;
		this.bloodTest = bloodTest;
		this.urinTest = urinTest;
		this.sergery = sergery;
		this.pharmacy = pharmacy;
		this.diagnosis = diagnosis;
		this.ultraSound = ultraSound;
		this.maternity = maternity;
		this.sonography = sonography;
		this.emergency = emergency;
		this.hospid = hospid;
	}





	public int getID() {
		return ID;
	}

	public void setID(int iD) {
		ID = iD;
	}

	public String getiCU() {
		return iCU;
	}

	public void setiCU(String iCU) {
		this.iCU = iCU;
	}

	public String getcTScan() {
		return cTScan;
	}

	public void setcTScan(String cTScan) {
		this.cTScan = cTScan;
	}

	public String getxRAY() {
		return xRAY;
	}

	public void setxRAY(String xRAY) {
		this.xRAY = xRAY;
	}

	public String getmRI() {
		return mRI;
	}

	public void setmRI(String mRI) {
		this.mRI = mRI;
	}

	public String getBloodTest() {
		return bloodTest;
	}

	public void setBloodTest(String bloodTest) {
		this.bloodTest = bloodTest;
	}

	public String getUrinTest() {
		return urinTest;
	}

	public void setUrinTest(String urinTest) {
		this.urinTest = urinTest;
	}

	public String getSergery() {
		return sergery;
	}

	public void setSergery(String sergery) {
		this.sergery = sergery;
	}

	public String getPharmacy() {
		return pharmacy;
	}

	public void setPharmacy(String pharmacy) {
		this.pharmacy = pharmacy;
	}

	public String getDiagnosis() {
		return diagnosis;
	}

	public void setDiagnosis(String diagnosis) {
		this.diagnosis = diagnosis;
	}

	public String getUltraSound() {
		return ultraSound;
	}

	public void setUltraSound(String ultraSound) {
		this.ultraSound = ultraSound;
	}

	public String getMaternity() {
		return maternity;
	}

	public void setMaternity(String maternity) {
		this.maternity = maternity;
	}

	public String getSonography() {
		return sonography;
	}

	public void setSonography(String sonography) {
		this.sonography = sonography;
	}

	public String getEmergency() {
		return emergency;
	}

	public void setEmergency(String emergency) {
		this.emergency = emergency;
	}

	public int getHospid() {
		return hospid;
	}

	public void setHospid(int hospid) {
		this.hospid = hospid;
	}


}
