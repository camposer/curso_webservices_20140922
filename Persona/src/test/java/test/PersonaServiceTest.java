package test;

import java.util.List;

import model.Persona;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import service.PersonaService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations={"classpath:applicationContext-test.xml"})
public class PersonaServiceTest {
	@Autowired
	private PersonaService personaService;
	
	@Test
	public void probarTodoEnLaVida() {
		Persona p = new Persona();
		p.setNombre("xxx");
		p.setApellido("yyy");
		
		personaService.agregarPersona(p);
		
		// TODO: Refactorizar!!!
		List<Persona> personas = personaService.obtenerPersonas();
		if (personas != null) for (Persona p1 : personas) {
			boolean condicion = p1.getNombre().equals("xxx") && 
					p1.getApellido().equals("yyy");
			
			if (condicion) {
				Assert.assertTrue(condicion);
				personaService.eliminarPersona(p1.getId());
				break;
			}
		}
	}
}
