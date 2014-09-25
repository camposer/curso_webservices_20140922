package webservice;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import model.Persona;

@Produces("application/json")
@Consumes("application/json")
public interface PersonaRest {
	/**
	 * POST http://localhost:8090/Ejercicio1/service/personas
	 * Content-type: application/json
	 * { "nombre": "Juan", "apellido": "Márquez" } 
	 */
	@POST
	@Path("")
	public void agregarPersona(Persona p);
	
	/**
	 * PUT http://localhost:8090/Ejercicio1/service/personas/1
	 * Content-type: application/json
	 * { "nombre": "Juan", "apellido": "Márquez" } 
	 */
	@PUT
	@Path("/{id}")
	public void modificarPersona(Persona p, 
			@PathParam("id") Integer id);
	
	
	/**
	 * DELETE http://localhost:8090/Ejercicio1/service/personas/1
	 */
	@DELETE
	@Path("/{id}")
	public void eliminarPersona(@PathParam("id") Integer id);
	
	/**
	 * GET http://localhost:8090/Ejercicio1/service/personas
	 * Accept: application/json
	 */
	@GET
	@Path("")
	public List<Persona> obtenerPersonas();
	
	/**
	 * GET http://localhost:8090/Ejercicio1/service/personas/1
	 * Accept: application/json
	 */
	@GET
	@Path("/{id}")
	public Persona obtenerPersona(@PathParam("id") Integer id);
}
