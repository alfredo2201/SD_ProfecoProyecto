function getAllProducts(event) {
    event.preventDefault();
    getAll();
}
function getAll() {
    $.ajax({
        url: "http://localhost:2424/products/allProducts",
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
function searchProducts(valor) {
    alert(valor);
    return false;
}
function crearObjeto(data) {
    if (data != null && data) {
        
        for (var i = 0; i < data.length; i++) {
            var puntos = data[i].puntuacion;
            if (puntos <= 1) {
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
              +  "<div class=\"product_img\"> <img class=\"img-responsive\" src=\"" + data[i].imagen +"\" alt=\"\"> </div>"
              +  "<div class=\"product_detail_btm\">"
              +    "<div class=\"center\">"
              +      "<h4><a href=\"it_shop_detail.html\">" + data[i].nombre + "</a></h4>"
              +    "</div>"
              +    "<div class=\"starratin\">"
              +      stars
              +    "</div>"
              +    "<div class=\"product_price\">"
              +      "<p><span class=\"new_price\" id=\"precio\">$" + data[i].precio + "</span></p>"
              +    "</div>"
              +  "</div>"
              + "</div>"
            + "</div>";

            $("#app0").append(impri);
        }
    }
}