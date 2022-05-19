window.addEventListener("load", () =>{
    noProduct();
})
function noProduct() {
    let product = localStorage.getItem("product");
    if (product == null) {
        alert("Producto no encontrado");
        window.location.href = "it_shop.html";
    }
    else {
        getProduct(product);
        localStorage.removeItem("product");
    }
}
function getProduct(id) {
    $.ajax({
        url: "http://192.168.100.4:8086/products/getProductById/" +id,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        cache: false,
        timeout: 600000,
        success: function (data) {
            console.log(data);
            recuperarDatos(data);
        },
	    error: function (e) {
            alert("Error al conectar el servidor");
            console.log("ERROR : ", e);
        }
    });
}
function recuperarDatos(data) {
    var im = "<img class=\"img-responsive\" src=\"" + data.imagen +"\" alt=\"#\" />";
    $("#img").html(im);
    $("#name").html(data.nombre);
    $("#price").html(data.precio);
    $("#store").html("Vendedor: " + data.vendedor)
    $("#description1").html(data.descripcion)
    $("#description2").html(data.descripcion)
    localStorage.setItem('vend',data.vendedor)

    var puntos = data.puntuacion;
    if (puntos <= 0) {
        var stars = "<i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>"
    }
    else if (puntos <= 1) {
        var stars = "<i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>"
    }
    else if (puntos <= 2) {
        var stars = "<i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>"
    }
    else if (puntos <= 3) {
        var stars = "<i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>"
    }
    else if (puntos <= 4) {
        var stars = "<i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>"
    }
    else {
        var stars = "<i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star\" aria-hidden=\"true\"></i>"
    }
    $("#stars").html(stars)
}