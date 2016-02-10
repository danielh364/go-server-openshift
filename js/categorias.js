$(document).ready(function () {
    comprobarsession();
    $.ajax({
        url: 'categorias.php',
        dataType: 'json',
        success: function (data) {
            $.each(data, function () {

                $('<a href="#" onclick=mostrar_articulos(\'' + this.nombre + '\');>' + this.nombre + '</a> <br/>').appendTo('#categorias');

            });
        }
    });
    mostrar_articulosDestacados();
    $('.identificate').on('click',openLoginModal);
    $('.registrarse').on('click',openRegisterModal);
    $('.loginboton').on('click',loginAjax);
    $('.botonregistro').on('click',registro);
    $('.carritodrop').on('click',  function () {
      desplegablecarrito();
      CerrarModal();
    });
    $('.funcionmodalcarrito').on('click',CarritoModal);
    $('.loginform').on('click',showLoginForm);
    $('.registerform').on('click',showRegisterForm);
});
