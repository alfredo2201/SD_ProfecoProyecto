function contact() {
  var comment = document.getElementById("txt_comentarios").value;
  var mail = document.getElementById("txt_correo").value;
  var name = document.getElementById("txt_nombre").value;
  window.onerror = new Function("return true");
  var link =
    "asesoria@profeco.gob.mx" +
    "?cc=denunciasprofeco@profeco.gob.mx" +
    "&subject=" +
    escape("El usuario " + name +" con correo "+ mail + " contacta a Profeco.") +
    "&body=" +
    escape(comment);

  window.location.href = "mailto:" + link;
}
