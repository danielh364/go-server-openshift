<?php

include '../bd/conexion.php';
mysql_select_db('goserver') or die('No se pudo seleccionar la base de datos');

session_start();
$usuario = $_SESSION['usuario'];

$carrito = $_POST['datos'];
$ocarrito = new stdClass();
$ocarrito = json_decode($carrito);
$carritoFecha = $ocarrito->fecha;
$carritoTotal = $ocarrito->total;

$query = "insert into  pedidos (usuario, fecha, total) values ('$usuario' , '$carritoFecha', '$carritoTotal')";
$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
// Cerrar la conexión


foreach ($ocarrito->articulos as $articulo) {

    $sql = "insert into  detallepedidos (idpedido, idarticulo, unidades,precio) select (select MAX(idpedido) from pedidos where usuario='$usuario' and total='$carritoTotal') as idpedido ,(select idarticulo from articulos where titulo='$articulo->titulo')  as idarticulo,(select '$articulo->unidades') as unidades, (select '$articulo->precio')  as precio from dual";
    if (!($resul = mysql_query($sql)))
        die(mysql_error());
}

mysql_close($link);

?>
