/**
 * 
 */
package dao.campus;

import java.sql.Connection;
import java.util.List;

import dto.CampusDTO;
import dto.ProgramsFilterDTO;

/**
 * @author mateo
 *
 */
public interface ICampusDao {
	
	public List<CampusDTO> listAllCampus(Connection con) throws Exception;
	public String addCampus(CampusDTO campus,Connection con)throws Exception;
}
