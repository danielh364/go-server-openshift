<?php
include '../bd/conexion.php';
mysql_select_db('goserver') or die('No se pudo seleccionar la base de datos');
// Realizar una consulta MySQL

if ($_POST['buttonformulario'] == 'Crear Categoria') {
    $categoria = $_POST['nombrecategoria'];
    $sql = "select * from categorias where nombre='$categoria'";
    if (!($resul = mysql_query($sql)))
        die(mysql_error());
    if (mysql_num_rows($resul) == 0) {
        $query = "insert into  categorias (nombre) values ('$categoria')";
        $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
        echo "Categoria creada correctamente";
    } else {
        echo "La categoria ya existe";
        mysql_free_result($resul);
    }
}

if (strcmp($_POST['buttonformulario'], 'Modificar Categoria') == 0) {
    $idcategoria = $_POST['idcategoria'];
    $categoria = $_POST['nombrecategoria'];
    $sql = "update categorias set nombre='$categoria' where idcategoria='$idcategoria'";
    $retval = mysql_query( $sql, $link );

    if(! $retval ) {
      die('Error Generado: No se ha podido actualizar la categoria porque tiene productos asociados.');
      // die('Error Generado: ' . mysql_error());
    }
    echo "Se ha actualizado correctamente.";
}


if (strcmp($_POST['buttonformulario'], 'Borrar Categoria') == 0) {

    $idcategoria = $_POST['idcategoria'];
    $sql = "delete from categorias where idcategoria='$idcategoria'";
                $retval = mysql_query( $sql, $link );

                if(! $retval ) {
                  die('Error Generado: No se ha podido borrar la categoria porque tiene productos asociados.');
                  // die('Error Generado: ' . mysql_error());
                }
                echo "Se ha borrado correctamente.";
}
mysql_close();
?>
