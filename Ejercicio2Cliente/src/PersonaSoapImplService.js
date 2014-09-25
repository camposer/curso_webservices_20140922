//
// Definitions for schema: http://webservice/
//  http://localhost:8090/Persona/service/PersonaSoap?wsdl#types1
//
//
// Constructor for XML Schema item {http://webservice/}eliminarPersonaResponse
//
function webservice__eliminarPersonaResponse () {
    this.typeMarker = 'webservice__eliminarPersonaResponse';
}

//
// Serialize {http://webservice/}eliminarPersonaResponse
//
function webservice__eliminarPersonaResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

webservice__eliminarPersonaResponse.prototype.serialize = webservice__eliminarPersonaResponse_serialize;

function webservice__eliminarPersonaResponse_deserialize (cxfjsutils, element) {
    var newobject = new webservice__eliminarPersonaResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://webservice/}agregarPersonaResponse
//
function webservice__agregarPersonaResponse () {
    this.typeMarker = 'webservice__agregarPersonaResponse';
}

//
// Serialize {http://webservice/}agregarPersonaResponse
//
function webservice__agregarPersonaResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

webservice__agregarPersonaResponse.prototype.serialize = webservice__agregarPersonaResponse_serialize;

function webservice__agregarPersonaResponse_deserialize (cxfjsutils, element) {
    var newobject = new webservice__agregarPersonaResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://webservice/}obtenerPersonaResponse
//
function webservice__obtenerPersonaResponse () {
    this.typeMarker = 'webservice__obtenerPersonaResponse';
    this._return = null;
}

//
// accessor is webservice__obtenerPersonaResponse.prototype.getReturn
// element get for return
// - element type is {http://webservice/}persona
// - optional element
//
// element set for return
// setter function is is webservice__obtenerPersonaResponse.prototype.setReturn
//
function webservice__obtenerPersonaResponse_getReturn() { return this._return;}

webservice__obtenerPersonaResponse.prototype.getReturn = webservice__obtenerPersonaResponse_getReturn;

function webservice__obtenerPersonaResponse_setReturn(value) { this._return = value;}

webservice__obtenerPersonaResponse.prototype.setReturn = webservice__obtenerPersonaResponse_setReturn;
//
// Serialize {http://webservice/}obtenerPersonaResponse
//
function webservice__obtenerPersonaResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._return != null) {
      xml = xml + this._return.serialize(cxfjsutils, 'return', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

webservice__obtenerPersonaResponse.prototype.serialize = webservice__obtenerPersonaResponse_serialize;

function webservice__obtenerPersonaResponse_deserialize (cxfjsutils, element) {
    var newobject = new webservice__obtenerPersonaResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = webservice__persona_deserialize(cxfjsutils, curElement);
     }
     newobject.setReturn(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://webservice/}obtenerPersona
//
function webservice__obtenerPersona () {
    this.typeMarker = 'webservice__obtenerPersona';
    this._arg0 = null;
}

//
// accessor is webservice__obtenerPersona.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for arg0
// setter function is is webservice__obtenerPersona.prototype.setArg0
//
function webservice__obtenerPersona_getArg0() { return this._arg0;}

webservice__obtenerPersona.prototype.getArg0 = webservice__obtenerPersona_getArg0;

function webservice__obtenerPersona_setArg0(value) { this._arg0 = value;}

webservice__obtenerPersona.prototype.setArg0 = webservice__obtenerPersona_setArg0;
//
// Serialize {http://webservice/}obtenerPersona
//
function webservice__obtenerPersona_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._arg0 != null) {
      xml = xml + '<arg0>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg0);
      xml = xml + '</arg0>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

webservice__obtenerPersona.prototype.serialize = webservice__obtenerPersona_serialize;

function webservice__obtenerPersona_deserialize (cxfjsutils, element) {
    var newobject = new webservice__obtenerPersona();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://webservice/}obtenerPersonasResponse
//
function webservice__obtenerPersonasResponse () {
    this.typeMarker = 'webservice__obtenerPersonasResponse';
    this._return = [];
}

//
// accessor is webservice__obtenerPersonasResponse.prototype.getReturn
// element get for return
// - element type is {http://webservice/}persona
// - required element
// - array
//
// element set for return
// setter function is is webservice__obtenerPersonasResponse.prototype.setReturn
//
function webservice__obtenerPersonasResponse_getReturn() { return this._return;}

webservice__obtenerPersonasResponse.prototype.getReturn = webservice__obtenerPersonasResponse_getReturn;

function webservice__obtenerPersonasResponse_setReturn(value) { this._return = value;}

webservice__obtenerPersonasResponse.prototype.setReturn = webservice__obtenerPersonasResponse_setReturn;
//
// Serialize {http://webservice/}obtenerPersonasResponse
//
function webservice__obtenerPersonasResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._return != null) {
      for (var ax = 0;ax < this._return.length;ax ++) {
       if (this._return[ax] == null) {
        xml = xml + '<return/>';
       } else {
        xml = xml + this._return[ax].serialize(cxfjsutils, 'return', null);
       }
      }
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

webservice__obtenerPersonasResponse.prototype.serialize = webservice__obtenerPersonasResponse_serialize;

function webservice__obtenerPersonasResponse_deserialize (cxfjsutils, element) {
    var newobject = new webservice__obtenerPersonasResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing return');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return')) {
     item = [];
     do  {
      var arrayItem = null;
      var value = null;
      if (!cxfjsutils.isElementNil(curElement)) {
       arrayItem = webservice__persona_deserialize(cxfjsutils, curElement);
      }
      item.push(arrayItem);
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
       while(curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'return'));
     newobject.setReturn(item);
     var item = null;
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://webservice/}obtenerPersonas
//
function webservice__obtenerPersonas () {
    this.typeMarker = 'webservice__obtenerPersonas';
}

//
// Serialize {http://webservice/}obtenerPersonas
//
function webservice__obtenerPersonas_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

webservice__obtenerPersonas.prototype.serialize = webservice__obtenerPersonas_serialize;

function webservice__obtenerPersonas_deserialize (cxfjsutils, element) {
    var newobject = new webservice__obtenerPersonas();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Constructor for XML Schema item {http://webservice/}agregarPersona
//
function webservice__agregarPersona () {
    this.typeMarker = 'webservice__agregarPersona';
    this._arg0 = null;
}

//
// accessor is webservice__agregarPersona.prototype.getArg0
// element get for arg0
// - element type is {http://webservice/}persona
// - optional element
//
// element set for arg0
// setter function is is webservice__agregarPersona.prototype.setArg0
//
function webservice__agregarPersona_getArg0() { return this._arg0;}

webservice__agregarPersona.prototype.getArg0 = webservice__agregarPersona_getArg0;

function webservice__agregarPersona_setArg0(value) { this._arg0 = value;}

webservice__agregarPersona.prototype.setArg0 = webservice__agregarPersona_setArg0;
//
// Serialize {http://webservice/}agregarPersona
//
function webservice__agregarPersona_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

webservice__agregarPersona.prototype.serialize = webservice__agregarPersona_serialize;

function webservice__agregarPersona_deserialize (cxfjsutils, element) {
    var newobject = new webservice__agregarPersona();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = webservice__persona_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://webservice/}eliminarPersona
//
function webservice__eliminarPersona () {
    this.typeMarker = 'webservice__eliminarPersona';
    this._arg0 = null;
}

//
// accessor is webservice__eliminarPersona.prototype.getArg0
// element get for arg0
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for arg0
// setter function is is webservice__eliminarPersona.prototype.setArg0
//
function webservice__eliminarPersona_getArg0() { return this._arg0;}

webservice__eliminarPersona.prototype.getArg0 = webservice__eliminarPersona_getArg0;

function webservice__eliminarPersona_setArg0(value) { this._arg0 = value;}

webservice__eliminarPersona.prototype.setArg0 = webservice__eliminarPersona_setArg0;
//
// Serialize {http://webservice/}eliminarPersona
//
function webservice__eliminarPersona_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._arg0 != null) {
      xml = xml + '<arg0>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._arg0);
      xml = xml + '</arg0>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

webservice__eliminarPersona.prototype.serialize = webservice__eliminarPersona_serialize;

function webservice__eliminarPersona_deserialize (cxfjsutils, element) {
    var newobject = new webservice__eliminarPersona();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://webservice/}persona
//
function webservice__persona () {
    this.typeMarker = 'webservice__persona';
    this._apellido = null;
    this._avatar = null;
    this._id = null;
    this._nombre = null;
}

//
// accessor is webservice__persona.prototype.getApellido
// element get for apellido
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for apellido
// setter function is is webservice__persona.prototype.setApellido
//
function webservice__persona_getApellido() { return this._apellido;}

webservice__persona.prototype.getApellido = webservice__persona_getApellido;

function webservice__persona_setApellido(value) { this._apellido = value;}

webservice__persona.prototype.setApellido = webservice__persona_setApellido;
//
// accessor is webservice__persona.prototype.getAvatar
// element get for avatar
// - element type is {http://www.w3.org/2001/XMLSchema}base64Binary
// - optional element
//
// element set for avatar
// setter function is is webservice__persona.prototype.setAvatar
//
function webservice__persona_getAvatar() { return this._avatar;}

webservice__persona.prototype.getAvatar = webservice__persona_getAvatar;

function webservice__persona_setAvatar(value) { this._avatar = value;}

webservice__persona.prototype.setAvatar = webservice__persona_setAvatar;
//
// accessor is webservice__persona.prototype.getId
// element get for id
// - element type is {http://www.w3.org/2001/XMLSchema}int
// - optional element
//
// element set for id
// setter function is is webservice__persona.prototype.setId
//
function webservice__persona_getId() { return this._id;}

webservice__persona.prototype.getId = webservice__persona_getId;

function webservice__persona_setId(value) { this._id = value;}

webservice__persona.prototype.setId = webservice__persona_setId;
//
// accessor is webservice__persona.prototype.getNombre
// element get for nombre
// - element type is {http://www.w3.org/2001/XMLSchema}string
// - optional element
//
// element set for nombre
// setter function is is webservice__persona.prototype.setNombre
//
function webservice__persona_getNombre() { return this._nombre;}

webservice__persona.prototype.getNombre = webservice__persona_getNombre;

function webservice__persona_setNombre(value) { this._nombre = value;}

webservice__persona.prototype.setNombre = webservice__persona_setNombre;
//
// Serialize {http://webservice/}persona
//
function webservice__persona_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._apellido != null) {
      xml = xml + '<apellido>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._apellido);
      xml = xml + '</apellido>';
     }
    }
    // block for local variables
    {
     if (this._avatar != null) {
      xml = xml + '<avatar>';
      xml = xml + cxfjsutils.packageMtom(this._avatar);
      xml = xml + '</avatar>';
     }
    }
    // block for local variables
    {
     if (this._id != null) {
      xml = xml + '<id>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._id);
      xml = xml + '</id>';
     }
    }
    // block for local variables
    {
     if (this._nombre != null) {
      xml = xml + '<nombre>';
      xml = xml + cxfjsutils.escapeXmlEntities(this._nombre);
      xml = xml + '</nombre>';
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

webservice__persona.prototype.serialize = webservice__persona_serialize;

function webservice__persona_deserialize (cxfjsutils, element) {
    var newobject = new webservice__persona();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing apellido');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'apellido')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setApellido(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing avatar');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'avatar')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = cxfjsutils.deserializeBase64orMom(curElement);
     }
     newobject.setAvatar(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing id');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'id')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = parseInt(value);
     }
     newobject.setId(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing nombre');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'nombre')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      value = cxfjsutils.getNodeText(curElement);
      item = value;
     }
     newobject.setNombre(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://webservice/}modificarPersona
//
function webservice__modificarPersona () {
    this.typeMarker = 'webservice__modificarPersona';
    this._arg0 = null;
}

//
// accessor is webservice__modificarPersona.prototype.getArg0
// element get for arg0
// - element type is {http://webservice/}persona
// - optional element
//
// element set for arg0
// setter function is is webservice__modificarPersona.prototype.setArg0
//
function webservice__modificarPersona_getArg0() { return this._arg0;}

webservice__modificarPersona.prototype.getArg0 = webservice__modificarPersona_getArg0;

function webservice__modificarPersona_setArg0(value) { this._arg0 = value;}

webservice__modificarPersona.prototype.setArg0 = webservice__modificarPersona_setArg0;
//
// Serialize {http://webservice/}modificarPersona
//
function webservice__modificarPersona_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    // block for local variables
    {
     if (this._arg0 != null) {
      xml = xml + this._arg0.serialize(cxfjsutils, 'arg0', null);
     }
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

webservice__modificarPersona.prototype.serialize = webservice__modificarPersona_serialize;

function webservice__modificarPersona_deserialize (cxfjsutils, element) {
    var newobject = new webservice__modificarPersona();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    cxfjsutils.trace('curElement: ' + cxfjsutils.traceElementName(curElement));
    cxfjsutils.trace('processing arg0');
    if (curElement != null && cxfjsutils.isNodeNamedNS(curElement, '', 'arg0')) {
     var value = null;
     if (!cxfjsutils.isElementNil(curElement)) {
      item = webservice__persona_deserialize(cxfjsutils, curElement);
     }
     newobject.setArg0(item);
     var item = null;
     if (curElement != null) {
      curElement = cxfjsutils.getNextElementSibling(curElement);
     }
    }
    return newobject;
}

//
// Constructor for XML Schema item {http://webservice/}modificarPersonaResponse
//
function webservice__modificarPersonaResponse () {
    this.typeMarker = 'webservice__modificarPersonaResponse';
}

//
// Serialize {http://webservice/}modificarPersonaResponse
//
function webservice__modificarPersonaResponse_serialize(cxfjsutils, elementName, extraNamespaces) {
    var xml = '';
    if (elementName != null) {
     xml = xml + '<';
     xml = xml + elementName;
     if (extraNamespaces) {
      xml = xml + ' ' + extraNamespaces;
     }
     xml = xml + '>';
    }
    if (elementName != null) {
     xml = xml + '</';
     xml = xml + elementName;
     xml = xml + '>';
    }
    return xml;
}

webservice__modificarPersonaResponse.prototype.serialize = webservice__modificarPersonaResponse_serialize;

function webservice__modificarPersonaResponse_deserialize (cxfjsutils, element) {
    var newobject = new webservice__modificarPersonaResponse();
    cxfjsutils.trace('element: ' + cxfjsutils.traceElementName(element));
    var curElement = cxfjsutils.getFirstElementChild(element);
    var item;
    return newobject;
}

//
// Definitions for service: {http://webservice/}PersonaSoapImplService
//

// Javascript for {http://webservice/}PersonaSoap

function webservice__PersonaSoap () {
    this.jsutils = new CxfApacheOrgUtil();
    this.jsutils.interfaceObject = this;
    this.synchronous = false;
    this.url = null;
    this.client = null;
    this.response = null;
    this.globalElementSerializers = [];
    this.globalElementDeserializers = [];
    this.globalElementSerializers['{http://webservice/}eliminarPersonaResponse'] = webservice__eliminarPersonaResponse_serialize;
    this.globalElementDeserializers['{http://webservice/}eliminarPersonaResponse'] = webservice__eliminarPersonaResponse_deserialize;
    this.globalElementSerializers['{http://webservice/}agregarPersonaResponse'] = webservice__agregarPersonaResponse_serialize;
    this.globalElementDeserializers['{http://webservice/}agregarPersonaResponse'] = webservice__agregarPersonaResponse_deserialize;
    this.globalElementSerializers['{http://webservice/}obtenerPersonaResponse'] = webservice__obtenerPersonaResponse_serialize;
    this.globalElementDeserializers['{http://webservice/}obtenerPersonaResponse'] = webservice__obtenerPersonaResponse_deserialize;
    this.globalElementSerializers['{http://webservice/}obtenerPersona'] = webservice__obtenerPersona_serialize;
    this.globalElementDeserializers['{http://webservice/}obtenerPersona'] = webservice__obtenerPersona_deserialize;
    this.globalElementSerializers['{http://webservice/}obtenerPersonasResponse'] = webservice__obtenerPersonasResponse_serialize;
    this.globalElementDeserializers['{http://webservice/}obtenerPersonasResponse'] = webservice__obtenerPersonasResponse_deserialize;
    this.globalElementSerializers['{http://webservice/}obtenerPersonas'] = webservice__obtenerPersonas_serialize;
    this.globalElementDeserializers['{http://webservice/}obtenerPersonas'] = webservice__obtenerPersonas_deserialize;
    this.globalElementSerializers['{http://webservice/}eliminarPersona'] = webservice__eliminarPersona_serialize;
    this.globalElementDeserializers['{http://webservice/}eliminarPersona'] = webservice__eliminarPersona_deserialize;
    this.globalElementSerializers['{http://webservice/}agregarPersona'] = webservice__agregarPersona_serialize;
    this.globalElementDeserializers['{http://webservice/}agregarPersona'] = webservice__agregarPersona_deserialize;
    this.globalElementSerializers['{http://webservice/}modificarPersona'] = webservice__modificarPersona_serialize;
    this.globalElementDeserializers['{http://webservice/}modificarPersona'] = webservice__modificarPersona_deserialize;
    this.globalElementSerializers['{http://webservice/}modificarPersonaResponse'] = webservice__modificarPersonaResponse_serialize;
    this.globalElementDeserializers['{http://webservice/}modificarPersonaResponse'] = webservice__modificarPersonaResponse_deserialize;
    this.globalElementSerializers['{http://webservice/}eliminarPersonaResponse'] = webservice__eliminarPersonaResponse_serialize;
    this.globalElementDeserializers['{http://webservice/}eliminarPersonaResponse'] = webservice__eliminarPersonaResponse_deserialize;
    this.globalElementSerializers['{http://webservice/}agregarPersonaResponse'] = webservice__agregarPersonaResponse_serialize;
    this.globalElementDeserializers['{http://webservice/}agregarPersonaResponse'] = webservice__agregarPersonaResponse_deserialize;
    this.globalElementSerializers['{http://webservice/}obtenerPersonaResponse'] = webservice__obtenerPersonaResponse_serialize;
    this.globalElementDeserializers['{http://webservice/}obtenerPersonaResponse'] = webservice__obtenerPersonaResponse_deserialize;
    this.globalElementSerializers['{http://webservice/}obtenerPersona'] = webservice__obtenerPersona_serialize;
    this.globalElementDeserializers['{http://webservice/}obtenerPersona'] = webservice__obtenerPersona_deserialize;
    this.globalElementSerializers['{http://webservice/}obtenerPersonasResponse'] = webservice__obtenerPersonasResponse_serialize;
    this.globalElementDeserializers['{http://webservice/}obtenerPersonasResponse'] = webservice__obtenerPersonasResponse_deserialize;
    this.globalElementSerializers['{http://webservice/}obtenerPersonas'] = webservice__obtenerPersonas_serialize;
    this.globalElementDeserializers['{http://webservice/}obtenerPersonas'] = webservice__obtenerPersonas_deserialize;
    this.globalElementSerializers['{http://webservice/}agregarPersona'] = webservice__agregarPersona_serialize;
    this.globalElementDeserializers['{http://webservice/}agregarPersona'] = webservice__agregarPersona_deserialize;
    this.globalElementSerializers['{http://webservice/}eliminarPersona'] = webservice__eliminarPersona_serialize;
    this.globalElementDeserializers['{http://webservice/}eliminarPersona'] = webservice__eliminarPersona_deserialize;
    this.globalElementSerializers['{http://webservice/}persona'] = webservice__persona_serialize;
    this.globalElementDeserializers['{http://webservice/}persona'] = webservice__persona_deserialize;
    this.globalElementSerializers['{http://webservice/}modificarPersona'] = webservice__modificarPersona_serialize;
    this.globalElementDeserializers['{http://webservice/}modificarPersona'] = webservice__modificarPersona_deserialize;
    this.globalElementSerializers['{http://webservice/}modificarPersonaResponse'] = webservice__modificarPersonaResponse_serialize;
    this.globalElementDeserializers['{http://webservice/}modificarPersonaResponse'] = webservice__modificarPersonaResponse_deserialize;
}

function webservice__obtenerPersona_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling webservice__obtenerPersonaResponse_deserializeResponse');
     responseObject = webservice__obtenerPersonaResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

webservice__PersonaSoap.prototype.obtenerPersona_onsuccess = webservice__obtenerPersona_op_onsuccess;

function webservice__obtenerPersona_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

webservice__PersonaSoap.prototype.obtenerPersona_onerror = webservice__obtenerPersona_op_onerror;

//
// Operation {http://webservice/}obtenerPersona
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}int//
function webservice__obtenerPersona_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.obtenerPersona_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.obtenerPersona_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.obtenerPersona_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

webservice__PersonaSoap.prototype.obtenerPersona = webservice__obtenerPersona_op;

function webservice__obtenerPersona_serializeInput(cxfjsutils, args) {
    var wrapperObj = new webservice__obtenerPersona();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://webservice/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:obtenerPersona', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

webservice__PersonaSoap.prototype.obtenerPersona_serializeInput = webservice__obtenerPersona_serializeInput;

function webservice__obtenerPersonaResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = webservice__obtenerPersonaResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function webservice__eliminarPersona_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling webservice__eliminarPersonaResponse_deserializeResponse');
     responseObject = webservice__eliminarPersonaResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

webservice__PersonaSoap.prototype.eliminarPersona_onsuccess = webservice__eliminarPersona_op_onsuccess;

function webservice__eliminarPersona_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

webservice__PersonaSoap.prototype.eliminarPersona_onerror = webservice__eliminarPersona_op_onerror;

//
// Operation {http://webservice/}eliminarPersona
// Wrapped operation.
// parameter arg0
// - simple type {http://www.w3.org/2001/XMLSchema}int//
function webservice__eliminarPersona_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.eliminarPersona_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.eliminarPersona_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.eliminarPersona_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

webservice__PersonaSoap.prototype.eliminarPersona = webservice__eliminarPersona_op;

function webservice__eliminarPersona_serializeInput(cxfjsutils, args) {
    var wrapperObj = new webservice__eliminarPersona();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://webservice/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:eliminarPersona', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

webservice__PersonaSoap.prototype.eliminarPersona_serializeInput = webservice__eliminarPersona_serializeInput;

function webservice__eliminarPersonaResponse_deserializeResponse(cxfjsutils, partElement) {
}
function webservice__agregarPersona_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling webservice__agregarPersonaResponse_deserializeResponse');
     responseObject = webservice__agregarPersonaResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

webservice__PersonaSoap.prototype.agregarPersona_onsuccess = webservice__agregarPersona_op_onsuccess;

function webservice__agregarPersona_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

webservice__PersonaSoap.prototype.agregarPersona_onerror = webservice__agregarPersona_op_onerror;

//
// Operation {http://webservice/}agregarPersona
// Wrapped operation.
// parameter arg0
// - Object constructor is webservice__persona
//
function webservice__agregarPersona_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.agregarPersona_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.agregarPersona_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.agregarPersona_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

webservice__PersonaSoap.prototype.agregarPersona = webservice__agregarPersona_op;

function webservice__agregarPersona_serializeInput(cxfjsutils, args) {
    var wrapperObj = new webservice__agregarPersona();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://webservice/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:agregarPersona', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

webservice__PersonaSoap.prototype.agregarPersona_serializeInput = webservice__agregarPersona_serializeInput;

function webservice__agregarPersonaResponse_deserializeResponse(cxfjsutils, partElement) {
}
function webservice__modificarPersona_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling webservice__modificarPersonaResponse_deserializeResponse');
     responseObject = webservice__modificarPersonaResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

webservice__PersonaSoap.prototype.modificarPersona_onsuccess = webservice__modificarPersona_op_onsuccess;

function webservice__modificarPersona_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

webservice__PersonaSoap.prototype.modificarPersona_onerror = webservice__modificarPersona_op_onerror;

//
// Operation {http://webservice/}modificarPersona
// Wrapped operation.
// parameter arg0
// - Object constructor is webservice__persona
//
function webservice__modificarPersona_op(successCallback, errorCallback, arg0) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(1);
    args[0] = arg0;
    xml = this.modificarPersona_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.modificarPersona_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.modificarPersona_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

webservice__PersonaSoap.prototype.modificarPersona = webservice__modificarPersona_op;

function webservice__modificarPersona_serializeInput(cxfjsutils, args) {
    var wrapperObj = new webservice__modificarPersona();
    wrapperObj.setArg0(args[0]);
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://webservice/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:modificarPersona', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

webservice__PersonaSoap.prototype.modificarPersona_serializeInput = webservice__modificarPersona_serializeInput;

function webservice__modificarPersonaResponse_deserializeResponse(cxfjsutils, partElement) {
}
function webservice__obtenerPersonas_op_onsuccess(client, responseXml) {
    if (client.user_onsuccess) {
     var responseObject = null;
     var element = responseXml.documentElement;
     this.jsutils.trace('responseXml: ' + this.jsutils.traceElementName(element));
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('first element child: ' + this.jsutils.traceElementName(element));
     while (!this.jsutils.isNodeNamedNS(element, 'http://schemas.xmlsoap.org/soap/envelope/', 'Body')) {
      element = this.jsutils.getNextElementSibling(element);
      if (element == null) {
       throw 'No env:Body in message.'
      }
     }
     element = this.jsutils.getFirstElementChild(element);
     this.jsutils.trace('part element: ' + this.jsutils.traceElementName(element));
     this.jsutils.trace('calling webservice__obtenerPersonasResponse_deserializeResponse');
     responseObject = webservice__obtenerPersonasResponse_deserializeResponse(this.jsutils, element);
     client.user_onsuccess(responseObject);
    }
}

webservice__PersonaSoap.prototype.obtenerPersonas_onsuccess = webservice__obtenerPersonas_op_onsuccess;

function webservice__obtenerPersonas_op_onerror(client) {
    if (client.user_onerror) {
     var httpStatus;
     var httpStatusText;
     try {
      httpStatus = client.req.status;
      httpStatusText = client.req.statusText;
     } catch(e) {
      httpStatus = -1;
      httpStatusText = 'Error opening connection to server';
     }
     client.user_onerror(httpStatus, httpStatusText);
    }
}

webservice__PersonaSoap.prototype.obtenerPersonas_onerror = webservice__obtenerPersonas_op_onerror;

//
// Operation {http://webservice/}obtenerPersonas
// Wrapped operation.
//
function webservice__obtenerPersonas_op(successCallback, errorCallback) {
    this.client = new CxfApacheOrgClient(this.jsutils);
    var xml = null;
    var args = new Array(0);
    xml = this.obtenerPersonas_serializeInput(this.jsutils, args);
    this.client.user_onsuccess = successCallback;
    this.client.user_onerror = errorCallback;
    var closureThis = this;
    this.client.onsuccess = function(client, responseXml) { closureThis.obtenerPersonas_onsuccess(client, responseXml); };
    this.client.onerror = function(client) { closureThis.obtenerPersonas_onerror(client); };
    var requestHeaders = [];
    requestHeaders['SOAPAction'] = '';
    this.jsutils.trace('synchronous = ' + this.synchronous);
    this.client.request(this.url, xml, null, this.synchronous, requestHeaders);
}

webservice__PersonaSoap.prototype.obtenerPersonas = webservice__obtenerPersonas_op;

function webservice__obtenerPersonas_serializeInput(cxfjsutils, args) {
    var wrapperObj = new webservice__obtenerPersonas();
    var xml;
    xml = cxfjsutils.beginSoap11Message("xmlns:jns0='http://webservice/' ");
    // block for local variables
    {
     xml = xml + wrapperObj.serialize(cxfjsutils, 'jns0:obtenerPersonas', null);
    }
    xml = xml + cxfjsutils.endSoap11Message();
    return xml;
}

webservice__PersonaSoap.prototype.obtenerPersonas_serializeInput = webservice__obtenerPersonas_serializeInput;

function webservice__obtenerPersonasResponse_deserializeResponse(cxfjsutils, partElement) {
    var returnObject = webservice__obtenerPersonasResponse_deserialize (cxfjsutils, partElement);

    return returnObject;
}
function webservice__PersonaSoap_webservice__PersonaSoapImplPort () {
  this.url = 'http://localhost:8090/Persona/service/PersonaSoap';
}
webservice__PersonaSoap_webservice__PersonaSoapImplPort.prototype = new webservice__PersonaSoap;
