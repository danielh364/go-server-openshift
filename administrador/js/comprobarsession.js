$(document).ready(function () {
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
