<?php

include '../bd/conexion.php';
mysql_select_db('goserver') or die('No se pudo seleccionar la base de datos');
// Realizar una consulta MySQL

session_start();
$usuario = $_SESSION['usuario'];
$query = "select idPedido,Fecha,Total from pedidos where Usuario='$usuario'";
$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
  if (mysql_num_rows($result) > 0) {

$i = 0;
while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $pedidos[$i] = array("idPedido" => $line['idPedido'], "Fecha" => $line['Fecha'], "Total" => $line['Total']);
    $i++;
}
echo json_encode($pedidos);
}else {
    echo "No has realizado ninguna compra.";
}
// Liberar resultados
mysql_free_result($result);
// Cerrar la conexión
mysql_close($link);

?>
