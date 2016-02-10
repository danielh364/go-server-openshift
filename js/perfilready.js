$(document).ready(function () {
    comprobarsession();
    verPerfil();
    carrito = JSON.parse(sessionStorage.getItem('tcarrito'));


    $('#facturasusuario').on('click',formularioFactura);
    $('#miperfil').on('click',formularioperfil);
    $('.identificate').on('click',openLoginModal);
    $('.registrarse').on('click',openRegisterModal);
    $('.loginboton').on('click',loginAjax);
    $('.botonregistro').on('click',registro);
    $('.carritodrop').on('click',  function () {
      desplegablecarrito();
      CerrarModal();
    });


    $('.funcionmodalcarrito').on('click',CarritoModal);
    $('.changepassmodal').on('click',openchangepassModal);
    $('.modificarperfil').on('click',modificarPerfil);
    $('.changeuserpass').on('click',cambiarUserPassword);

    $('.perfilredirect').on('click',  function () {
        window.location.href = '/index.html';
    });
    
    $('.loginform').on('click',showLoginForm);
    $('.registerform').on('click',showRegisterForm);

});


function formularioperfil() {
    document.getElementById("formularioperfil").style.display = 'block';
    document.getElementById("facturas").style.display = 'none';

}

function formularioFactura() {
    document.getElementById("formularioperfil").style.display = 'none';
    document.getElementById("facturas").style.display = 'block';
    verfacturas();

}

function verfacturas() {
  var divfactura = document.getElementById('facturas');
  divfactura.innerHTML = "";
  $('<p align=center><h4 align=center>Facturas</h4></p>').appendTo('#facturas');

    $.ajax({
        type: 'GET',
        url: 'dao/facturasDAO.php',
        dataType: 'json',
        success: function (data) {
            $.each(data, function () {
                $('<p align=center><label> &nbsp;&nbsp;Id Pedido:&nbsp;&nbsp;</label> ' + this.idPedido + '<label> &nbsp;&nbsp; Fecha: &nbsp;&nbsp;  </label>' + this.Fecha + ' <label> &nbsp;&nbsp;Total: &nbsp;&nbsp;  </label> ' + this.Total + ' € &nbsp;&nbsp; &nbsp;&nbsp;<a href="#" onclick="ImprimirFactura(' + this.idPedido + ');"> <img id="imgfactura" src="img/pdf_ico.gif" alt="Facturas"> </a> </p>').appendTo('#facturas');
            });
        },error: function (data) {
                    $('<p align=center>No has realizado ninguna compra. </p>').appendTo('#facturas');
              }
    });
}


function ImprimirFactura(numero) {
    $.ajax({
        type: 'GET',
        url: 'dao/detallepedidoDAO.php',
        data: 'idpedido=' + numero,
        dataType: 'json',
        success: function (data) {
            arraydividir = data[0].toString();
            res = arraydividir.split(",");
            fecha = res[3];
            total = res[4];
            usuario = res[5];
            doc = new jsPDF('p', 'pt');

            doc.setFontSize(22);
            doc.setFontStyle('bold');
            doc.text(250, 25, 'Factura');
            doc.setFontSize(11);
            doc.text(430, 50, 'Empresa:');
            doc.setFontStyle('normal');
            doc.text(483, 50, 'Go Server');
            doc.setFontStyle('bold');
            doc.text(450, 65, 'CIF:');
            doc.setFontStyle('normal');
            doc.text(475, 65, 'B73347494');
            doc.setFontStyle('bold');
            doc.text(430, 79, 'Fecha:');
            doc.setFontStyle('normal');
            doc.text(475, 79, fecha);
            doc.setFontStyle('bold');
            doc.text(430, 93, 'Comprador:');
            doc.setFontStyle('normal');
            doc.text(500, 93, usuario);

            var columns = ["Titulo", "Unidades", "Precio"];
            var rows = data;
            doc.autoTable(columns, rows, {
                startY: 120,
                pageBreak: 'avoid'
            });
            var columns1 = ["Total"];
            var rows1 = [
                [total]
            ];
            doc.autoTable(columns1, rows1, {
                startY: doc.autoTableEndPosY() + 30,
                pageBreak: 'avoid',
                margin: {left: 450}
            });
            doc.save('Factura -' + fecha + '.pdf');
        }
    });
}
