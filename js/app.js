//Variables
//Creamos todos los inputs del formularios como variables
const mascotaInput = document.querySelector("#mascota");
const propietarioInput = document.querySelector("#propietario");
const telefonoInput = document.querySelector("#telefono");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const sintomasInput = document.querySelector("#sintomas");

//Añadimos el formulario completo
const formulario = document.querySelector("#nueva-cita");

//Contenedor donde irán las citas
const contenedorCitas = document.querySelector("#citas");

//Proyecto necesita 2 clases, para UI y otra para las citas
//Clases
class Citas {
    constructor(){
        this.citas = [];
    }
}

class UI{
    imprimirAlerta(mensaje, tipo){
        //Crear el div
        const divMensaje = document.createElement("div");
        divMensaje.classList.add("text-center", "alert", "d-block", "col-12");

        //Si es tipo error
        if(tipo === "error"){
            divMensaje.classList.add("alert-danger");
        } else {
            divMensaje.classList.add("alert-success");
        }

        //Mensaje de error
        divMensaje.textContent = mensaje;

        //Agregar al DOM

        document.querySelector("#contenido").insertBefore(divMensaje, document.querySelector(".agregar-cita"));

        //Quitar la alerta después de unos segundos

        setTimeout(()=>{
            divMensaje.remove();
        }, 2500);
    }
}

//Instanciamos las clases de forma global
const ui = new UI();
const administrarCitas = new Citas();


//eventListeners
eventListeners();   
function eventListeners() {
    mascotaInput.addEventListener("input", datosCita)
    propietarioInput.addEventListener("input", datosCita)
    telefonoInput.addEventListener("input", datosCita)
    fechaInput.addEventListener("input", datosCita)
    horaInput.addEventListener("input", datosCita)
    sintomasInput.addEventListener("input", datosCita)

    formulario.addEventListener("submit", nuevaCita);
}

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
function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
}

//Valida y agrega una nueva cita a la clase de citas
function nuevaCita(e) {
    e.preventDefault();

    //Extraemos los datos de citaObj
    const {mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;
    if(mascota === "" || propietario === "" || telefono === "" || fecha === "" || hora === "" || sintomas === "") {
        ui.imprimirAlerta("Todos los campos son obligatorios", "error")
        return; //El return para que no se ejecute la siguiente línea
    }
}
