package Juvvo;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.HashSet;
import java.util.Set;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class checkDiagnosisServlet
 */
@WebServlet("/checkDiagnosis")
public class checkDiagnosisServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.getSession().invalidate();
        String[] checkedBodyParts = request.getParameterValues("checkedBody");	
        StringBuilder strBuilder = new StringBuilder();
        for(int i = 0; i < checkedBodyParts.length; i++) {
        	strBuilder.append(checkedBodyParts[i]);
        }
        int primaryKey = Integer.parseInt(strBuilder.toString());
        
        String query = "%";
        String result = "";
        
        try{
			Class.forName("com.mysql.jdbc.Driver");
			System.out.println("Database driver loaded");
			Connection myConn = DriverManager.getConnection("jdbc:mysql://localhost:3306/juvvo?useSSL=false", "root", "manage" );
			Statement myStmt = myConn.createStatement();
			
			
			ResultSet myRs = myStmt.executeQuery("SELECT id, description FROM diagnosis");	
			
			while(myRs.next()){
				if(containsAllChars(strBuilder.toString(),myRs.getString("id"))) {
				result = result + myRs.getString("description") + "</br></br></br>";
				}
			}
			myStmt.close();
			if (result == null || result.isEmpty() ) { 
			    result = "No diagnosis available"; 
			} else{
			}
			
		}catch(Exception e){
			e.printStackTrace();
		}
   
        request.setAttribute("id", primaryKey); // Sets attribute variables to be sent back to the signout form
		request.setAttribute("diagnosis", result);

		request.getRequestDispatcher("/index2.jsp").forward(request, response);
   
		
	}
	public static Set<Character> stringToCharacterSet(String s) {
	    Set<Character> set = new HashSet<>();
	    for (char c : s.toCharArray()) {
	        set.add(c);
	    }
	    return set;
	}
	public static boolean containsAllChars(String container, String containee) {
    return stringToCharacterSet(container).containsAll
               (stringToCharacterSet(containee));
	}

	

}
