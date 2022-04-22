
function register(){
    var name = document.getElementById("txt_name").value;
    var email = document.getElementById("txt_email").value;
    var password = document.getElementById("txt_password").value;    
    var repeat_password = document.getElementById("txt_repeat_password").value;
    
    if(name == null || name == ""){
        alert("Por favor ingrese valor al campo de texto")
        return
    }
    if(email == null || email == ""){
        alert("Por favor ingrese valor al campo de texto")
        return
    }
    if(password == null || password == ""){
        alert("Por favor ingrese valor al campo de texto")
        return
    }
    if(repeat_password == null || repeat_password == ""){
        alert("Por favor ingrese valor al campo de texto")
        return
    }
    if(password !== repeat_password){
        alert("Las contraseñas no coinciden.\nVuelva a intentarlo")
        return
    }

    $.ajax({
        url:"http://localhost:2424/users/saveUser",
        type:"POST",        
        headers: {           
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"},
        data:JSON.stringify({
            "name":name,
            "email":email,
            "password":password
        }),processData : false,        
        success : function(data) {            
           if (data.status == "ok") {
               alert(data.message)               
               window.location.href = "index.html"
           }
           else {
                alert ("El nombre de usuario o la contraseña son incorrectos, verifique con cuidado ~~") // Error al iniciar sesión
           }
       },
       error:function (errorThrown) {            
            alert("¡El nombre de usuario o la contraseña son incorrectos!")            
       }
    })

}

function loginUser(){
    let email = document.getElementById("txt_email")
    let password = document.getElementById("txt_password")
    $.ajax({
        url:"http://localhost:2424/users/getUser",
        type:"GET",        
        headers: {           
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"},
        data:JSON.stringify({            
            "email":email,
            "password":password
        }),processData : false,        
        success : function(data) {            
           if (data.status == "ok") {
               alert(data.message)               
               window.location.href = "index.html"
           }
           else {
                alert ("El email o la contraseña son incorrectos, verifique con cuidado ~~") // Error al iniciar sesión
           }
       },
       error:function (errorThrown) {            
            alert("¡El email o la contraseña son incorrectos!")            
       }
    })

}