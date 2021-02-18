import{Funko} from './funkoclass.js';

let listaFunkopop=[];
window.agregarFunkopop = function(event) {
    event.preventDefault();
    //console.log('dentro de la funcion validar general' + event);

    if (validarNumeros(document.getElementById('codigoProducto')) &&
    validarCampoRequerido(document.getElementById('nombreProducto')) &&
    validarNumeros(document.getElementById('ndeSerieProducto')) &&
    validarCampoRequerido(document.getElementById('categoriaProducto')) &&
    validarCampoRequerido(document.getElementById('descripcionProducto')) 
    ) {
        console.log('datos correctos')
        // crear objeto
        let nuevoFunko=new Funko((document.getElementById('codigoProducto')).value,
        (document.getElementById('nombreProducto')).value, 
    (document.getElementById('ndeSerieProducto')).value,
    (document.getElementById('categoriaProducto')).value,
    (document.getElementById('descripcionProducto')).value, 
    (document.getElementById('imgProducto')).value 
        );
        //guardar el funko en el arreglo
        console.log(nuevoFunko)
        listaFunkopop.push(nuevoFunko)
        //guardar los datos en el localstorage
        localStorage.setItem("listaFunkopopKey",JSON.stringify(listaFunkopop))
        //mostrar cartel de datos guardados
        //limpiar formulario
        Swal.fire(
            'Nuevo Funkopop',
            'el producto fue agregado correctamente',
            'success'
        )
        limpiarFormulario()
    } else {
        /** 
        let alerta = document.getElementById('mensajeEnvio');
        alerta.className = 'alert alert-danger m-3';
        alerta.innerHTML = 'No se pudo agregar el producto';
    */
        console.log('datos incorrectos')
    }
    
}
function limpiarFormulario(){
    let formulario = document.getElementById('formProducto');
    formulario.reset();
}