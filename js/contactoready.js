$(document).ready(function () {
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
  $('.emailbutton').on('click',enviarEmailContacto);
});
