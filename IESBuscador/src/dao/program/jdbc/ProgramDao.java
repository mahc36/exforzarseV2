package dao.program.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import bussiness.person.IPersonBussiness;
import bussiness.person.impl.PersonBussiness;
import dao.person.jdbc.PersonSql;
import dao.program.IProgramDao;
import dao.secuencia.ISecuenciaDao;
import dao.secuencia.jdbc.SecuenciaDao;
import dto.IesDTO;
import dto.ProgramDTO;
import dto.ProgramsFilterDTO;
import util.PersistUtil;

public class ProgramDao implements IProgramDao {
	
	private void setInfoProgram(ResultSet result, ProgramsFilterDTO programsFilterDTO) throws Exception {
		programsFilterDTO.setIdProgram(result.getInt("pro_id"));
		programsFilterDTO.setProgramName(result.getString("pro_name"));
		programsFilterDTO.setAcademicLevel(result.getString("pro_academic_level"));
		programsFilterDTO.setModality(result.getString("pro_modality"));
		programsFilterDTO.setCredit(result.getInt("pro_credits"));
		programsFilterDTO.setCreditCost(result.getInt("pro_credit_cost"));
		programsFilterDTO.setKnowledgeArea(result.getString("pro_knowledge_area"));
		programsFilterDTO.setCampusName(result.getString("cam_name"));
		programsFilterDTO.setCampusCity(result.getString("cam_city"));
		programsFilterDTO.setCampusLocation(result.getString("cam_location"));
		programsFilterDTO.setIesName(result.getString("ies_name"));
		programsFilterDTO.setIesEscudo(result.getString("ies_escudo"));
		programsFilterDTO.setIesCaracter(result.getString("ies_caracter"));
		programsFilterDTO.setIesAccreditation(result.getBoolean("ies_accreditation"));
	}
	
	@Override
	public List<ProgramsFilterDTO> filter(Connection con) throws Exception {
		PreparedStatement instruction = null;
		ResultSet result = null;
		String query;
		ProgramsFilterDTO programsFilterDTO;
		List<ProgramsFilterDTO> programsList = new ArrayList<>();
		try {
			query = ProgramSql.FILTER;
			instruction = con.prepareStatement(query);
			result = instruction.executeQuery();
			while (result.next()) {
				programsFilterDTO = new ProgramsFilterDTO();
				setInfoProgram(result, programsFilterDTO);
				programsList.add(programsFilterDTO);
			}
		} catch (SQLException sql) {
			System.out.println(sql.toString());
			con.rollback();
			throw new Exception(sql.toString());
		} finally {
			PersistUtil.closeResources(instruction);
		}
		return programsList;
	}

	@Override
	public String addProgram(ProgramDTO program, Connection con) throws Exception {
		

		String message ="";
		String query;
        PreparedStatement instruction = null;
    	try {
        	query = ProgramSql.INSERT;
        	instruction = con.prepareStatement(query);
        	int index = 1;
        	ISecuenciaDao secuenciaDao = new SecuenciaDao();
        	int id = secuenciaDao.getConsecutive("programSequence", con);
        	program.setId(id);
        	instruction.setInt(index++, program.getId());
        	instruction.setString(index++, program.getProgram_name());
        	instruction.setString(index++, program.getAcademic_level());
        	instruction.setString(index++, program.getModality());
        	instruction.setInt(index++, program.getCredits());
        	instruction.setInt(index++, program.getCredit_cost());
        	instruction.setInt(index++, program.getId_campus());
        	instruction.setString(index++, program.getKnowledge_area());
        	System.out.println("Query: "+query.toString());
        	instruction.executeUpdate();
        	message="OK";
		} catch (Exception sql) {
			System.out.println(sql.getMessage());
			message ="ERROR";
        	con.rollback();
            throw new Exception(sql.toString());
		}
        finally {
            PersistUtil.closeResources(instruction);
         }
        return message;
	}

}