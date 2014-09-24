package gui;

import java.util.List;
import java.util.Scanner;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import webservice.PersonaSoap;

public class PersonaGui {
	private PersonaSoap personaSoap;
	private Scanner scanner;
	
	@SuppressWarnings("resource")
	public PersonaGui() {
		// Cargando la clase que me permite leer de la consola
		this.scanner = new Scanner(System.in);
		
		// Cargando el contenedor de dependencias (Spring IoC)
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		
		// Pidiendo el cliente al contenedor 
		this.personaSoap = 
				ctx.getBean("personaSoapClient", PersonaSoap.class);
	}
	
	public void iniciar() {
		while (true) {
			System.out.println();
			System.out.println("1. Agregar");
			System.out.println("2. Obtener todos");
			System.out.println("3. Salir");
			System.out.print("? ");

			String opcion = scanner.nextLine();
			
			if (opcion.equals("3"))
				break;
			
			if (opcion.equals("1"))
				agregar();
			else if (opcion.equals("2"))
				obtenerTodos();
		}
		
	}
	
	private void obtenerTodos() {
		List<webservice.Persona> personas = 
				personaSoap.obtenerPersonas();
		
		for (webservice.Persona p : personas) {
			System.out.println("[ id = " + p.getId() + 
					", nombre = " + p.getNombre() + 
					", apellido = " + p.getApellido() + " ]");
		}
	}

	private void agregar() {
		System.out.print("Nombre? ");
		String nombre = scanner.nextLine();

		System.out.print("Apellido? ");
		String apellido = scanner.nextLine();
		
		webservice.Persona p = new webservice.Persona();
		p.setNombre(nombre);
		p.setApellido(apellido);
		
		personaSoap.agregarPersona(p);
	}

	public static void main(String[] args) {
		new PersonaGui().iniciar();
	}
}
