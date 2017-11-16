package bussiness.person;

import dto.PersonDTO;

public interface IPersonBussiness {
	
	public String addPerson(PersonDTO person); 
	public boolean checkEmail(String email);
	public PersonDTO findByEmail(String email);
	public String updatePerson(PersonDTO person);
}
