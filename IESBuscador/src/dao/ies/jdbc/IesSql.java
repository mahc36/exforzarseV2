package dao.ies.jdbc;

public class IesSql {
	private static final String TABLE_NAME="ies";
	private static final String TABLE_NAME2="campus";
	public static final String GET_LIST_IES= "SELECT * FROM "+TABLE_NAME +" join " +TABLE_NAME2 +" on "+TABLE_NAME+".ies_id = "+TABLE_NAME2+".ies_id";
	public static final String GET_LIST_ALL_IES = "SELECT * FROM "+TABLE_NAME;
	public static final String GET_LIST_BY_FILTER="SELECT * from "+ TABLE_NAME +" where (select campus.ies_id from campus)=ies_id and (select campus.cam_city from campus)=? and ies_caracter=? and ies_accreditation=?";
	public static final String GET_LIST_BY_NAME = "SELECT * FROM "+ TABLE_NAME +" WHERE ies_name=?";
	public static final String GET_IES_INFO = "SELECT ies_id, ies_name, ies_slogan, ies_escudo FROM "+TABLE_NAME+" WHERE ies_id=?";
	public static final String INSERT_UNIVERSITY="Insert into "+TABLE_NAME+" (ies_id, ies_name, ies_slogan, ies_escudo, ies_caracter, ies_accreditation) VALUES (?, ?, ?, ?, ?, ?)";
	
	
	public IesSql(){
		super();
	}
}
