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

    $("#arrow-up").hide();
  	//$("#arrow-down").hide();

  	// fade in #arrow-up
  	$(function () {
          var altura = $(document).height();
  		$(window).scroll(function () {
  			if ($(this).scrollTop() > 100) {
  				$('#arrow-up').fadeIn();
  			} else {
  				$('#arrow-up').fadeOut();
  			};

              if ($(this).scrollTop() + $(this).height() == altura) {
  				$('#arrow-down').fadeOut();
  			} else {
  				$('#arrow-down').fadeIn();
  			};
  		});


  		// scroll body to 0px on click
  		$('#arrow-up').click(function () {
              var marco = Math.floor($(window).scrollTop() / 800);
              marco = (marco) *600;
  			$('body,html').animate({
  				scrollTop: marco+"px"
  			}, 800);
  			return false;
  		});

          $('#arrow-down').click(function () {
              var marco = Math.floor($(window).scrollTop() / 800);
              marco = (marco + 2 ) *600;
  			$('body,html').animate({
  				scrollTop: marco+"px"
  			}, 800);
  			return false;
  		});
  	});



  });
