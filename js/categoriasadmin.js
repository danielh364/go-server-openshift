$(document).ready(function () {

    $.ajax({
        url: 'categoriasadmin.php',
        dataType: 'json',
        success: function (data) {
            $.each(data, function () {

                $('<a href="#">' + this.nombre + '</a> <br/>').appendTo('#categoriasadmin');

            });
        }
    });
});
