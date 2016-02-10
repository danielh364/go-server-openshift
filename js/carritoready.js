$(document).ready(function () {
    comprobarsession();
    carrito = JSON.parse(sessionStorage.getItem('tcarrito'));
    tablacarrito();

    $('.identificate').on('click',openLoginModal);
    $('.registrarse').on('click',openRegisterModal);
    $('.loginboton').on('click',loginAjax);
    $('.botonregistro').on('click',registro);
    $('.carritodrop').on('click',  function () {
      desplegablecarrito();
      CerrarModal();
    });
    $('.funcionmodalcarrito').on('click',CarritoModal);
    $('#botoncartpago').on('click',pagarUsuarioRegistrado);
    $('.curlpago').on('click',asignaryenviarpago);

    $('.loginform').on('click',showLoginForm);
    $('.registerform').on('click',showRegisterForm);
});
