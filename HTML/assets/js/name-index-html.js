function obtenerNombreArchivo() {
  // Obtener la ruta del archivo actual
  var ruta = window.location.pathname;
  // Dividir la ruta en partes usando el caracter "/"
  var partesRuta = ruta.split("/");
  // Obtener la última parte que debería ser el nombre del archivo
  var nombreArchivo = partesRuta.pop();
  // Devolver el nombre del archivo
  return nombreArchivo;
}

// Ejemplo de uso
var nombre = obtenerNombreArchivo();

let seleccion = document.querySelectorAll(".dropdown-item");

seleccion.forEach((selector) => {
  selector.addEventListener("click", (e) => {
    let idioma = e.target.classList[1];
    switch (idioma) {
      case "spanish":
        window.location.assign(`../es/${nombre}`);
        break;
      case "english":
        window.location.assign(`../en/${nombre}`);
        break;
    }
  });
});
