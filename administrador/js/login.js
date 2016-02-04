function loginAjax() {
    var comprobar = true;

    var usuario = document.getElementById('user').value;
    var password = document.getElementById('password').value;

    if (usuario == "" && password == "" && comprobar == true) {
        sweetAlert("Error", "No pueden estar todos los campos vacios", "error");
        comprobar = false;
    }
    if (usuario == "" && comprobar == true) {
      sweetAlert("Error", "Usuario: no puede estar vacio el campo.", "error");
        comprobar = false;
    }
    if (password == "" && comprobar == true) {
      sweetAlert("Error", "Contraseña: no puede estar vacio el campo.", "error");
        comprobar = false;
    }
    if (comprobar == true) {
        var dataString = $('#formulariologin').serialize();
        $.ajax({
            type: "POST",
            url: "./dao/administradorDAO.php",
            data: dataString,
            success: function (data) {
              if(data==="Administrador logeado correctamente"){
                swal("", "Has accedido correctamente al sistema.", "success");
                setTimeout("window.location.href=\"administrador.php\"",1000);
             }else{
                sweetAlert("Error", data, "error");
                }
          }
        });
    }
}

function cerrarsession() {
    $.ajax({
        type: "POST",
        url: "salir.php",
        success: function (data) {
          swal("", ""+data+"", "success");
          setTimeout("window.location.href=\"index.html\"",1000);
        },  error: function (XMLHttpRequest, textStatus, errorThrown) {
                sweetAlert("Error", "Error Generado.", "error");
          }
    });
}
