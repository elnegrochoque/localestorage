function validarNumeros(input) {
    if (input.value != "" && !isNaN(input.value)) {
        input.className = "form-control is-valid";
        return true;

    } else {
        input.className = "form-control is-invalid";
        return false;

    }
}

function validarCampoRequerido(elemento) {

    if (elemento.value === "") {
        elemento.className = "form-control is-invalid";
        return false;
    } else {
        elemento.className = "form-control is-valid";
        return true;
    }
}
function validarGeneral(event) {
    event.preventDefault();
    //console.log('dentro de la funcion validar general' + event);

    if (validarNumeros(document.getElementById('codigoProducto')) &&
    validarCampoRequerido(document.getElementById('nombreProducto')) &&
    validarNumeros(document.getElementById('ndeSerieProducto')) &&
    validarCampoRequerido(document.getElementById('categoriaProducto')) &&
    validarCampoRequerido(document.getElementById('descripcionProducto')) 
    ) {
        /**let alerta = document.getElementById('mensajeEnvio');
        alerta.className = 'alert alert-success m-3';
        alerta.innerHTML = 'Se agrego el producto';**/
        console.log('datos correctos')
    } else {
        /** 
        let alerta = document.getElementById('mensajeEnvio');
        alerta.className = 'alert alert-danger m-3';
        alerta.innerHTML = 'No se pudo agregar el producto';
    */
        console.log('datos incorrectos')
    }

}