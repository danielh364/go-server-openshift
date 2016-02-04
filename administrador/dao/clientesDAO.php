<?php
include '../bd/conexion.php';
mysql_select_db('goserver') or die('No se pudo seleccionar la base de datos');
// Realizar una consulta MySQL

if ($_POST['buttonformulario'] == 'Crear Cliente') {
    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $usuario = $_POST['usuario'];
    $pass = $_POST['password'];
    $email = $_POST['email'];
    $sql = "select * from clientes where usuario='$usuario'";
    if (!($resul = mysql_query($sql)))
        die(mysql_error());
    if (mysql_num_rows($resul) == 0) {
        $query = "insert into  clientes (usuario, password, apellidos, nombre, email) values ('$usuario' , md5('$pass'), '$apellidos', '$nombre', '$email')";
        $result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());

        echo "Usuario registrado correctamente";
    } else {
        echo "El usuario ya existe";
        mysql_free_result($resul);
    }
}


if (strcmp($_POST['buttonformulario'], 'Cambiar Contraseña') == 0) {
    $usuario = $_POST['usuario'];
    $pass = $_POST['password1'];
    $sql = "update clientes set password=MD5('$pass') where usuario='$usuario'";
    $retval = mysql_query( $sql, $link );

    if(! $retval ) {
      die('Error Generado: No se ha podido Actualizar la contraseña');
      // die('Error Generado: ' . mysql_error());
    }
    echo "Se ha actualizado la contraseña correctamente";
}


if (strcmp($_POST['buttonformulario'], 'Modificar Cliente') == 0) {

    $usuario = $_POST['usuario'];
    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $email = $_POST['email'];

    $sql = "update clientes set nombre='$nombre',apellidos='$apellidos', email='$email' where usuario='$usuario'";
    $retval = mysql_query( $sql, $link );

    if(! $retval ) {
      die('Error Generado: No se ha podido actualizar los datos');
      // die('Error Generado: ' . mysql_error());
    }
    echo "Datos actualizados Con éxito";
}

if (strcmp($_POST['buttonformulario'], 'Borrar Usuario') == 0) {

    $usuario = $_POST['usuario'];

    $sql = "delete from clientes where usuario='$usuario'";
                $retval = mysql_query( $sql, $link );

                if(! $retval ) {
                  die('Error Generado: No se ha podido borrar el cliente');
                  // die('Error Generado: ' . mysql_error());
                }
                echo "Se ha borrado correctamente.";
}
mysql_close();
?>
