<?php
include '../bd/conexion.php';
mysql_select_db('goserver') or die('No se pudo seleccionar la base de datos');
// Realizar una consulta MySQL

if ($_POST['buttonformulario'] == 'Crear Administrador') {
    $usuario = $_POST['usuario'];
    $pass = $_POST['password'];

    $sql = "select * from administradores where usuario='$usuario'";
    if (!($resul = mysql_query($sql)))
        die(mysql_error());
    if (mysql_num_rows($resul) == 0) {
        $query = "insert into  administradores (usuario, password) values ('$usuario' , md5('$pass'))";
        $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());

        echo "Administrador registrado correctamente";
    } else {
        echo "El administrador ya existe";
        mysql_free_result($resul);
    }
}


if (strcmp($_POST['buttonformulario'], 'Cambiar Contraseña') == 0) {
    $usuario = $_POST['usuario'];
    $pass = $_POST['password1'];
    $sql = "update administradores set password=MD5('$pass') where usuario='$usuario'";
    $retval = mysql_query( $sql, $link );

    if(! $retval ) {
      die('Error Generado: No se ha podido Actualizar la contraseña');
      // die('Error Generado: ' . mysql_error());
    }
    echo "Se ha actualizado la contraseña correctamente";
}


if (strcmp($_POST['buttonformulario'], 'Borrar Administrador') == 0) {
  $sql = "select * from administradores";
  if (!($resul = mysql_query($sql)))
      die(mysql_error());
  if (mysql_num_rows($resul) >1) {
    $usuario = $_POST['usuario'];
    $sql = "delete from administradores where usuario='$usuario'";
                $retval = mysql_query( $sql, $link );
                if(! $retval ) {
                  die('Error Generado: No se ha podido borrar el cliente');
                  // die('Error Generado: ' . mysql_error());
                }
                echo "Se ha borrado correctamente.";
      } else {
                  echo "No se puede borrar el ultimo administrador.";
                  mysql_free_result($resul);
      }
}
mysql_close();
?>
