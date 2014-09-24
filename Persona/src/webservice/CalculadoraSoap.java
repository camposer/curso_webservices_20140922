package webservice;

import javax.jws.WebService;

@WebService
public interface CalculadoraSoap {
	public float sumar(float a, float b);
	public float restar(float a, float b);
	public float multiplicar(float a, float b);
	public float dividir(float a, float b);
}
