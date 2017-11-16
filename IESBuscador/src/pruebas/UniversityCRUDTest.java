package pruebas;

import static org.junit.Assert.*;

import java.sql.Connection;

import javax.sql.DataSource;

import org.junit.Test;

import com.sun.media.sound.SimpleSoundbank;

import bussiness.ies.impl.IesBussiness;
import dao.ies.IIesDao;
import dao.ies.jdbc.IesDao;
import dto.IesDTO;
import util.PersistUtil;

public class UniversityCRUDTest {

	private IIesDao iesdao;
	private IesDTO iesdto;
	private DataSource datasource;
	private IesBussiness iesBussiness;
	
	public UniversityCRUDTest(){
		datasource=PersistUtil.getDataSource();
		iesdao=new IesDao();
		iesdto = new IesDTO();
		iesBussiness = new IesBussiness();
	}
	
	@Test
	public void create() throws Exception {
		
		String message="";
		iesdto.setId(100);
		iesdto.setName("universidad de antioquia");
		iesdto.setSlogan("Que bien");
		iesdto.setEscudo("/img/udelavida.png");
		iesdto.setCaracter("privada");
		iesdto.setAccreditation(true);
		System.out.println("Escudo: "+iesdto.getEscudo());
		try {
			Connection con = datasource.getConnection();
			message = iesdao.addUniversity(con, iesdto);
		} catch (Exception e) {
			e.printStackTrace();
		}
		assertEquals("OK", message);
	}
}
