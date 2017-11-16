package bussiness.campus;

import java.util.List;

import dto.CampusDTO;

public interface ICampusBussiness {

	List<CampusDTO> listAllCampus();
	String addCampus(CampusDTO campus);
	
}
