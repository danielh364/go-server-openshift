function showForm() {
    $('.mensajeformulario').removeClass('alert');
    $('.mensajeformulario').empty();
    $('#loginModal .registerBox').fadeOut('fast', function () {
        $('.loginBox').fadeIn('fast');
        $('.register-footer').fadeOut('fast', function () {
            $('.login-footer').fadeIn('fast');
        });
    });
    $('.error').removeClass('alert alert-danger').html('');
}

function openFormClientesModal() {
  jQuery("#formularioclientes").show().siblings().hide();
  jQuery("#tituloclientes").show().siblings().hide();
    $('.mensajeformulario').removeClass('alert');
    $('.mensajeformulario').empty();
    showForm();
    setTimeout(function () {
        $('#loginModal').modal('show');
    }, 230);

}

function openForModificarClientesModal() {
  jQuery("#formularioclientesModificar").show().siblings().hide();
  jQuery("#tituloclientes").show().siblings().hide();
  document.getElementById("usuariom").style.display = 'none';
    $('.mensajeformulario').removeClass('alert');
    $('.mensajeformulario').empty();
    showForm();
    setTimeout(function () {
        $('#loginModal').modal('show');
    }, 230);
}

function openFormClientesPasswordModal() {
  jQuery("#formularioclientepasswordModificar").show().siblings().hide();
  jQuery("#titulopassword").show().siblings().hide();
  document.getElementById("usuariooculto").style.display = 'none';
    $('.mensajeformulario').removeClass('alert');
    $('.mensajeformulario').empty();
    showForm();
    setTimeout(function () {
        $('#loginModal').modal('show');
    }, 230);

}

function openFormAdministradoresModal() {
  jQuery("#formularioadministradores").show().siblings().hide();
  jQuery("#tituloadministradores").show().siblings().hide();
    $('.mensajeformulario').removeClass('alert');
    $('.mensajeformulario').empty();
    showForm();
    setTimeout(function () {
        $('#loginModal').modal('show');
    }, 230);
}




function openForModificarAdministradorModal() {
  jQuery("#formularioadministradorpasswordModificar").show().siblings().hide();
  jQuery("#tituloadministradores").show().siblings().hide();
  document.getElementById("administradorpoculto").style.display = 'none';
    $('.mensajeformulario').removeClass('alert');
    $('.mensajeformulario').empty();
    showForm();
    setTimeout(function () {
        $('#loginModal').modal('show');
    }, 230);
}




function openFormArticulosModal() {
  jQuery("#formularioarticulos").show().siblings().hide();
  jQuery("#tituloarticulos").show().siblings().hide();

    $('.mensajeformulario').removeClass('alert');
    $('.mensajeformulario').empty();
    showForm();
    setTimeout(function () {
        $('#loginModal').modal('show');
    }, 230);

}


function openFormModificarArticuloModal() {
  jQuery("#formularioarticulosModificar").show().siblings().hide();
  jQuery("#tituloarticulos").show().siblings().hide();
  document.getElementById("idarticuloNoculto").style.display = 'none';
    $('.mensajeformulario').removeClass('alert');
    $('.mensajeformulario').empty();
    showForm();
    setTimeout(function () {
        $('#loginModal').modal('show');
    }, 230);

}

function openFormArticulosFotoModal() {
  jQuery("#formularioarticulosimagen").show().siblings().hide();
  jQuery("#tituloarticulos").show().siblings().hide();
    $('.mensajeformulario').removeClass('alert');
    $('.mensajeformulario').empty();
    showForm();
    setTimeout(function () {
        $('#loginModal').modal('show');
    }, 230);

}




function openFormCategoriasModal() {
  jQuery("#formulariocategorias").show().siblings().hide();
  jQuery("#titulocategorias").show().siblings().hide();
    $('.mensajeformulario').removeClass('alert');
    $('.mensajeformulario').empty();
    showForm();
    setTimeout(function () {
        $('#loginModal').modal('show');
    }, 230);

}

function openFormModificarCategoriasModal() {
  jQuery("#formulariocategoriasModificar").show().siblings().hide();
  jQuery("#titulocategorias").show().siblings().hide();
  document.getElementById("idcategoriaoculta").style.display = 'none';
    $('.mensajeformulario').removeClass('alert');
    $('.mensajeformulario').empty();
    showForm();
    setTimeout(function () {
        $('#loginModal').modal('show');
    }, 230);

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


function AltaCliente() {

    var comprobar = true;

    var usuario = document.getElementById('usuarioc').value;
    var nombre = document.getElementById('nombrec').value;
    var apellidos = document.getElementById('apellidosc').value;
    var email = document.getElementById('emailc').value;
    var password = document.getElementById('passwordc').value;
    var validarCorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (nombre == "" && apellidos == "" && usuario == "" && email == "" && password == "" && comprobar == true) {
        shakeModalError("No pueden estar todos los campos vacios");
        comprobar = false;
    }
    if (nombre == "" && comprobar == true) {
        shakeModalError("Nombre: no puede estar vacio el campo.");
        comprobar = false;
    }
    if (apellidos == "" && comprobar == true) {
        shakeModalError("Apellidos: no puede estar vacio el campo.");
        comprobar = false;
    }

    if (usuario == "" && comprobar == true) {
        shakeModalError("Usuario: no puede estar vacio el campo.");
        comprobar = false;
    }
    if (email == "" && comprobar == true) {
        shakeModalError("Email: no puede estar vacio el campo.");
        comprobar = false;
    }

    if (!validarCorreo.test(email) && comprobar == true) {
        shakeModalError("Email: Formato incorrecto.");
        comprobar = false;
    }

    if (password == "" && comprobar == true) {
        shakeModalError("Contraseña: no puede estar vacio el campo.");
        comprobar = false;
    }


    if (comprobar == true) {
        var dataString = $('#formclientes').serialize();
        $.ajax({
            type: "POST",
            url: "./dao/clientesDAO.php",
            data: dataString,
            success: function (data) {
                if (data === "Usuario registrado correctamente") {
                    shakeModalSuccess(data);
                    $("#tablaclientes").trigger("reloadGrid");
                    setTimeout(function () {
                        $('#loginModal').modal('toggle');
                    }, 650);
                } else {
                    shakeModalError(data);
                }
            }
        });
    }
}


function cambiarUserPassword() {
    var comprobar = true;

    var pass1 = document.getElementById('passwordm1').value;
    var pass2 = document.getElementById('passwordm2').value;


    if (pass1 == "" && pass2 == "" && comprobar == true) {
        shakeModalError("No pueden estar todos los campos vacios");
        comprobar = false;
    }

    if (pass1 !== pass2 && comprobar == true) {
        shakeModalError("No Coinciden las contraseñas");
        comprobar = false;
    }

    if (comprobar == true && pass1 === pass2) {
        var dataString = $('#formclientesPassword').serialize();
        $.ajax({
            type: "POST",
            url: "./dao/clientesDAO.php",
            data: dataString,
            success: function (data) {
                if (data === "Se ha actualizado la contraseña correctamente") {
                    shakeModalSuccess(data);
                    $("#tablaclientes").trigger("reloadGrid");
                    setTimeout(function () {
                        $('#loginModal').modal('toggle');
                    }, 650);
                } else {
                    shakeModalError(data);
                }
            }
        });
    }
}



function modificarPerfil() {

    var comprobar = true;

    var nombre = document.getElementById('usuariom').value;
    var apellidos = document.getElementById('nombrem').value;
    var usuario = document.getElementById('apellidosm').value;
    var email = document.getElementById('emailm').value;

    var validarCorreo = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (nombre == "" && apellidos == "" && email == "" && comprobar == true) {
          shakeModalError("No pueden estar todos los campos vacios.");
        comprobar = false;
    }
    if (nombre == "" && comprobar == true) {
        shakeModalError("Nombre: no puede estar vacio el campo.");
        comprobar = false;
    }
    if (apellidos == "" && comprobar == true) {
        shakeModalError("Apellidos: no puede estar vacio el campo.");
        comprobar = false;
    }

    if (email == "" && comprobar == true) {
        shakeModalError("Email: no puede estar vacio el campo.");
        comprobar = false;
    }

    if (!validarCorreo.test(email) && comprobar == true) {
        shakeModalError("Email: Formato incorrecto.");
        comprobar = false;
    }


    if (comprobar == true) {
        var dataString = $('#formMclientes').serialize();
        $.ajax({
            type: "POST",
            url: "./dao/clientesDAO.php",
            data: dataString,
            success: function (data) {
                shakeModalSuccess(data);
                $("#tablaclientes").trigger("reloadGrid");
                setTimeout(function () {
                    $('#loginModal').modal('toggle');
                }, 650);
            }
        });
    }
}



function AltaAdministrador() {

    var comprobar = true;

    var usuario = document.getElementById('usuarioA').value;

    var password = document.getElementById('passwordA').value;


    if (usuario == "" && password == "" && comprobar == true) {
        shakeModalError("No pueden estar todos los campos vacios.");
        comprobar = false;
    }
    if (usuario == "" && comprobar == true) {
        shakeModalError("Usuario: no puede estar vacio el campo.");
        comprobar = false;
    }

    if (password == "" && comprobar == true) {
        shakeModalError("Contraseña: no puede estar vacio el campo.");
        comprobar = false;
    }


    if (comprobar == true) {
        var dataString = $('#formAdministrador').serialize();
        $.ajax({
            type: "POST",
            url: "./dao/administradoresDAO.php",
            data: dataString,
            success: function (data) {
                if (data === "Administrador registrado correctamente") {
                    shakeModalSuccess(data);
                    $("#tablaadministradores").trigger("reloadGrid");
                    setTimeout(function () {
                        $('#loginModal').modal('toggle');
                    }, 650);
                } else {
                    shakeModalError(data);
                }
            }
        });
    }
}

function cambiarAdminPassword() {
    var comprobar = true;

    var pass1 = document.getElementById('Apasswordm1').value;
    var pass2 = document.getElementById('Apasswordm2').value;


    if (pass1 == "" && pass2 == "" && comprobar == true) {
        shakeModalError("No pueden estar todos los campos vacios");
        comprobar = false;
    }

    if (pass1 !== pass2 && comprobar == true) {
        shakeModalError("No Coinciden las contraseñas");
        comprobar = false;
    }

    if (comprobar == true && pass1 === pass2) {
        var dataString = $('#formAdministradorPassword').serialize();
        $.ajax({
            type: "POST",
            url: "./dao/administradoresDAO.php",
            data: dataString,
            success: function (data) {
                if (data === "Se ha actualizado la contraseña correctamente") {
                    shakeModalSuccess(data);
                    $("#tablaadministradores").trigger("reloadGrid");
                    setTimeout(function () {
                        $('#loginModal').modal('toggle');
                    }, 650);
                } else {
                    shakeModalError(data);
                }
            }
        });
    }
}


function AltaArticulo() {

    var comprobar = true;
    var categoria = $("#categoriaN option:selected").text();
    var titulo = document.getElementById('tituloN').value;
    var precio = document.getElementById('precioN').value;
    var stock = document.getElementById('stockN').value;
    var imagen = document.getElementById('imagenN').value;
    var descripcion = document.getElementById('descripcionN').value;

    if (categoria == "" && titulo == "" && precio == "" && stock == "" && imagen == "" && descripcion == "" && comprobar == true) {
        shakeModalError("No pueden estar todos los campos vacios.");
        comprobar = false;
    }
    if (categoria ==""  && comprobar == true) {
        shakeModalError("Categoria: no puede estar vacio el campo.");
        comprobar = false;
    }
    if (titulo == ""  && comprobar == true) {
        shakeModalError("Titulo: no puede estar vacio el campo.");
        comprobar = false;
    }

    if (precio == ""  && comprobar == true) {
        shakeModalError("Precio: no puede estar vacio el campo.");
        comprobar = false;
    }

    if (precio < 1  && comprobar == true) {
        shakeModalError("Precio:  no puede ser 0 o tener una cifra negativa.");
        comprobar = false;
    }

    if (stock == "" && comprobar == true) {
        shakeModalError("Stock: no puede estar vacio el campo.");
        comprobar = false;
    }

    if (stock < 1 && comprobar == true) {
        shakeModalError("Stock: no puede ser 0 o tener una cifra negativa.");
        comprobar = false;
    }

    if (imagen == "" && comprobar == true) {
        shakeModalError("Imagen: no puede estar vacio el campo.");
        comprobar = false;
    }
    if (descripcion == "" && comprobar == true) {
        shakeModalError("Descripcion: no puede estar vacio el campo.");
        comprobar = false;
    }

    if (categoria =="Elige una opción"  && comprobar == true) {
        shakeModalError("Categoria: se debe elegir una categoria.");
        comprobar = false;
    }

    if (comprobar == true) {
        var dataString = $('#formularioArticuloNuevo').serialize();
        $.ajax({
            type: "POST",
            url: "./dao/articulosDAO.php",
            data: dataString,
            success: function (data) {
                if (data === "Articulo registrado correctamente") {
                    shakeModalSuccess(data);
                    $("#tablaarticulos").trigger("reloadGrid");
                    setTimeout(function () {
                        $('#loginModal').modal('toggle');
                    }, 650);
                } else {
                    shakeModalError(data);
                }
            }
        });
    }
}


function ModificarArticulo() {

    var comprobar = true;
    var idarticulo=document.getElementById('idarticuloNoculto').value;
    var categoria = $("#categoriaM option:selected").text();
    var titulo = document.getElementById('tituloM').value;
    var precio = document.getElementById('precioM').value;
    var stock = document.getElementById('stockM').value;
    var imagen = document.getElementById('imagenM').value;
    var descripcion = document.getElementById('descripcionM').value;

    if (categoria == "" && titulo == "" && precio == "" && stock == "" && imagen == "" && descripcion == "" && comprobar == true) {
        shakeModalError("No pueden estar todos los campos vacios.");
        comprobar = false;
    }
    if (categoria ==""  && comprobar == true) {
        shakeModalError("Categoria: no puede estar vacio el campo.");
        comprobar = false;
    }
    if (titulo == ""  && comprobar == true) {
        shakeModalError("Titulo: no puede estar vacio el campo.");
        comprobar = false;
    }
    if (precio == ""  && comprobar == true) {
        shakeModalError("Precio: no puede estar vacio el campo.");
        comprobar = false;
    }

    if (stock == ""  && comprobar == true) {
        shakeModalError("Stock: no puede estar vacio el campo.");
        comprobar = false;
    }
    if (imagen == "" && comprobar == true) {
        shakeModalError("Imagen: no puede estar vacio el campo.");
        comprobar = false;
    }
    if (descripcion == "" && comprobar == true) {
        shakeModalError("Descripcion: no puede estar vacio el campo.");
        comprobar = false;
    }

    if (categoria =="Elige una opción"  && comprobar == true) {
        shakeModalError("Categoria: se debe elegir una categoria.");
        comprobar = false;
    }

    if (comprobar == true) {
        var dataString = $('#formularioMArticulo').serialize();
        $.ajax({
            type: "POST",
            url: "./dao/articulosDAO.php",
            data: dataString,
            success: function (data) {
                if (data === "Articulo actualizado con éxito.") {
                    shakeModalSuccess(data);
                    $("#tablaarticulos").trigger("reloadGrid");
                    setTimeout(function () {
                        $('#loginModal').modal('toggle');
                    }, 650);
                } else {
                    shakeModalError(data);
                }
            }
        });
    }
}

function insertarFoto() {

    var comprobar = true;
    var foto=document.getElementById('articulofoto').value;

    if (foto ==""  && comprobar == true) {
        shakeModalError("No se ha seleccionado ninguna foto.");
        comprobar = false;
    }

    if (comprobar == true) {

        var formdata = new FormData(document.getElementById("formularioArticuloImagen"));
        $.ajax({
            type: "POST",
            url: "./dao/articuloUpload.php",
            data: formdata,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data === "El archivo ha sido subido.") {
                    shakeModalSuccess(data);
                    $("#tablaarticulos").trigger("reloadGrid");
                    setTimeout(function () {
                        $('#loginModal').modal('toggle');
                    }, 650);
                } else {
                    shakeModalError(data);
                }
            }
        });
    }
}


function AltaCategoria() {
    var comprobar = true;
    var categoria = document.getElementById('nombrecategoriaN').value;

    if (categoria == "" && comprobar == true) {
        shakeModalError("Nombre de la categoria: no puede estar vacio el campo.");
        comprobar = false;
    }

    if (comprobar == true) {
        var dataString = $('#formularioCategoriaNueva').serialize();
        $.ajax({
            type: "POST",
            url: "./dao/categoriasDAO.php",
            data: dataString,
            success: function (data) {
                if (data === "Categoria creada correctamente") {
                    shakeModalSuccess(data);
                    $("#tablacategorias").trigger("reloadGrid");
                    setTimeout(function () {
                        $('#loginModal').modal('toggle');
                    }, 650);
                } else {
                    shakeModalError(data);
                }
            }
        });
    }
}

function modificarCategoria() {

    var comprobar = true;
    var nombre = document.getElementById('nombrecategoria').value;

    if (nombre == "" && comprobar == true) {
        shakeModalError("Nombre de la categoria: no puede estar vacio.");
        comprobar = false;
    }

    if (comprobar == true) {
        var dataString = $('#formularioCategoriaModificar').serialize();
        $.ajax({
            type: "POST",
            url: "./dao/categoriasDAO.php",
            data: dataString,
            success: function (data) {
              if(data==="Se ha actualizado correctamente."){
                shakeModalSuccess(data);
                setTimeout(function () {
                    $('#loginModal').modal('toggle');
                }, 650);
              }else{
                  shakeModalError(data);
              }
                $("#tablacategorias").trigger("reloadGrid");
            }
        });
    }
}

function ListarCategorias(){
$('option', '#categoriaN').remove();
$('<option selected>Elige una opción</option>').appendTo('#categoriaN');
  $.ajax({
      url: './dao/categoriasList.php',
      dataType: 'json',
      success: function (data) {
          $.each(data, function () {
              $('<option value="' + this.nombre + '"> ' + this.nombre + ' </option>').appendTo('#categoriaN');
          });
      }
  });

}

function ListarCategoriasM(categoria){

$('option', '#categoriaM').remove();
$('<option>Elige una opción</option>').appendTo('#categoriaM');
  $.ajax({
      url: './dao/categoriasList.php',
      dataType: 'json',
      success: function (data) {
          $.each(data, function () {
            if (categoria===this.nombre){
              $('<option value="' + this.nombre + '" selected> ' + this.nombre + ' </option>').appendTo('#categoriaM');}
              else{$('<option value="' + this.nombre + '"> ' + this.nombre + ' </option>').appendTo('#categoriaM');}
          });
      }
  });
}
