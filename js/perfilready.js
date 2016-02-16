$(document).ready(function () {
    comprobarsession();
    verPerfil();
    carrito = JSON.parse(sessionStorage.getItem('tcarrito'));


    $('#facturasusuario').on('click', formularioFactura);
    $('#miperfil').on('click', formularioperfil);
    $('.identificate').on('click', openLoginModal);
    $('.registrarse').on('click', openRegisterModal);
    $('.loginboton').on('click', loginAjax);
    $('.botonregistro').on('click', registro);
    $('.carritodrop').on('click', function () {
        desplegablecarrito();
        CerrarModal();
    });


    $('.funcionmodalcarrito').on('click', CarritoModal);
    $('.changepassmodal').on('click', openchangepassModal);
    $('.modificarperfil').on('click', modificarPerfil);
    $('.changeuserpass').on('click', cambiarUserPassword);

    $('.perfilredirect').on('click', function () {
        window.location.href = '/index.html';
    });

    $('.loginform').on('click', showLoginForm);
    $('.registerform').on('click', showRegisterForm);

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
        }, error: function (data) {
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

            var imgData = 'data:image/jpeg;base64,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';
            doc = new jsPDF('p', 'pt');
            doc.addImage(imgData, 'JPEG', 35, 30, 70, 70);
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
