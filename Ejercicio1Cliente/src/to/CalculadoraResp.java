package to;

import enumeration.CalculadoraOp;

public class CalculadoraResp {
	private float resultado;
	private CalculadoraOp operacion;
	private float op1;
	private float op2;

	public CalculadoraResp(float resultado, CalculadoraOp operacion, float op1,
			float op2) {
		super();
		this.resultado = resultado;
		this.operacion = operacion;
		this.op1 = op1;
		this.op2 = op2;
	}
	
	public CalculadoraResp() {
	}

	public float getResultado() {
		return resultado;
	}

	public void setResultado(float resultado) {
		this.resultado = resultado;
	}

	public CalculadoraOp getOperacion() {
		return operacion;
	}

	public void setOperacion(CalculadoraOp operacion) {
		this.operacion = operacion;
	}

	public float getOp1() {
		return op1;
	}

	public void setOp1(float op1) {
		this.op1 = op1;
	}

	public float getOp2() {
		return op2;
	}

	public void setOp2(float op2) {
		this.op2 = op2;
	}	
}
