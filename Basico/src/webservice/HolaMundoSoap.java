package webservice;

import javax.jws.WebService;

@WebService
public interface HolaMundoSoap {
	public String saludar(String nombre);
}