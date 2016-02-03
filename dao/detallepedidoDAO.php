<?php
session_start();
$usuario = $_SESSION['usuario'];
//$link = mysql_connect('localhost', 'root', '')
$link = mysql_connect('127.12.128.2:3306', 'admin47uTTcP', 'mmGeavbqlwdX')
        or die('No se pudo conectar: ' . mysql_error());
mysql_select_db('goserver') or die('No se pudo seleccionar la base de datos');
// Realizar una consulta MySQL
$idpedido = $_GET['idpedido'];
$sql = "select * from pedidos where usuario='$usuario' and idpedido='$idpedido'";
if (!($resul = mysql_query($sql)))
    die(mysql_error());
if (mysql_num_rows($resul) == 1) {
$query = "SELECT d.idPedido, a.titulo , d.unidades  ,d.precio, p.Fecha, p.Total FROM pedidos p,detallepedidos d ,articulos a WHERE  d.idPedido='$idpedido' and d.idarticulo=a.idarticulo and p.idPedido=d.idPedido";
$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
$i = 0;
while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $detallepedido[$i] = array($line['titulo'], $line['unidades'], $line['precio'].' €' , $line['Fecha'], $line['Total'].' €', $usuario);
    $i++;
}
}else{
echo "Se ha generado un error.";
}
// Liberar resultados
mysql_free_result($result);
// Cerrar la conexión
mysql_close($link);
echo json_encode($detallepedido);
?>
