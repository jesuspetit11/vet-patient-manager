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

//eventListeners
eventListeners();   
function eventListeners() {
    mascotaInput.addEventListener("input", datosCita)
    propietarioInput.addEventListener("input", datosCita)
    telefonoInput.addEventListener("input", datosCita)
    fechaInput.addEventListener("input", datosCita)
    horaInput.addEventListener("input", datosCita)
    sintomasInput.addEventListener("input", datosCita)
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

