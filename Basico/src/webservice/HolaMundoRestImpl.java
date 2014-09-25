package webservice;

import to.Respuesta;

public class HolaMundoRestImpl implements HolaMundoRest {

	@Override
	public Respuesta saludar(String nombre) {
		return new Respuesta("Hola " + nombre);
	}

}
