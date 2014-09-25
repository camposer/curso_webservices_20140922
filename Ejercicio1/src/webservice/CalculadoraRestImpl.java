package webservice;

import org.springframework.beans.factory.annotation.Autowired;

import service.CalculadoraService;
import to.CalculadoraResp;
import enumeration.CalculadoraOp;

public class CalculadoraRestImpl implements CalculadoraRest {
	@Autowired
	private CalculadoraService calculadoraService;

	@Override
	public CalculadoraResp sumar(float a, float b) {
		return new CalculadoraResp(
				calculadoraService.sumar(a, b), 
				CalculadoraOp.SUMAR, 
				a, 
				b);
	}

	@Override
	public CalculadoraResp restar(float a, float b) {
		return new CalculadoraResp(
				calculadoraService.restar(a, b), 
				CalculadoraOp.RESTAR, 
				a, 
				b);
	}

	@Override
	public CalculadoraResp multiplicar(float a, float b) {
		return new CalculadoraResp(
				calculadoraService.multiplicar(a, b), 
				CalculadoraOp.MULTIPLICAR, 
				a, 
				b);
	}

	@Override
	public CalculadoraResp dividir(float a, float b) {
		return new CalculadoraResp(
				calculadoraService.dividir(a, b), 
				CalculadoraOp.DIVIDIR, 
				a, 
				b);
	}

}
