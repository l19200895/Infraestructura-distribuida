// obtenemos el elemento p con el id mensaje
var mensaje = document.getElementById("mensaje");

// creamos una funcion que muestra un mensaje de bienvenida
function mostrarMensaje(){
    // Obtenemos el nombre del usuario mediante un cuadro de entrada
    var nombre = prompt("Como te llamas??");

// Si el usuario introduce un nombre, mostramos el mensaje de bienvenida
if (nombre) {
    mensaje.textContent = "!Hola" + nombre + "! Bienvenide a mi pagina web basica.";
}
}

// Llamamos a la funcion mostrarMensaje cuando la funcion pagina se carga
windows.onload = mostrarMensaje;