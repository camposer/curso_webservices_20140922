DROP TABLE persona;
CREATE TABLE persona(
	id INTEGER NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1),
	nombre VARCHAR(50) NOT NULL,
	apellido VARCHAR(50) NOT NULL,
	PRIMARY KEY (id)
)

INSERT INTO persona(nombre, apellido) values('Juan', 'Pérez');
INSERT INTO persona(nombre, apellido) values('María', 'García');
