package rest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import bussiness.campus.ICampusBussiness;
import bussiness.campus.impl.CampusBussiness;
import dto.CampusDTO;
import dto.ProgramDTO;

@Path("/campusService")
public class CampusService {
	
	private ICampusBussiness campusbussines;
	public CampusService(){
		campusbussines = new CampusBussiness();
	}	
	
	@GET
	@Path("/listAllCampus")
	//@Produces(MediaType.TEXT_PLAIN)
	@Produces(MediaType.APPLICATION_JSON)
	public List<CampusDTO> listAllCampus(){
		//return "hola";
		return campusbussines.listAllCampus();	
	}
	
	@PUT
	@Path("/addCampus")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)
	public String addCampus(CampusDTO campus){
		return campusbussines.addCampus(campus);
	}
}
