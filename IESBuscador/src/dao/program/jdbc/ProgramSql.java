package dao.program.jdbc;

public class ProgramSql {
	private static final String TABLE_NAME = "program";
	private static final String TABLE2_NAME = "campus";
	private static final String TABLE3_NAME = "ies";
	public static final String FILTER = "select * from ("
					+TABLE_NAME +" join "+ TABLE2_NAME +" on "+ TABLE_NAME +".cam_id = "+ TABLE2_NAME +".cam_id) as pc "
					+ " join "+ TABLE3_NAME +" on pc.ies_id = "+ TABLE3_NAME +".ies_id";
	
	public static final String INSERT = "INSERT INTO "+TABLE_NAME+" (pro_id, pro_name, pro_academic_level, pro_modality, pro_credits, pro_credit_cost, cam_id, pro_knowledge_area) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";	
	public ProgramSql(){
		super();
	}
}
