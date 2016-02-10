$(document).ready(function () {
  $('.loginadmin').on('click',loginAjax);
  $.ajax({
      type: "POST",
      url: "seguridad.php",
      success: function (data) {
        window.location.href="administrador.php";
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
      }
  });
});
