<?php
include '/bd/conexion.php';
mysql_select_db("goserver") or die('No se pudo seleccionar la base de datos');
// Realizar una consulta MySQL
$query = 'SELECT * FROM categorias';
$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
$i = 0;
while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $categorias[$i] = array("nombre" => $line['nombre'], "codigo" => $line['idcategoria']);
    $i++;
}
// Liberar resultados
mysql_free_result($result);
// Cerrar la conexión
mysql_close($link);
echo json_encode($categorias);
?>
