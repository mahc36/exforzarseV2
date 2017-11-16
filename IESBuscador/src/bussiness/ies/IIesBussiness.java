package bussiness.ies;

import java.util.List;

import dto.Filter;
import dto.IesDTO;

public interface IIesBussiness {

	List<Filter> getIes();

	List<IesDTO> getIesbyFilter(Filter filter);

	List<IesDTO> findIES(String name);

	IesDTO getInfo(int iesid);
	
	String addUniversity(IesDTO ies);

}
