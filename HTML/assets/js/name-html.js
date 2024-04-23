function obtenerNombreArchivo() {
  // Obtener la ruta del archivo actual
  var ruta = window.location.pathname;
  // Dividir la ruta en partes usando el caracter "/"
  var partesRuta = ruta.split("/");
  // Obtener la última parte que debería ser el nombre del archivo
  var nombreArchivo = partesRuta.slice(-1)[0].split(".")[0];
  
  // Devolver el nombre del archivo
  return nombreArchivo;
}

// Ejemplo de uso
var nombre = obtenerNombreArchivo();

let seleccion = document.querySelectorAll(".dropdown-item");

seleccion.forEach((selector) => {
  selector.addEventListener("click", (e) => {
    let idioma = e.target.innerHTML;
    switch (idioma) {
      case "Spanish":
        window.location.assign(`../../es/${nombre}/${nombre}.html`);
        break;
      case "English":
        window.location.assign(`../../en/${nombre}/${nombre}.html`);
        break;
    }
  });
});
