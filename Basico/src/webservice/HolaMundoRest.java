package webservice;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import to.Respuesta;

@Produces("application/json")
//@Consumes("application/json")
public interface HolaMundoRest {
	/**
	 * GET http://localhost:8090/Basico/service/holamundo/Juan
	 * Hola Juan 
	 */
	@GET
	@Path("/holamundo/{nombre}")
	public Respuesta saludar(@PathParam("nombre") String nombre);
}
