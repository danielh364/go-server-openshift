function showRegisterForm() {
    $('.mensajeformulario').removeClass('alert');
    $('.mensajeformulario').empty();
    $('.loginBox').fadeOut('fast', function () {
        $('.registerBox').fadeIn('fast');
        $('.login-footer').fadeOut('fast', function () {
            $('.register-footer').fadeIn('fast');
        });
        $('.modal-title').html('Registro');
    });
    $('.error').removeClass('alert alert-danger').html('');

}
function showLoginForm() {
    $('.mensajeformulario').removeClass('alert');
    $('.mensajeformulario').empty();
    $('#loginModal .registerBox').fadeOut('fast', function () {
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast', function () {
            $('.login-footer').fadeIn('fast');
        });
        $('.modal-title').html('Usuario registrado');
    });
    $('.error').removeClass('alert alert-danger').html('');
}

function openLoginModal() {
    $('.mensajeformulario').removeClass('alert');
    $('.mensajeformulario').empty();
    showLoginForm();
    setTimeout(function () {
        $('#loginModal').modal('show');
    }, 230);

}

function openRegisterModal() {
    $('.mensajeformulario').removeClass('alert');
    $('.mensajeformulario').empty();
    showRegisterForm();
    setTimeout(function () {
        $('#loginModal').modal('show');
    }, 230);

}

function loginAjax() {
    var comprobar = true;

    var usuario = document.getElementById('usuarioAcc').value;
    var password = document.getElementById('passwordAcc').value;

    if (usuario === "" && password == "" && comprobar == true) {
        shakeModalError("No pueden estar todos los campos vacios");
        comprobar = false;
    }

    if (usuario === "" && comprobar == true) {
        shakeModalError("no puede estar vacio el campo usuario");
        comprobar = false;
    }
    if (password === "" && comprobar == true) {
        shakeModalError("no puede estar vacio el campo password");
        comprobar = false;
    }




    if (comprobar === true) {
        var dataString = $('#formulariorAcceso').serialize();
        $.ajax({
            type: "POST",
            url: "./dao/clientesDAO.php",
            data: dataString,
            success: function (data) {
                if (data === "Combinación de Usuario/Contraseña incorrecta") {
                    shakeModalError(data);
                }
                if (data === "Usuario logeado correctamente") {
                    shakeModalSuccess(data);
                    setTimeout(function () {
                        $('#loginModal').modal('toggle');
                    }, 650);
                    document.getElementsByClassName("user-menu")[0].innerHTML = "<ul><li><a href='perfil.php' onclick='verPerfil();'><i class='fa fa-user'></i> Mi Cuenta</a></li><li><a data-toggle='modal' href='javascript:void(0)' onclick='salirLogin();'><i class='fa fa-user'></i>salir</a></li></ul>";
                } else {
                    shakeModalError(data);
                }
            }
        });
    }
}

function shakeModalError(mensaje) {
    $('#loginModal .modal-dialog').addClass('shake');
    $('#modalpassd .modal-dialog').addClass('shake');
    $('.mensajeformulario').addClass('alert alert-danger').html(mensaje);
    $('input[type="password"]').val('');
    setTimeout(function () {
        $('#loginModal .modal-dialog').removeClass('shake');
    }, 1000);
    setTimeout(function () {
        $('#modalpassd .modal-dialog').removeClass('shake');
    }, 1000);
}

function shakeModalSuccess(mensaje) {
    $('.mensajeformulario').addClass('alert alert-success').html(mensaje);
}


function registro() {

    var comprobar = true;


    var nombre = document.getElementById('nombrer').value;
    var apellidos = document.getElementById('apellidosr').value;
    var usuario = document.getElementById('usuarior').value;
    var email = document.getElementById('emailr').value;
    var password = document.getElementById('passwordr').value;
    var validarCorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (nombre === "" && apellidos === "" && usuario === "" && email === "" && password === "" && comprobar === true) {
        shakeModalError("No pueden estar todos los campos vacios");
        comprobar = false;
    }
    if (nombre === "" && comprobar === true) {
        shakeModalError("no puede estar vacio el campo nombre");
        comprobar = false;
    }
    if (apellidos === "" && comprobar === true) {
        shakeModalError("no puede estar vacio el campo apellidos");
        comprobar = false;
    }

    if (usuario === "" && comprobar === true) {
        shakeModalError("no puede estar vacio el campo usuario");
        comprobar = false;
    }
    if (email === "" && comprobar === true) {
        shakeModalError("no puede estar vacio el campo email");
        comprobar = false;
    }

    if (!validarCorreo.test(email) && comprobar === true) {
        shakeModalError("Formato de Email incorrecto");
        comprobar = false;
    }

    if (password === "" && comprobar === true) {
        shakeModalError("no puede estar vacio el campo password");
        comprobar = false;
    }




    if (comprobar === true) {
        var dataString = $('#formularioregistro').serialize();
        $.ajax({
            type: "POST",
            url: "./dao/clientesDAO.php",
            data: dataString,
            success: function (data) {
                if (data === "Usuario registrado correctamente") {
                    shakeModalSuccess(data);
                } else {
                    shakeModalError(data);
                }
            }
        });
    }
}

function salirLogin() {
    $.ajax({
        type: "POST",
        url: "salir.php",
        success: function (data) {
            swal("", "" + data + "", "success");
            document.getElementsByClassName("user-menu")[0].innerHTML = "<ul><li><a data-toggle='modal' href='javascript:void(0)' onclick='openLoginModal();'><i class='fa fa-user'></i>Identificate</a></li><li><a data-toggle='modal' href='javascript:void(0)' onclick='openRegisterModal();'><i class='fa fa-user'></i> Registrarse</a></li></ul>";
        }
    });
    if (document.getElementById('perfil') !== null) {
        setTimeout("window.location.href=\"index.html\"", 1000);
    } else {

    }

}

function comprobarsession() {
    $.ajax({
        type: "POST",
        url: "seguridad.php",
        success: function (data) {
            document.getElementsByClassName("user-menu")[0].innerHTML = "<ul><li><a href='perfil.php' onclick='verPerfil();'><i class='fa fa-user'></i> Mi Cuenta</a></li><li><a data-toggle='modal' href='javascript:void(0)' onclick='salirLogin();'><i class='fa fa-user'></i>salir</a></li></ul>";
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            document.getElementsByClassName("user-menu")[0].innerHTML = "<ul> <li><a data-toggle='modal' href='javascript:void(0)' onclick='openLoginModal();'><i class='fa fa-user'></i>Identificate</a></li><li><a data-toggle='modal' href='javascript:void(0)' onclick='openRegisterModal();'><i class='fa fa-user'></i> Registrarse</a></li></ul>";
        }
    });
}

function verPerfil() {
    document.getElementById("formularioperfil").style.display = 'block';
    document.getElementById("facturas").style.display = 'none';
    $.ajax({
        type: "POST",
        url: "./dao/perfilDAO.php",
        dataType: 'json',
        success: function (data) {
            $.each(data, function () {
                document.getElementById("infonombre").value = this.nombre;
                document.getElementById("infoapellidos").value = this.apellidos;
                document.getElementById("infoemail").value = this.email;
                document.getElementById("infousuario").value = this.usuario;
            });
        }
    });
}


function showchangepassForm() {
    $('.mensajeformulario').removeClass('alert');
    $('.mensajeformulario').empty();
    $('#modalpassd .registerBox').fadeOut('fast', function () {
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast', function () {
            $('.login-footer').fadeIn('fast');
        });
        $('.modal-title').html('Contraseña Cambiada');
    });
    $('.error').removeClass('alert alert-danger').html('');
}

function openchangepassModal() {
    $('.mensajeformulario').removeClass('alert');
    $('.mensajeformulario').empty();
    showchangepassForm();
    setTimeout(function () {
        $('#modalpassd').modal('show');
    }, 230);

}


function cambiarUserPassword() {
    var comprobar = true;

    var pass1 = document.getElementById('passwordc1').value;
    var pass2 = document.getElementById('passwordc2').value;


    if (pass1 === "" && pass2 === "" && comprobar == true) {
        shakeModalError("No pueden estar todos los campos vacios");
        comprobar = false;
    }

    if (pass1 !== pass2 && comprobar === true) {
        shakeModalError("No Coinciden las contraseñas");
        comprobar = false;
    }

    if (comprobar === true && pass1 === pass2) {
        var dataString = $('#cambiarpass').serialize();
        $.ajax({
            type: "POST",
            url: "./dao/clientesDAO.php",
            data: dataString,
            success: function (data) {
                if (data === "Contraseña Cambiada con Éxito") {
                    shakeModalSuccess(data);
                    setTimeout(function () {
                        $('#modalpassd').modal('toggle');
                    }, 1000);
                } else {
                    shakeModalError(data);
                }
            }
        });
    }
}



function modificarPerfil() {

    var comprobar = true;

    var nombre = document.getElementById('infonombre').value;
    var apellidos = document.getElementById('infoapellidos').value;
    var usuario = document.getElementById('infousuario').value;
    var email = document.getElementById('infoemail').value;

    var validarCorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (nombre === "" && apellidos === "" && email === "" && comprobar === true) {
        sweetAlert("Error", "No pueden estar todos los campos vacios.", "error");
        comprobar = false;
    }
    if (nombre === "" && comprobar === true) {
        sweetAlert("Error", "Nombre: no puede estar vacio.", "error");
        comprobar = false;
    }
    if (apellidos === "" && comprobar === true) {
        sweetAlert("Error", "Apellidos: no puede estar vacio.", "error");
        comprobar = false;
    }

    if (email === "" && comprobar === true) {
        sweetAlert("Error", "Email: no puede estar vacio.", "error");
        comprobar = false;
    }

    if (!validarCorreo.test(email) && comprobar === true) {
        sweetAlert("Error", "Email: Formato incorrecto.", "error");
        comprobar = false;
    }


    if (comprobar === true) {
        var dataString = $('#editarperfil').serialize();
        $.ajax({
            type: "POST",
            url: "./dao/clientesDAO.php",
            data: dataString,
            success: function (data) {
                swal("", "" + data + "", "success");
                verPerfil();
            }
        });
    }
}
