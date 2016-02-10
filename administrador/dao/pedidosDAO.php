<?php
include '../bd/conexion.php';
mysql_select_db('goserver') or die('No se pudo seleccionar la base de datos');
// Realizar una consulta MySQL

if (strcmp($_POST['buttonformulario'], 'Borrar Pedidos') == 0) {

    $sql = "delete from pedidos where Pagado='NO'";
                $retval = mysql_query( $sql, $link );

                if(! $retval ) {
                  die('Error Generado: No se ha podido borrar los pedidos incompletos.');
                  // die('Error Generado: ' . mysql_error());
                }
                echo "Se ha borrado correctamente.";
}
mysql_close();
?>
