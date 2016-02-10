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

    $('.loginform').on('click',showLoginForm);
    $('.registerform').on('click',showRegisterForm);

});
