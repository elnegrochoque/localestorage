import { Funko } from "./funkoclass.js";

let listaFunkopop = [];
const modalFunko = new bootstrap.Modal(
  document.getElementById("modalProductos")
);
let btnAgregar = document.getElementById("btnAgregarFunko");
btnAgregar.addEventListener("click", () => {
  modalFunko.show();
});
// al iniciar la pagina carga los datos

leerDatos();

window.agregarFunkopop = function (event) {
  event.preventDefault();
  //console.log('dentro de la funcion validar general' + event);

  if (
    validarNumeros(document.getElementById("codigoProducto")) &&
    validarCampoRequerido(document.getElementById("nombreProducto")) &&
    validarNumeros(document.getElementById("ndeSerieProducto")) &&
    validarCampoRequerido(document.getElementById("categoriaProducto")) &&
    validarCampoRequerido(document.getElementById("descripcionProducto"))
  ) {
    console.log("datos correctos");
    // crear objeto
    let nuevoFunko = new Funko(
      document.getElementById("codigoProducto").value,
      document.getElementById("nombreProducto").value,
      document.getElementById("ndeSerieProducto").value,
      document.getElementById("categoriaProducto").value,
      document.getElementById("descripcionProducto").value,
      document.getElementById("imgProducto").value
    );
    //guardar el funko en el arreglo
    console.log(nuevoFunko);
    listaFunkopop.push(nuevoFunko);
    //guardar los datos en el localstorage
    localStorage.setItem("listaFunkopopKey", JSON.stringify(listaFunkopop));
    //mostrar cartel de datos guardados
    //limpiar formulario
    Swal.fire(
      "Nuevo Funkopop",
      "el producto fue agregado correctamente",
      "success"
    );
    leerDatos();
    limpiarFormulario();
    //cerrar la ventana modal

    modalFunko.hide();
  } else {
    /** 
        let alerta = document.getElementById('mensajeEnvio');
        alerta.className = 'alert alert-danger m-3';
        alerta.innerHTML = 'No se pudo agregar el producto';
    */
    console.log("datos incorrectos");
  }
};
function limpiarFormulario() {
  let formulario = document.getElementById("formProducto");
  formulario.reset();
  let codigoProducto = document.getElementById(`codigoProducto`);
  codigoProducto.className = "form-control";

  let nombreProducto = document.getElementById(`nombreProducto`);
  nombreProducto.className = "form-control";

  let numSerie = document.getElementById(`ndeSerieProducto`);
  numSerie.className = "form-control";

  let categoriaProducto = document.getElementById(`categoriaProducto`);
  categoriaProducto.className = "form-control";

  let descProducto = document.getElementById(`descripcionProducto`);
  descProducto.className = "form-control";

  let imgProducto = document.getElementById(`imgProducto`);
  imgProducto.className = "form-control";
}

function leerDatos() {
  // esta funcion se encarga de ller los datos que estan en local storage
  if (localStorage.length > 0) {
    let _listaFunkopop = JSON.parse(localStorage.getItem("listaFunkopopKey"));
    
    if (listaFunkopop.length === 0) {
      listaFunkopop = _listaFunkopop;
    }
    //dibujar todos los objetos de la tabla
    dibujarDatos(_listaFunkopop);
  }
}

function dibujarDatos(_listaFunkopop){
//traigo elemento padre
console.log(_listaFunkopop);
let bodyTablaProductos= document.getElementById('tbodyProductos');
bodyTablaProductos.innerHTML='';
let codigoHTML = '';
 
for (let i in _listaFunkopop) {
    codigoHTML = `
    <tr>
    <th scope="row">${_listaFunkopop[i].codigo}</th>
        <td>${_listaFunkopop[i].nombre}</td>
        <td>${_listaFunkopop[i].numserie}</td>
        <td>${_listaFunkopop[i].categoria}</td>
        <td>${_listaFunkopop[i].descripcion}</td>
        <td>${_listaFunkopop[i].imagen}</td>
        <td>
        <button class="btn btn-warning" oclick=>Editar</button>
        <button class="btn btn-danger" onclick="eliminarFunkopop(this)" id="${_listaFunkopop[i].codigo}">Borrar</button>
        </td>
     </tr>
    `
    bodyTablaProductos.innerHTML += codigoHTML;
    }
}
window.eliminarFunkopop = function(funkopop){
    console.log('prueba', funkopop.id);
    Swal.fire({
        title: '¿Estas seguro de eliminar este Funko?',
        text: "No puede volver atras esta accion",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Funkopop eliminado',
            'El funko fue eliminado',
            'success'
          )
        }
      })

}

