package dao.campus.jdbc;

public class CampusSql {
	private static final String TABLE_NAME = "campus";
	public static final String LIST_ALL_CAMPUS = "Select * from "+TABLE_NAME;
	public static final String INSERT="INSERT INTO "+TABLE_NAME+" (cam_id, cam_location, cam_lat, cam_lon, cam_name, cam_city, cam_phone, cam_email, ies_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
	
	public CampusSql() {
		super();
	}
}
