package pruebas;

import static org.junit.Assert.assertEquals;

import java.sql.Connection;

import org.junit.Test;

import dao.campus.ICampusDao;
import dao.campus.jdbc.CampusDao;
import dao.program.IProgramDao;
import dao.program.jdbc.ProgramDao;
import dto.CampusDTO;
import dto.ProgramDTO;
import util.DataBaseConnection;

public class ProgramTest {

	private IProgramDao programdao;
	private ProgramDTO program;
	private DataBaseConnection dbConnection;
	
	public ProgramTest(){
		programdao = new ProgramDao();
		program = new ProgramDTO();
		dbConnection = new DataBaseConnection();
	}
	
	@Test
	public void create() throws Exception {
		String message="";
		program.setId(1);
		program.setProgram_name("Artes bellas");
		program.setAcademic_level("pregrado");
		program.setModality("presencial");
		program.setCredits(150);
		program.setCredit_cost(190000);
		program.setKnowledge_area("Artes");
		program.setId_campus(8+4);
		Connection con = dbConnection.getConeccion();
		message = programdao.addProgram(program, con);
		assertEquals("OK", message);
	}
	
	
	
	
}
