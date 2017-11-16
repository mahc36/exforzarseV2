package bussiness.program.impl;

import java.sql.Connection;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import bussiness.program.IProgramBussiness;
import dao.program.IProgramDao;
import dao.program.jdbc.ProgramDao;
import dto.ProgramDTO;
import dto.ProgramsFilterDTO;
import util.PersistUtil;

public class ProgramBussiness implements IProgramBussiness {

	private IProgramDao programDAO;
	private DataSource dataSource;

	public ProgramBussiness() {
		dataSource = PersistUtil.getDataSource();
		programDAO = new ProgramDao();
	}

	@Override
	public List<ProgramsFilterDTO> filter() {
		Connection con = null;
		List<ProgramsFilterDTO> programsList = new ArrayList<ProgramsFilterDTO>();

		 try {
			 con = dataSource.getConnection();
			 programsList = programDAO.filter(con);
		 } catch (Exception e) {
			 System.out.println(e.toString());
		 } finally {
			 PersistUtil.closeConnection(con);
		 }
		return programsList;
	}

	@Override
	public String addProgram(ProgramDTO program) {
		Connection con = null;
		String message="";
		 try {
			 con = dataSource.getConnection();
			 message = programDAO.addProgram(program, con);
		 } catch (Exception e) {
			 System.out.println(e.toString());
		 } finally {
			 PersistUtil.closeConnection(con);
		 }
		return message;
	}

}