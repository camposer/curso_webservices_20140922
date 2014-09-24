package dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import model.Persona;

@Component // Le dice a Spring que cree una instancia de esta clase
public class PersonaDaoImpl implements PersonaDao {
	public static final String BD_URL = "jdbc:derby://localhost/personabd";
	public static final String BD_USUARIO = "user";
	public static final String BD_CLAVE = "123";
	
	static {
		try {
			Class.forName("org.apache.derby.jdbc.ClientDriver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	}
	
	@Override
	public void agregar(Persona p) {
		Connection con = null;
		try {
			con = DriverManager.getConnection(BD_URL, BD_USUARIO, BD_CLAVE);
			
			String sql = "INSERT INTO persona(nombre, apellido) "
					+ "VALUES(?, ?)";
			
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setString(1, p.getNombre());
			pstmt.setString(2, p.getApellido());
			pstmt.execute(); // INSERT
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				if (con != null)
					con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		
	}

	@Override
	public void modificar(Persona p) {
		Connection con = null;
		try {
			con = DriverManager.getConnection(BD_URL, BD_USUARIO, BD_CLAVE);
			
			String sql = "UPDATE persona SET "
					+ "nombre = ?, apellido = ? "
					+ "WHERE id = ?";
			
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setString(1, p.getNombre());
			pstmt.setString(2, p.getApellido());
			pstmt.setInt(3, p.getId());
			pstmt.execute(); // UPDATE
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				if (con != null)
					con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}

	@Override
	public void eliminar(Integer id) {
		Connection con = null;
		try {
			con = DriverManager.getConnection(BD_URL, BD_USUARIO, BD_CLAVE);
			
			String sql = "DELETE FROM persona WHERE id = ?";
			
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, id);
			pstmt.execute(); // DELETE
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				if (con != null)
					con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}

	@Override
	public List<Persona> obtenerTodos() {
		List<Persona> personas = null;
		Connection con = null;
		try {
			con = DriverManager.getConnection(BD_URL, BD_USUARIO, BD_CLAVE);
			
			String sql = "SELECT * FROM persona";
			
			PreparedStatement pstmt = con.prepareStatement(sql);
			
			ResultSet rs = pstmt.executeQuery();
			while (rs.next()) { 
				if (personas == null)
					personas = new ArrayList<Persona>();
				
				personas.add(obtenerPersona(rs));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				if (con != null)
					con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		
		return personas;
	}

	@Override
	public Persona obtener(Integer id) {
		Persona p = null;
		Connection con = null;
		try {
			con = DriverManager.getConnection(BD_URL, BD_USUARIO, BD_CLAVE);
			
			String sql = "SELECT * FROM persona WHERE id = ?";
			
			PreparedStatement pstmt = con.prepareStatement(sql);
			pstmt.setInt(1, id);
			
			ResultSet rs = pstmt.executeQuery();
			if (rs.next()) 
				p = obtenerPersona(rs);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				if (con != null)
					con.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
		
		return p;
	}

	private Persona obtenerPersona(ResultSet rs) throws SQLException {
		Persona p = new Persona();
		p.setId(rs.getInt("id"));
		p.setNombre(rs.getString("nombre"));
		p.setApellido(rs.getString("apellido"));
		
		return p;
	}

}
