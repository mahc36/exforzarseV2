package bussiness.program;

import java.util.List;

import dto.ProgramDTO;
import dto.ProgramsFilterDTO;

public interface IProgramBussiness {
	public List<ProgramsFilterDTO> filter();
	public String addProgram(ProgramDTO program);
	
}