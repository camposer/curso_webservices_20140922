package gui;

import java.util.Scanner;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import webservice.HolaMundoSoap;

public class HolaMundoGui {
	private HolaMundoSoap holaMundoSoapClient;
	private Scanner scanner;
	
	@SuppressWarnings("resource")
	public HolaMundoGui() {
		// Cargando la clase que me permite leer de la consola
		this.scanner = new Scanner(System.in);
		
		// Cargando el contenedor de dependencias (Spring IoC)
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		
		// Pidiendo el cliente al contenedor 
		this.holaMundoSoapClient = 
				ctx.getBean("holaMundoSoapClient", HolaMundoSoap.class);
	}
	
	public void iniciar() {
		// Pidiendo nombre por consola
		System.out.print("Nombre ? ");
		String nombre = scanner.nextLine();
		
		// Invocando al servicio
		String mensaje = holaMundoSoapClient.saludar(nombre);
		
		// Imprimiendo resultado de la llamada
		System.out.println(mensaje);
	}
	
	public static void main(String[] args) {
		new HolaMundoGui().iniciar();
	}
}
