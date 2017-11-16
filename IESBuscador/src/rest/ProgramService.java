package rest;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import bussiness.program.IProgramBussiness;
import bussiness.program.impl.ProgramBussiness;
import dto.ProgramDTO;
import dto.ProgramsFilterDTO;

@Path("/services")
public class ProgramService {
	private IProgramBussiness programBussiness;
	
	public ProgramService(){
		programBussiness = new ProgramBussiness();
	}
	
	@GET
	@Path("/filter")
	@Produces(MediaType.APPLICATION_JSON)
	public List<ProgramsFilterDTO> filter(){
		return programBussiness.filter();
	}
	
	
	@PUT
	@Path("/addProgram")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.TEXT_PLAIN)
	public String addProgram(ProgramDTO program){
		return programBussiness.addProgram(program);
	}
	
}
