package pruebas;

import static org.junit.Assert.*;
import java.sql.Connection;
import javax.sql.DataSource;
import org.junit.Test;
import bussiness.ies.impl.IesBussiness;
import dao.ies.IIesDao;
import dao.ies.jdbc.IesDao;
import dto.IesDTO;
import util.PersistUtil;
import util.DataBaseConnection;

public class UniversityCRUDTest {

	private IIesDao iesdao;
	private IesDTO iesdto;
	private DataBaseConnection dbConnection;
	
	public UniversityCRUDTest(){
		iesdao=new IesDao();
		iesdto = new IesDTO();
		dbConnection = new DataBaseConnection();
	}
	
	@Test
	public void create() throws Exception {
		String message="";
		iesdto.setId(1);
		iesdto.setName("universidad de antioquia");
		iesdto.setSlogan("Que bien");
		iesdto.setEscudo("/img/udelavida.png");
		iesdto.setCaracter("privada");
		iesdto.setAccreditation(true);
		Connection con = dbConnection.getConeccion();
		message = iesdao.addUniversity(con, iesdto);
		assertEquals("OK", message);
	}
	
	
	
}
