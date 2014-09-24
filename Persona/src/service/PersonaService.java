package service;

import java.util.List;

import model.Persona;

public interface PersonaService {
	public void agregarPersona(Persona p);
	public void modificarPersona(Persona p);
	public void eliminarPersoan(Integer id);
	public List<Persona> obtenerPersonas();
	public Persona obtenerPersona(Integer id);
}
