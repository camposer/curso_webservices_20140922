package webservice;

import javax.jws.WebMethod;
import javax.jws.WebParam;
import javax.jws.WebResult;
import javax.jws.WebService;
import javax.xml.bind.annotation.XmlSeeAlso;
import javax.xml.ws.RequestWrapper;
import javax.xml.ws.ResponseWrapper;

/**
 * This class was generated by Apache CXF 3.0.0
 * 2014-09-25T09:59:03.809+02:00
 * Generated source version: 3.0.0
 * 
 */
@WebService(targetNamespace = "http://webservice/", name = "PersonaSoap")
@XmlSeeAlso({ObjectFactory.class})
public interface PersonaSoap {

    @WebResult(name = "return", targetNamespace = "")
    @RequestWrapper(localName = "obtenerPersona", targetNamespace = "http://webservice/", className = "webservice.ObtenerPersona")
    @WebMethod
    @ResponseWrapper(localName = "obtenerPersonaResponse", targetNamespace = "http://webservice/", className = "webservice.ObtenerPersonaResponse")
    public webservice.Persona obtenerPersona(
        @WebParam(name = "arg0", targetNamespace = "")
        java.lang.Integer arg0
    );

    @RequestWrapper(localName = "eliminarPersona", targetNamespace = "http://webservice/", className = "webservice.EliminarPersona")
    @WebMethod
    @ResponseWrapper(localName = "eliminarPersonaResponse", targetNamespace = "http://webservice/", className = "webservice.EliminarPersonaResponse")
    public void eliminarPersona(
        @WebParam(name = "arg0", targetNamespace = "")
        java.lang.Integer arg0
    );

    @RequestWrapper(localName = "agregarPersona", targetNamespace = "http://webservice/", className = "webservice.AgregarPersona")
    @WebMethod
    @ResponseWrapper(localName = "agregarPersonaResponse", targetNamespace = "http://webservice/", className = "webservice.AgregarPersonaResponse")
    public void agregarPersona(
        @WebParam(name = "arg0", targetNamespace = "")
        webservice.Persona arg0
    );

    @RequestWrapper(localName = "modificarPersona", targetNamespace = "http://webservice/", className = "webservice.ModificarPersona")
    @WebMethod
    @ResponseWrapper(localName = "modificarPersonaResponse", targetNamespace = "http://webservice/", className = "webservice.ModificarPersonaResponse")
    public void modificarPersona(
        @WebParam(name = "arg0", targetNamespace = "")
        webservice.Persona arg0
    );

    @WebResult(name = "return", targetNamespace = "")
    @RequestWrapper(localName = "obtenerPersonas", targetNamespace = "http://webservice/", className = "webservice.ObtenerPersonas")
    @WebMethod
    @ResponseWrapper(localName = "obtenerPersonasResponse", targetNamespace = "http://webservice/", className = "webservice.ObtenerPersonasResponse")
    public java.util.List<webservice.Persona> obtenerPersonas();
}
