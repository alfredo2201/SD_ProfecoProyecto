
function registerUser() {
    var name = document.getElementById("txt_name").value;
    var email = document.getElementById("txt_email").value;
    var password = document.getElementById("txt_password").value;
    var repeat_password = document.getElementById("txt_repeat_password").value;

    if (name == null || name == "") {
        alert("Por favor ingrese valor al campo de texto")
        return
    }
    if (email == null || email == "") {
        alert("Por favor ingrese valor al campo de texto")
        return
    }
    if (password == null || password == "") {
        alert("Por favor ingrese valor al campo de texto")
        return
    }
    if (repeat_password == null || repeat_password == "") {
        alert("Por favor ingrese valor al campo de texto")
        return
    }
    if (password !== repeat_password) {
        alert("Las contraseñas no coinciden.\nVuelva a intentarlo")
        return
    }

    $.ajax({
        url: "http://localhost:2425/users/saveUser",
        type: "POST",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*"
        },
        data: JSON.stringify({
            "id": null,
            "name": name,
            "email": email,
            "password": password
        }), processData: false,
        success: function (resp) {                    
            if (resp == "ok") {
                alert("Usuario creado exitosamente...")
                window.location.href = "login.html"
            }
            else {
                alert("El nombre de usuario o la contraseña son incorrectos, verifique con cuidado ~~") // Error al iniciar sesión
            }
        },
        error: function (errorThrown, estado) {
            alert("Ha ocurrido un error: " + estado)
        }
    })

}

function loginUser() {
    let email = document.getElementById("txt_email").value
    let password = document.getElementById("txt_password").value

    if(email == "" && password == ""){
        alert("Campo de correo y constraseña están vacio\nIngrese un valor.")
        return
    }
    if(email == "" || email == null) {
        alert("Campo de correo está vacio\nIngrese un valor.")
        return
    }
    if(password == "" || password == null) {
        alert("Campo de contraseña está vacio\nIngrese un valor.")
        return
    }
    $.ajax({
        url: "http://localhost:2425/users/getUser/?email="+email+"&password="+password,
        type: "GET",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "*"
        },
        dataType: 'json',
        processData: false,
        success: function (resp) {
            if (resp !== null) {
                if (window.localStorage) {
                    localStorage.setItem("key", email);
                  }     
                window.location.href = "home.html"
                
            }
            else {
                alert("El email o la contraseña son incorrectos, verifique con cuidado ~~") // Error al iniciar sesión
            }
        },
        error: function (errorThrown) {
            alert("Ha ocurrido un error: " + errorThrown)
        }
    })

}

function logOut() {
    localStorage.removeItem('key');
    window.location.href="login.html";
}

function noSession(){
    let key = localStorage.getItem('key');
        console.log(key);
        if(key==null)
        {
          alert('Necesitas iniciar sesión primero');
          window.location.href="login.html";
        }
}