import Citas from "./classes/Citas.js";
import UI from "./classes/UI.js";

import {mascotaInput, propietarioInput, telefonoInput, fechaInput, horaInput, sintomasInput, formulario} from "./selectores.js";



//Instanciamos las clases de forma global
const ui = new UI();
const administrarCitas = new Citas();

let editando;

const citaObj = { //Creamos un obj que se llene de acuerdo con el usuario llenando los campos
    mascota: "",
    propietario: "",
    telefono: "",
    fecha: "",
    hora: "",
    sintomas: ""
}

//FUNciones
//Agrega datos al obj de citas
export function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
}

//Valida y agrega una nueva cita a la clase de citas
export function nuevaCita(e) {
    e.preventDefault();

    //Extraemos los datos de citaObj
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;
    if(mascota === "" || propietario === "" || telefono === "" || fecha === "" || hora === "" || sintomas === "") {
        ui.imprimirAlerta("Todos los campos son obligatorios", "error")
        return; //El return para que no se ejecute la siguiente línea
    }
    
    if(editando){
        console.log("editando");
        ui.imprimirAlerta("Editado correctamente")
        //Pasar el objeto de la cita a edición
        administrarCitas.editarCita({...citaObj});
        //El botón vuelve a su valor original
        document.querySelector('button[type="submit"]').textContent = "Crear cita";
        //Quitar modo edición
        editando = false;
    } else { 
        //Generar un id único
        citaObj.id = Date.now();
        //Creando una cita nueva
        administrarCitas.agregarCita({...citaObj}); //Se pasa una copia del contenido de ese objeto
        //Mensaje de agregado correctamente
        ui.imprimirAlerta("Agregado correctamente")
    }


    //Reiniciar el obj
    reiniciarObjeto();

    //Reiniciar el formulario
    formulario.reset();

    //Mostrar HTML
    ui.imprimirCitas(administrarCitas); //Para imprimir citas necesitamos la referencia del array de obj, en este caso administrarCitas
}

export function reiniciarObjeto() { //Al agregar datos a un obj también hay que reiniciarlo
    citaObj.mascota = "";
    citaObj.propietario = "";
    citaObj.telefono = "";
    citaObj.fecha = "";
    citaObj.hora = "";
    citaObj.sintomas = "";
    
}

export function eliminarCita(id) {
    //Eliminar
    administrarCitas.eliminarCita(id);
    //Mostrar mensaje
    ui.imprimirAlerta("La cita se eliminó correctamente");
    //Refrescar citas
    ui.imprimirCitas(administrarCitas);
}

export function cargarEdicion(cita) {
    const {mascota, propietario, telefono, fecha, hora, sintomas} = cita;

    //Llenar los inputs
    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    //Llenar el objeto global
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;


    //Cambiar el texto del botón
    document.querySelector('button[type="submit"]').textContent = "Guardar cambios";

    editando = true;


    
}