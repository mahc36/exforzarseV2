package util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.logging.Level;
import java.util.logging.Logger;

public class DataBaseConnection {

	//jdbc:postgresql://127.0.0.1:5432/postgres"
	Connection con;    
    String bd = "IESBuscador";
    String login = "postgres";
    String password = "root";
    String url = "jdbc:postgresql://127.0.0.1:5432/"+bd; 
    
    public DataBaseConnection(){    
        try{
        	Class.forName("org.postgresql.Driver");
            con = DriverManager.getConnection(url,login,password);
        }catch (ClassNotFoundException exc) {
            exc.printStackTrace();
        }catch (SQLException ex) {
             Logger.getLogger(DataBaseConnection.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public Connection getConeccion() {
        return this.con;
    }
    
    public void closeConnection() throws SQLException{
    	this.con.close();
    }
}
