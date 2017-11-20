package pruebas;

import static org.junit.Assert.assertEquals;

import java.sql.Connection;

import org.junit.Test;

import dao.campus.ICampusDao;
import dao.campus.jdbc.CampusDao;
import dao.person.IPersonDao;
import dao.person.jdbc.PersonDao;
import dto.CampusDTO;
import dto.PersonDTO;
import util.DataBaseConnection;

public class CampusTest {

	private ICampusDao campusdao;
	private CampusDTO campus;
	private DataBaseConnection dbConnection;
	
	public CampusTest(){
		campusdao = new CampusDao();
		campus = new CampusDTO();
		dbConnection = new DataBaseConnection();
	}
	
	@Test
	public void create() throws Exception {
		String message="";
		campus.setCity("Rionegro");
		campus.setEmail("campo@gm.com");
		campus.setLocation("Rionegro");
		campus.setId(1);
		campus.setLatitude(1.36);
		campus.setLongitude(1.36);
		campus.setName("Campu de la vida");
		campus.setPhone("5555");
		campus.setId_ies(7);
		Connection con = dbConnection.getConeccion();
		message = campusdao.addCampus(campus, con);
		assertEquals("OK", message);
	}
	
}
