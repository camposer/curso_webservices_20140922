package webservice;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

import to.CalculadoraResp;

@Produces("application/json")
public interface CalculadoraRest {
	@GET
	@Path("/sumar/{a}/{b}")
	public CalculadoraResp sumar(
			@PathParam("a") float a, @PathParam("a") float b);


	@GET
	@Path("/restar/{a}/{b}")
	public CalculadoraResp restar(
			@PathParam("a") float a, @PathParam("a") float b);
	
	@GET
	@Path("/multiplicar/{a}/{b}")
	public CalculadoraResp multiplicar(
			@PathParam("a") float a, @PathParam("a") float b);
	
	@GET
	@Path("/dividir/{a}/{b}")
	public CalculadoraResp dividir(
			@PathParam("a") float a, @PathParam("a") float b);
	
}
