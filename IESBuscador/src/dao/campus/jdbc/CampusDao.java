package dao.campus.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import dao.campus.ICampusDao;
import dao.program.jdbc.ProgramSql;
import dao.secuencia.ISecuenciaDao;
import dao.secuencia.jdbc.SecuenciaDao;
import dto.CampusDTO;
import dto.ProgramsFilterDTO;
import util.PersistUtil;

public class CampusDao implements ICampusDao {

	private void setInfoCampus (ResultSet result, CampusDTO campus) throws Exception {
		campus.setId(result.getInt("cam_id"));
		campus.setLocation(result.getString("cam_location"));
		campus.setLatitude(result.getDouble("cam_lat"));
		campus.setLongitude(result.getDouble("cam_lon"));
		campus.setName(result.getString("cam_name"));
		campus.setCity(result.getString("cam_city"));
		campus.setPhone(result.getString("cam_phone"));
		campus.setEmail(result.getString("cam_email"));
		campus.setId_ies(result.getInt("ies_id"));
	}
	
	@Override
	public List<CampusDTO> listAllCampus(Connection con) throws Exception {
		PreparedStatement instruction = null;
		ResultSet result = null;
		String query;
		CampusDTO campus;
		List<CampusDTO> campusList = new ArrayList<>();
		try {
			query = CampusSql.LIST_ALL_CAMPUS;
			instruction = con.prepareStatement(query);
			result = instruction.executeQuery();
			while (result.next()) {
				campus = new CampusDTO();
				setInfoCampus(result, campus);
				campusList.add(campus);
			}
		} catch (SQLException sql) {
			System.out.println(sql.toString());
			con.rollback();
			throw new Exception(sql.toString());
		} finally {
			PersistUtil.closeResources(instruction);
		}
		return campusList;
	}

	@Override
	public String addCampus(CampusDTO campus, Connection con) throws Exception {
		PreparedStatement instruction = null;
		String query;
		String message="";
		try {
			query = CampusSql.INSERT;
			instruction = con.prepareStatement(query);
			int index=1;
			ISecuenciaDao secuenciaDao = new SecuenciaDao();
        	int id = secuenciaDao.getConsecutive("campusSequence", con);
			campus.setId(id);
			instruction.setInt(index++, campus.getId());
			instruction.setString(index++, campus.getLocation());
			instruction.setDouble(index++, campus.getLatitude());
			instruction.setDouble(index++, campus.getLongitude());
			instruction.setString(index++, campus.getName());
			instruction.setString(index++, campus.getCity());
			instruction.setString(index++, campus.getPhone());
			instruction.setString(index++, campus.getEmail());
			instruction.setInt(index++, campus.getId_ies());
			instruction.executeUpdate();
        	message="OK";
		} catch (SQLException sql) {
			message="ERROR";
			System.out.println(sql.toString());
			con.rollback();
			throw new Exception(sql.toString());
		} finally {
			PersistUtil.closeResources(instruction);
		}
		return message;
	}

}
