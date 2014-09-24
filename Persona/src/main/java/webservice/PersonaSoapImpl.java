package webservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import service.PersonaService;
import model.Persona;

public class PersonaSoapImpl implements PersonaSoap {
	@Autowired
	private PersonaService personaService;

	@Override
	public void agregarPersona(Persona p) {
		personaService.agregarPersona(p);
	}

	@Override
	public void modificarPersona(Persona p) {
		personaService.modificarPersona(p);
	}

	@Override
	public void eliminarPersona(Integer id) {
		personaService.eliminarPersona(id);
	}

	@Override
	public List<Persona> obtenerPersonas() {
		return personaService.obtenerPersonas();
	}

	@Override
	public Persona obtenerPersona(Integer id) {
		return personaService.obtenerPersona(id);
	}

}
