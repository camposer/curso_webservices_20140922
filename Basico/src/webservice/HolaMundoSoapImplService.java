package webservice;

import java.net.MalformedURLException;
import java.net.URL;
import javax.xml.namespace.QName;
import javax.xml.ws.WebEndpoint;
import javax.xml.ws.WebServiceClient;
import javax.xml.ws.WebServiceFeature;
import javax.xml.ws.Service;

/**
 * This class was generated by Apache CXF 3.0.0
 * 2014-09-23T10:51:31.779+02:00
 * Generated source version: 3.0.0
 * 
 */
@WebServiceClient(name = "HolaMundoSoapImplService", 
                  wsdlLocation = "http://localhost:8090/Basico/service/HolaMundoSoap?wsdl",
                  targetNamespace = "http://webservice/") 
public class HolaMundoSoapImplService extends Service {

    public final static URL WSDL_LOCATION;

    public final static QName SERVICE = new QName("http://webservice/", "HolaMundoSoapImplService");
    public final static QName HolaMundoSoapImplPort = new QName("http://webservice/", "HolaMundoSoapImplPort");
    static {
        URL url = null;
        try {
            url = new URL("http://localhost:8090/Basico/service/HolaMundoSoap?wsdl");
        } catch (MalformedURLException e) {
            java.util.logging.Logger.getLogger(HolaMundoSoapImplService.class.getName())
                .log(java.util.logging.Level.INFO, 
                     "Can not initialize the default wsdl from {0}", "http://localhost:8090/Basico/service/HolaMundoSoap?wsdl");
        }
        WSDL_LOCATION = url;
    }

    public HolaMundoSoapImplService(URL wsdlLocation) {
        super(wsdlLocation, SERVICE);
    }

    public HolaMundoSoapImplService(URL wsdlLocation, QName serviceName) {
        super(wsdlLocation, serviceName);
    }

    public HolaMundoSoapImplService() {
        super(WSDL_LOCATION, SERVICE);
    }
    
    //This constructor requires JAX-WS API 2.2. You will need to endorse the 2.2
    //API jar or re-run wsdl2java with "-frontend jaxws21" to generate JAX-WS 2.1
    //compliant code instead.
    public HolaMundoSoapImplService(WebServiceFeature ... features) {
        super(WSDL_LOCATION, SERVICE, features);
    }

    //This constructor requires JAX-WS API 2.2. You will need to endorse the 2.2
    //API jar or re-run wsdl2java with "-frontend jaxws21" to generate JAX-WS 2.1
    //compliant code instead.
    public HolaMundoSoapImplService(URL wsdlLocation, WebServiceFeature ... features) {
        super(wsdlLocation, SERVICE, features);
    }

    //This constructor requires JAX-WS API 2.2. You will need to endorse the 2.2
    //API jar or re-run wsdl2java with "-frontend jaxws21" to generate JAX-WS 2.1
    //compliant code instead.
    public HolaMundoSoapImplService(URL wsdlLocation, QName serviceName, WebServiceFeature ... features) {
        super(wsdlLocation, serviceName, features);
    }    

    /**
     *
     * @return
     *     returns HolaMundoSoap
     */
    @WebEndpoint(name = "HolaMundoSoapImplPort")
    public HolaMundoSoap getHolaMundoSoapImplPort() {
        return super.getPort(HolaMundoSoapImplPort, HolaMundoSoap.class);
    }

    /**
     * 
     * @param features
     *     A list of {@link javax.xml.ws.WebServiceFeature} to configure on the proxy.  Supported features not in the <code>features</code> parameter will have their default values.
     * @return
     *     returns HolaMundoSoap
     */
    @WebEndpoint(name = "HolaMundoSoapImplPort")
    public HolaMundoSoap getHolaMundoSoapImplPort(WebServiceFeature... features) {
        return super.getPort(HolaMundoSoapImplPort, HolaMundoSoap.class, features);
    }

}
