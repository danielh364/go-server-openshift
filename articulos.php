<?php
include './bd/conexion.php';
mysql_select_db("goserver") or die('No se pudo seleccionar la base de datos');
// Realizar una consulta MySQL
$categoria = $_GET['categoria'];
$query = 'SELECT * FROM articulos where categoria="' . $categoria . '";';
$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
$i = 0;
while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {

    $articulos[$i] = array("categoria" => $line['categoria'], "codigo" => $line['idarticulo'], "titulo" => $line['titulo'], "precio" => $line['precio'], "stock" => $line['stock'], "imagen" => $line['imagen'], "descripcion" => $line['descripcion']);
    $i++;
}
// Liberar resultados
mysql_free_result($result);
// Cerrar la conexión
mysql_close($link);
echo json_encode($articulos);
?>
