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