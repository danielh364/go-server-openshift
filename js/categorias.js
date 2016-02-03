$(document).ready(function () {
    comprobarsession();
    $.ajax({
        url: 'categorias.php',
        dataType: 'json',
        success: function (data) {
            $.each(data, function () {

                $('<a href="#" onclick=mostrar_articulos(\'' + this.nombre + '\');>' + this.nombre + '</a> <br/>').appendTo('#categorias');

            });
        }
    });
    mostrar_articulosDestacados();
});
