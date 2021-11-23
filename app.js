let btn = document.getElementById("btn");

function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let password = document.getElementById("password").value;
    let password1 = document.getElementById("password1").value;
    let checkbox = document.getElementById("checkbox");
    let validacionOK = true;

    if (
        nombre == "" ||
        apellido == "" ||
        email == "" ||
        password == "" ||
        password1 == ""
    ) {
        alert("Completa todos los campos");
        validacionOK = false;
    }

    if (!checkbox.checked) {
        alert("Acepta los terminos");
        validacionOK = false;
    }

    if (password != password1){
        alert("Las contraseñas deben ser iguales")
        validacionOK = false;
    }
    
    return validacionOK;
}

