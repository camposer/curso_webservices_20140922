package model;

import javax.activation.DataHandler;
import javax.xml.bind.annotation.XmlMimeType;
import javax.xml.bind.annotation.XmlType;

@XmlType
public class Persona {
	private Integer id;
	private String nombre;
	private String apellido;
	@XmlMimeType("application/octet-scream")
	private DataHandler avatar;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getApellido() {
		return apellido;
	}
	public void setApellido(String apellido) {
		this.apellido = apellido;
	}
	public DataHandler getAvatar() {
		return avatar;
	}
	public void setAvatar(DataHandler avatar) {
		this.avatar = avatar;
	}
	
	@Override
	public String toString() {
		return "Persona [id=" + id + ", nombre=" + nombre + ", apellido="
				+ apellido + ", avatar=" + avatar + "]";
	}
}
