package gui;

import java.util.List;
import java.util.Scanner;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import webservice.PersonaSoap;

public class PersonaGui {
	private static final int OP_AGREGAR = 0;
	private static final int OP_MODIFICAR = 1;
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
			System.out.println("2. Modificar");
			System.out.println("3. Eliminar");
			System.out.println("4. Obtener uno");
			System.out.println("5. Obtener todos");
			System.out.println("6. Salir");
			System.out.print("? ");

			String opcion = scanner.nextLine();
			
			if (opcion.equals("6"))
				break;
			
			if (opcion.equals("1"))
				guardar(OP_AGREGAR);
			else if (opcion.equals("2"))
				guardar(OP_MODIFICAR);
			else if (opcion.equals("3"))
				eliminar();
			else if (opcion.equals("4"))
				obtener();
			else if (opcion.equals("5"))
				obtenerTodos();
		}
		
	}
	
	private void guardar(int op) {
		int id = -1;
		
		if (op == OP_MODIFICAR) {
			System.out.print("Id? ");
			String sid = scanner.nextLine();
			id = Integer.parseInt(sid);
		}
		
		System.out.print("Nombre? ");
		String nombre = scanner.nextLine();

		System.out.print("Apellido? ");
		String apellido = scanner.nextLine();
		
		webservice.Persona p = new webservice.Persona();
		p.setNombre(nombre);
		p.setApellido(apellido);
		
		if (op == OP_MODIFICAR) {
			p.setId(id);
			
			personaSoap.modificarPersona(p);
		} else {
			personaSoap.agregarPersona(p);
			
		}
	}

	private void eliminar() {
		System.out.print("Id? ");
		String sid = scanner.nextLine();
		int id = Integer.parseInt(sid);
		
		personaSoap.eliminarPersona(id);
	}

	private void obtener() {
		System.out.print("Id? ");
		String sid = scanner.nextLine();
		int id = Integer.parseInt(sid);
		
		webservice.Persona p = 
				personaSoap.obtenerPersona(id);
		
		System.out.println("[ id = " + p.getId() + 
				", nombre = " + p.getNombre() + 
				", apellido = " + p.getApellido() + " ]");
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

	public static void main(String[] args) {
		new PersonaGui().iniciar();
	}
}
