class Alumno{
    constructor(rut, nombre, apellido){
        this.rut = rut;
        this.nombre = nombre;
        this.apellido = apellido;
    }

    getRut(){
        return this.rut;
    }

    getNombre(){
        return this.nombre;
    }

    getApellido(){
        return this.apellido;
    }

    toString(){
        return this.rut + ", " + this.nombre + " " + this.apellido + "<br>";
    }
}