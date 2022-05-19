function enviarReporte(){
    var mercado = localStorage.getItem('vend')
    var titulo = document.getElementById("txt_titulo").value
    var descripcion = document.getElementById("txt_descripcion").value
    if (mercado == null || mercado == "") {
        alert("Por favor ingrese valor al campo de texto mercado")
        return
    }
    if (titulo == null || titulo == "") {
        alert("Por favor ingrese valor al campo de texto")
        return
    }
    if (descripcion == null || descripcion == "") {
        alert("Por favor ingrese valor al campo de texto")
        return
    }
    
    $.ajax({
        url: "http://192.168.100.4:8087/reportes/saveReport",
        type: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*"
        },
        data:JSON.stringify({
            "id": null,
            'titulo':''+titulo,
            'vendedor':''+mercado,
            'descripcion':''+descripcion
        }), processData: false,
        success: function(resp){
            if (resp =="ok"){
                alert("Reporte enviado correctamente")
                window.location.href="it_shop_detail.html"
            }else{
                alert("Ocurrio un error al enciar el reporte de inconsistencia")
            }
        },
        error: function(errorThrown, estado){
            alert("Ha ocurrido un error: "+ estado)
        }
    })

}