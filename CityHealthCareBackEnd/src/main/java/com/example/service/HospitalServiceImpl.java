package com.example.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.entity.Doctorinfo;
import com.example.entity.Hospital;
import com.example.entity.HospitalServices;
import com.example.repository.AdminRepository;
import com.example.repository.DoctorinfoRepository;
import com.example.repository.HospitalRepository;
import com.example.repository.HospitalServicesRepository;
import com.example.repository.UserRepository;

@Service
@Transactional
public class HospitalServiceImpl implements HospitalServiceIntf {

	@Autowired
	HospitalRepository hospitalRepository;
	@Autowired
	AdminRepository adminRepository;
	@Autowired
	UserRepository userRepository;
	@Autowired
	DoctorinfoRepository doctorinfoRepository;
	@Autowired
	PasswordEncoder passwordEncoder;

	@Autowired
	HospitalServicesRepository hospitalServicesRepository;

	public Hospital savehospital(Hospital hosp) {
		hosp.setPassword(passwordEncoder.encode(hosp.getPassword()));
		return hospitalRepository.save(hosp);
	}

	public List<Hospital> getAllHospital() {
		return hospitalRepository.findAll();
	}

	public Hospital getHospitalById(int id) {
		return hospitalRepository.findById(id).get();
	}

	public Doctorinfo savedoctorinfo(Doctorinfo d, int id) {
		Hospital hos = hospitalRepository.findById(id).get();

		Doctorinfo info = new Doctorinfo(d.getName(), d.getEmail(), d.getQualification(), d.getSpecialization(),
				d.getFees(), hos);

		return doctorinfoRepository.save(info);
	}

	public void updateBed(Hospital hosp, int id) {
		hospitalRepository.updatebed(id, hosp.getVentilator(), hosp.getOxygen(), hosp.getNormal());
	}

	public void updateBlood(Hospital h, int id) {
		System.out.println(h);
		hospitalRepository.updateblood(id, h.getA_pos(), h.getA_neg(), h.getB_pos(), h.getB_neg(), h.getAb_pos(),
				h.getAb_neg(), h.getO_pos(), h.getO_neg());
	}

	public void updateOxygen(Hospital hosp, int id) {
		hospitalRepository.updateoxygen(id, hosp.getOxygenavailable());
	}

	public Hospital getBedByHospitalname(String hosname) {
		return hospitalRepository.findByHospitalname(hosname);
	}

	public Hospital getBloodByHospitalname(String hosname) {
		return hospitalRepository.findByHospitalname(hosname);
	}

	public Hospital getOxygenByHospitalname(String hosname) {
		return hospitalRepository.findByHospitalname(hosname);
	}

	@Override
	public void saveHospitalServices(HospitalServices saveHospitalService) {
		try {
			HospitalServices h1 = hospitalServicesRepository.findByHospid(saveHospitalService.getHospid());
			HospitalServices hospitalServices = new HospitalServices();
			if (h1 == null) {
				if (saveHospitalService.getBloodTest() == "") {
					hospitalServices.setBloodTest("NO");
				} else {
					hospitalServices.setBloodTest(saveHospitalService.getBloodTest());

				}
				if (saveHospitalService.getcTScan() == "") {
					hospitalServices.setcTScan("NO");
				} else {
					hospitalServices.setcTScan(saveHospitalService.getcTScan());

				}
				if (saveHospitalService.getDiagnosis() == "") {
					hospitalServices.setDiagnosis("NO");
				} else {
					hospitalServices.setDiagnosis(saveHospitalService.getDiagnosis());

				}
				if (saveHospitalService.getEmergency() == "") {
					hospitalServices.setEmergency("NO");
				} else {
					hospitalServices.setEmergency(saveHospitalService.getEmergency());

				}
				if (saveHospitalService.getiCU() == "") {
					hospitalServices.setiCU("NO");
				} else {
					hospitalServices.setiCU(saveHospitalService.getiCU());

				}
				if (saveHospitalService.getMaternity() == "") {
					hospitalServices.setMaternity("NO");
				} else {
					hospitalServices.setMaternity(saveHospitalService.getMaternity());

				}
				if (saveHospitalService.getmRI() == "") {
					hospitalServices.setmRI("NO");
				} else {
					hospitalServices.setmRI(saveHospitalService.getmRI());

				}
				if (saveHospitalService.getPharmacy() == "") {
					hospitalServices.setPharmacy("NO");
				} else {
					hospitalServices.setPharmacy(saveHospitalService.getPharmacy());

				}
				if (saveHospitalService.getSergery() == "") {
					hospitalServices.setSergery("NO");
				} else {
					hospitalServices.setSergery(saveHospitalService.getSergery());

				}
				if (saveHospitalService.getSonography() == "") {
					hospitalServices.setSonography("NO");
				} else {
					hospitalServices.setSonography(saveHospitalService.getSonography());

				}
				if (saveHospitalService.getUltraSound() == "") {
					hospitalServices.setUltraSound("NO");
				} else {
					hospitalServices.setUltraSound(saveHospitalService.getUltraSound());

				}
				if (saveHospitalService.getxRAY() == "") {
					hospitalServices.setxRAY("NO");
				} else {
					hospitalServices.setxRAY(saveHospitalService.getxRAY());

				}
				if (saveHospitalService.getxRAY() == "") {
					hospitalServices.setxRAY("NO");
				} else {
					hospitalServices.setxRAY(saveHospitalService.getxRAY());

				}
				if (saveHospitalService.getUrinTest() == "") {
					hospitalServices.setUrinTest("NO");
				} else {
					hospitalServices.setUrinTest(saveHospitalService.getUrinTest());

				}

				if (saveHospitalService.getID() == 0) {
					hospitalServices.setID(saveHospitalService.getID());
				} else {
					hospitalServices.setID(h1.getID());

				}

				hospitalServices.setHospid(saveHospitalService.getHospid());
				hospitalServicesRepository.save(hospitalServices);
			} else {
				
				if (saveHospitalService.getBloodTest() == "") {
					saveHospitalService.setBloodTest("NO");
				}
				if (saveHospitalService.getcTScan() == "") {
					System.out.println("If CTSCAN RUN");
					saveHospitalService.setcTScan("NO");
				}
				if (saveHospitalService.getDiagnosis() == "") {
					saveHospitalService.setDiagnosis("NO");
				}
				if (saveHospitalService.getEmergency() == "") {
					saveHospitalService.setEmergency("NO");
				}
				if (saveHospitalService.getiCU() == "") {
					saveHospitalService.setiCU("NO");
				}
				if (saveHospitalService.getMaternity() == "") {
					saveHospitalService.setMaternity("NO");
				}
				if (saveHospitalService.getmRI() == "") {
					saveHospitalService.setmRI("NO");
				}
				if (saveHospitalService.getPharmacy() == "") {
					saveHospitalService.setPharmacy("NO");
				}
				if (saveHospitalService.getSergery() == "") {
					saveHospitalService.setSergery("NO");
				}
				if (saveHospitalService.getSonography() == "") {
					saveHospitalService.setSonography("NO");
				}
				if (saveHospitalService.getUltraSound() == "") {
					saveHospitalService.setUltraSound("NO");
				} 
				if (saveHospitalService.getxRAY() == "") {
					saveHospitalService.setxRAY("NO");
				} 
				if (saveHospitalService.getxRAY() == "") {
					saveHospitalService.setxRAY("NO");
				}
				if (saveHospitalService.getUrinTest() == "") {
					saveHospitalService.setUrinTest("NO");
				}
				if (saveHospitalService.getID() == 0) {
					saveHospitalService.setID(saveHospitalService.getID());
				}
				hospitalServices.setHospid(saveHospitalService.getHospid());
				hospitalServicesRepository.updateHospitalServices(saveHospitalService.getBloodTest(),
						saveHospitalService.getcTScan(), saveHospitalService.getDiagnosis(),
						saveHospitalService.getiCU(), saveHospitalService.getmRI(), saveHospitalService.getMaternity(),
						saveHospitalService.getPharmacy(), saveHospitalService.getSergery(),
						saveHospitalService.getSonography(), saveHospitalService.getUltraSound(),
						saveHospitalService.getUrinTest(), saveHospitalService.getxRAY(),
						saveHospitalService.getHospid());
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	@Override
	public HospitalServices getHospitalServicesByHospitalID(int gethid) {
		return hospitalServicesRepository.findByHospid(gethid);
	}

	/*
	 * @Override public Bed updateBed(Bed bed) { Bed b =
	 * bedRepository.findById(bed.getBedid()).get(); b.setNormal(bed.getNormal());
	 * b.setOxygen(bed.getOxygen()); b.setVentilator(bed.getVentilator()); return
	 * bedRepository.save(b); }
	 * 
	 * @Override public Blood updateBlood(Blood blood) { Blood bl =
	 * bloodRepository.findById(blood.getBloodid()).get();
	 * bl.setApos(blood.getApos()); bl.setAneg(blood.getAneg());
	 * bl.setBpos(blood.getBpos()); bl.setBneg(blood.getBneg());
	 * bl.setAbpos(blood.getAbpos()); bl.setAbneg(blood.getAbneg());
	 * bl.setOpos(blood.getOpos()); bl.setOneg(blood.getOneg()); return
	 * bloodRepository.save(bl); }
	 * 
	 * @Override public Oxygen updateOxygen(Oxygen oxygen) { Oxygen o =
	 * oxygenRepository.findById(oxygen.getOxygenid()).get();
	 * o.setOxygenavailable(oxygen.getOxygenavailable()); return
	 * oxygenRepository.save(o); }
	 */

}
