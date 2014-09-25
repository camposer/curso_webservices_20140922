package webservice;

import javax.jws.WebService;

import org.springframework.beans.factory.annotation.Autowired;

import service.CalculadoraService;

@WebService(endpointInterface="webservice.CalculadoraSoap")
public class CalculadoraSoapImpl implements CalculadoraSoap {
	@Autowired
	private CalculadoraService calculadoraService;

	@Override
	public float sumar(float a, float b) {
		return calculadoraService.sumar(a, b);
	}

	@Override
	public float restar(float a, float b) {
		return calculadoraService.restar(a, b);
	}

	@Override
	public float multiplicar(float a, float b) {
		return calculadoraService.multiplicar(a, b);
	}

	@Override
	public float dividir(float a, float b) {
		return calculadoraService.dividir(a, b);
	}

}
