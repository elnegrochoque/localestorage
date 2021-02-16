function validarNumeros(input) {
    if (input.value != "" && !isNaN(input.value)) {
        input.className = "form-control is-valid";
        return true;

    } else {
        input.className = "form-control is-invalid";
        return false;

    }
}

function validarNombre(elemento) {

    if (elemento.value === "") {
        elemento.className = "form-control is-invalid";
        return false;
    } else {
        elemento.className = "form-control is-valid";
        return true;
    }
}