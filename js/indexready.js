$(document).ready(function () {
    $.cookieBar();
    $('.identificate').on('click',openLoginModal);
    $('.registrarse').on('click',openRegisterModal);
    $('.loginboton').on('click',loginAjax);
    $('.botonregistro').on('click',registro);
    $('.funcionmodalcarrito').on('click',CarritoModal);
    $('.carritodrop').on('click',  function () {
      desplegablecarrito();
      CerrarModal();
    });
    $('.loginform').on('click',showLoginForm);
    $('.registerform').on('click',showRegisterForm);

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
              var marco = Math.floor($(window).scrollTop() / 400);
              alert ("marco:"+marco);
              marco = (marco - 1) *400;
  			$('body,html').animate({
  				scrollTop: marco+"px"
  			}, 800);
  			return false;
  		});

          $('#arrow-down').click(function () {
              var marco = Math.floor($(window).scrollTop() / 400);
              marco = (marco + 1 ) *400;
  			$('body,html').animate({
  				scrollTop: marco+"px"
  			}, 800);
  			return false;
  		});
  	});

  });
