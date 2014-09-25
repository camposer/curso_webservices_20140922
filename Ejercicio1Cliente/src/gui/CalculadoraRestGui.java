package gui;

import java.util.Scanner;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import webservice.CalculadoraRest;

public class CalculadoraRestGui {
	private CalculadoraRest calculadoraRestClient;
	private Scanner scanner;
	
	@SuppressWarnings("resource")
	public CalculadoraRestGui() {
		// Cargando la clase que me permite leer de la consola
		this.scanner = new Scanner(System.in);
		
		// Cargando el contenedor de dependencias (Spring IoC)
		ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
		
		// Pidiendo el cliente al contenedor 
		this.calculadoraRestClient = 
				ctx.getBean("calculadoraRestClient", CalculadoraRest.class);
	}
	
	public void iniciar() {
		while (true) {
			System.out.println();
			System.out.println("1. Sumar");
			System.out.println("2. Restar");
			System.out.println("3. Multiplicar");
			System.out.println("4. Dividir");
			System.out.println("5. Salir");
			System.out.print("? ");

			String opcion = scanner.nextLine();
			
			if (opcion.equals("5"))
				break;
			
			System.out.print("a? ");
			String sa = scanner.nextLine();
			float a = Float.parseFloat(sa);
			
			System.out.println("b? ");
			String sb = scanner.nextLine();
			float b = Float.parseFloat(sb);
			
			if (opcion.equals("1"))
				System.out.println(a + " + " + b + " = " + 
						calculadoraRestClient.sumar(a, b).getResultado());
			else if (opcion.equals("2"))
				System.out.println(a + " - " + b + " = " + 
						calculadoraRestClient.restar(a, b).getResultado());
			else if (opcion.equals("3"))
				System.out.println(a + " * " + b + " = " + 
						calculadoraRestClient.multiplicar(a, b).getResultado());
			else if (opcion.equals("4"))
				System.out.println(a + " / " + b + " = " + 
						calculadoraRestClient.dividir(a, b).getResultado());

		}
		
	}
	
	public static void main(String[] args) {
		new CalculadoraRestGui().iniciar();
	}
}
