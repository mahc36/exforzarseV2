package pruebas;

import static org.junit.Assert.*;

import java.sql.Connection;

import org.junit.Test;

import dao.ies.IIesDao;
import dao.person.IPersonDao;
import dao.person.jdbc.PersonDao;
import dto.IesDTO;
import dto.PersonDTO;
import util.DataBaseConnection;

public class PersonTest {

	private IPersonDao persondao;
	private PersonDTO person;
	private DataBaseConnection dbConnection;
	
	public PersonTest(){
		persondao = new PersonDao();
		person = new PersonDTO();
		dbConnection = new DataBaseConnection();
	}
	
	@Test
	public void update() throws Exception {
		String message="";
		person.setId(1);
		person.setEmail("matteohenao356@gmail.com");
		person.setName("Andres");
		person.setPassword("123");
		Connection con = dbConnection.getConeccion();
		message = persondao.updatePerson(person, con);
		assertEquals("OK", message);
	}
}
