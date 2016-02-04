$(document).ready(function () {
    $('.identificate').click(openLoginModal);
    $('.registrarse').click(openRegisterModal);
    $('.loginboton').click(loginAjax);
    $('.botonregistro').click(registro);
    $( ".carritodrop" ).click(function() {
      desplegablecarrito();
      CerrarModal();
});
    $('.funcionmodalcarrito').click(CarritoModal);
      $('.emailbutton').click(enviarEmailContacto);
});
