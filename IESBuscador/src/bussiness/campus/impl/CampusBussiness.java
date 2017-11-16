package bussiness.campus.impl;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import bussiness.campus.ICampusBussiness;
import dao.campus.ICampusDao;
import dao.campus.jdbc.CampusDao;
import dao.program.IProgramDao;
import dao.program.jdbc.ProgramDao;
import dto.CampusDTO;
import dto.ProgramsFilterDTO;
import util.PersistUtil;

public class CampusBussiness implements ICampusBussiness {

	private ICampusDao campusDAO;
	private DataSource dataSource;

	public CampusBussiness() {
		dataSource = PersistUtil.getDataSource();
		campusDAO = new CampusDao();
	}
	
	@Override
	public List<CampusDTO> listAllCampus() {
		Connection con = null;
		List<CampusDTO> campusList = new ArrayList<CampusDTO>();
		 try {
			 con = dataSource.getConnection();
			 campusList = campusDAO.listAllCampus(con);
		 } catch (Exception e) {
			 System.out.println(e.toString());
		 } finally {
			 PersistUtil.closeConnection(con);
		 }
		return campusList;
	}

	@Override
	public String addCampus(CampusDTO campus) {
		Connection con = null;
		String message="";
		 try {
			 con = dataSource.getConnection();
			 message = campusDAO.addCampus(campus,con);
		 } catch (Exception e) {
			 System.out.println(e.toString());
		 } finally {
			 PersistUtil.closeConnection(con);
		 }
		return message;
	}
}
