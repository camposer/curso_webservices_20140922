package webservice;

import java.util.List;

import javax.jws.WebService;

import model.Persona;

@WebService
public interface PersonaSoap {
	public void agregarPersona(Persona p);
	public void modificarPersona(Persona p);
	public void eliminarPersona(Integer id);
	public List<Persona> obtenerPersonas();
	public Persona obtenerPersona(Integer id);
}
