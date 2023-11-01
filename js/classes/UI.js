//Clases
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

    imprimirCitas({citas}){ //Podemos hacer destructuring desde el mismo parámetro

        this.limpiarHTML();

        citas.forEach(cita => {
            const {mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

            const divCita = document.createElement("div");
            divCita.classList.add("cita","p-3");
            divCita.dataset.id = id; //Le agregamos id como un atributo personalizado

            //Elementos de la cita
            const mascotaParrafo = document.createElement("h2");
            mascotaParrafo.classList.add("card-title","font-weight-bold");
            mascotaParrafo.textContent = mascota;   

            const propietarioParrafo = document.createElement("p");
            propietarioParrafo.innerHTML = `
                <span class="font-weight-bolder">Propietario: </span> ${propietario};
            `;
            const telefonoParrafo = document.createElement("p");
            telefonoParrafo.innerHTML = `
                <span class="font-weight-bolder">Teléfono: </span> ${telefono};
            `;
            const fechaParrafo = document.createElement("p");
            fechaParrafo.innerHTML = `
                <span class="font-weight-bolder">Fecha: </span> ${fecha};
            `;
            const horaParrafo = document.createElement("p");
            horaParrafo.innerHTML = `
                <span class="font-weight-bolder">Hora: </span> ${hora};
            `;
            const sintomasParrafo = document.createElement("p");
            sintomasParrafo.innerHTML = `
                <span class="font-weight-bolder">Síntomas: </span> ${sintomas};
            `;
            
            //Botón para eliminar cita
            const btnEliminar = document.createElement("button");
            btnEliminar.classList.add("btn","btn-danger","mr-2");
            btnEliminar.innerHTML = 'Eliminar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>';

            //Creamos la función para eliminar la cita, solo le pasamos el id
            btnEliminar.onclick = () => eliminarCita(id);

            //Botón para editar citas
            const btnEditar = document.createElement("button");
            btnEditar.classList.add("btn", "btn-info");
            btnEditar.innerHTML = 'Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>'

            //Creamos la función para editar la edición, le pasamos la cita completa
            btnEditar.onclick = () => cargarEdicion(cita);

            //Añadir los elementos al divCita
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar); ///Añadimos el botón a divCita
            divCita.appendChild(btnEditar); //Añadimos el botón al divCita
            
            //Añadir los elementos al HTML
            contenedorCitas.appendChild(divCita);
            
        });
    }

    limpiarHTML(){
        while (contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }
    }

}

export default UI;