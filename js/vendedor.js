window.addEventListener("load", () =>{
    getAllProducts(event);
})
function getAllProducts(event) {
    event.preventDefault();
    getAll();
}
function getAll() {
    $.ajax({
        url: "http://localhost:2426/sellers/allSellers",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        cache: false,
        timeout: 600000,
        success: function (data) {
            console.log(data);
            crearObjeto(data);
        },
	    error: function (e) {
            alert("Error al conectar el servidor");
            console.log("ERROR : ", e);
        }
    });
    
}

function getVendedor(valor) {
    $.ajax({
        url: "http://localhost:2426/sellers/allSellers/" + valor,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        cache: false,
        timeout: 600000,
        success: function (data) {
            console.log(data);
            crearObjeto(data);
        },
	    error: function (e) {
            alert("Error al conectar el servidor al hacer la busqueda");
            console.log("ERROR : ", e);
        }
    });
}

function getSearch(valor) {
    $.ajax({
        url: "http://localhost:2424/products/getProduct/" + valor,
        type: "GET",
        contentType: "application/json; charset=utf-8",
        cache: false,
        timeout: 600000,
        success: function (data) {
            console.log(data);
            crearObjeto(data);
        },
	    error: function (e) {
            alert("Error al conectar el servidor al hacer la busqueda");
            console.log("ERROR : ", e);
        }
    });
}
function searchProducts() {
    var search = document.getElementById("txt_producto").value;

    if (search == null) {
        alert("Por favor ingrese valor al campo de texto")
        return
    }
    if (search == "") {
        getAll();
        return
    }
    getSearch(search);
}
function crearObjeto(data) {
    $("#app0").empty();

    if (data != null && data) {
        for (var i = 0; i < data.length; i++) {
            var puntos = data[i].puntuacion;
            if (puntos <= 0) {
                var stars = "<div class=\"center\"> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> </div>"
            }
            else if (puntos <= 1) {
                var stars = "<div class=\"center\"> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> </div>"
            }
            else if (puntos <= 2) {
                var stars = "<div class=\"center\"> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> </div>"
            }
            else if (puntos <= 3) {
                var stars = "<div class=\"center\"> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> </div>"
            }
            else if (puntos <= 4) {
                var stars = "<div class=\"center\"> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i> </div>"
            }
            else {
                var stars = "<div class=\"center\"> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> <i class=\"fa fa-star\" aria-hidden=\"true\"></i> </div>"
            }
                
                var impri = "<div class=\"col-md-4 col-sm-6 col-xs-12 margin_bottom_30_all\">" 
              + "<div class=\"product_list\">"
              +  "<div class=\"product_img\"> <img class=\"img-responsive\" src=\"" + data[i].imagen +"\" alt=\"#\"> </div>"
              +  "<div class=\"product_detail_btm\">"
              +    "<div class=\"center\">"
              +      "<h4><a onclick=\"goToDetail(" + data[i].id +")\" href=\"it_shop.html\" >" + data[i].nombre + "</a></h4>"
              +    "</div>"
              +    "<div class=\"starratin\">"
              +      stars
              +    "</div>"
            //   +    "<div class=\"product_price\">"
            //   +      "<p><span class=\"new_price\" id=\"precio\">$" + data[i].precio + "</span></p>"
            //   +    "</div>"
              +  "</div>"
              + "</div>"
            + "</div>";
            
            $("#app0").append(impri);

        }
    }
}
function goToDetail(id) {
    if (id != null) {
        if (window.localStorage) {
            localStorage.setItem("vendedor", id);
            window.location.href = "it_shopSuper.html";
        }
        
    }
    else {
        alert("No se encontro el suoermercado");
    }
}