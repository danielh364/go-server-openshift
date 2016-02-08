var arrow=1;
$(document).ready(function () {
    $.cookieBar();
    $('.identificate').click(openLoginModal);
    $('.registrarse').click(openRegisterModal);
    $('.loginboton').click(loginAjax);
    $('.botonregistro').click(registro);
    $( ".carritodrop" ).click(function() {
      desplegablecarrito();
      CerrarModal();
});
    $('.funcionmodalcarrito').click(CarritoModal);
    comprobarsession();

     jQuery("#arrow-up").click( function(){
       arrowscroll();
     });

     jQuery("#arrow-down").click( function(){
       arrowscroll();
     });


  });

function arrowscroll(){
arrow++;
  if(arrow===1){
      $("#arrow-up").addClass("disabled");
  }
  if(arrow===3){
      $("#arrow-down").addClass("disabled");
  }
  $('html, body').animate({
       scrollTop: $("#slide-"+arrow).offset().top
   }, 2000);
}
