<?php

//$link = mysql_connect('localhost', 'root', '')
$link = mysql_connect('127.12.128.2:3306', 'admin47uTTcP', 'mmGeavbqlwdX')
        or die('No se pudo conectar: ' . mysql_error());
mysql_select_db('goserver') or die('No se pudo seleccionar la base de datos');
// Realizar una consulta MySQL
$query = 'SELECT * FROM articulosdestacados';
$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
$i = 0;
while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $articulos_destacados[$i] = array("categoria" => $line['categoria'], "codigo" => $line['idarticulo'], "titulo" => $line['titulo'], "precio" => $line['precio'], "stock" => $line['stock'], "imagen" => $line['imagen'], "descripcion" => $line['descripcion']);
    $i++;
}
// Liberar resultados
mysql_free_result($result);
// Cerrar la conexión
mysql_close($link);

echo json_encode($articulos_destacados);
?>
