<?php
include '../bd/conexion.php';
mysql_select_db('goserver') or die('No se pudo seleccionar la base de datos');
// Realizar una consulta MySQL

if ($_POST['buttonformulario'] == 'Crear Articulo') {
    $categoria = $_POST['categoria'];
    $titulo = $_POST['titulo'];
    $precio = $_POST['precio'];
    $stock = $_POST['stock'];
    $imagen = $_POST['imagen'];
    $descripcion = $_POST['descripcion'];
    $sql = "select * from articulos where titulo='$titulo'";
    if (!($resul = mysql_query($sql)))
        die(mysql_error());
    if (mysql_num_rows($resul) == 0) {
        $query = "insert into  articulos (categoria, titulo, precio, stock, imagen, descripcion) values ('$categoria' , '$titulo', '$precio', '$stock', '$imagen', '$descripcion')";
        $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
        echo "Articulo registrado correctamente";
    } else {
        echo "El articulo ya existe";
        mysql_free_result($resul);
    }
}


if (strcmp($_POST['buttonformulario'], 'Modificar Articulo') == 0) {
  $idarticulo = $_POST['idarticulo'];
  $categoria = $_POST['categoria'];
  $titulo = $_POST['titulo'];
  $precio = $_POST['precio'];
  $stock = $_POST['stock'];
  $imagen = $_POST['imagen'];
  $descripcion = $_POST['descripcion'];
    $sql = "update articulos set categoria='$categoria',titulo='$titulo', precio='$precio', stock='$stock', imagen='$imagen', descripcion='$descripcion' where idarticulo='$idarticulo'";
    $retval = mysql_query( $sql, $link );
    if(! $retval ) {
      die('Error Generado: No se ha podido actualizar el articulo, porque el tituto ya existe.');
      // die('Error Generado: ' . mysql_error());
    }
    echo "Articulo actualizado con éxito.";
}

if (strcmp($_POST['buttonformulario'], 'Borrar Articulo') == 0) {

    $idarticulo = $_POST['idarticulo'];
    $sql = "delete from articulos where idarticulo='$idarticulo'";
                $retval = mysql_query( $sql, $link );
                if(! $retval ) {
                   die('Error Generado: No se ha podido borrar articulo porque esta presente en algun pedido.');
                }
                echo "Se ha borrado correctamente.";
}
mysql_close();
?>
