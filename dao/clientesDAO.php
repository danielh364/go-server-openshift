<?php

include '../bd/conexion.php';
mysql_select_db('goserver') or die('No se pudo seleccionar la base de datos');
// Realizar una consulta MySQL

if ($_POST['buttonformulario'] == 'Crear Cuenta') {
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
// Cerrar la conexión
        echo "Usuario registrado correctamente";
    } else {
        echo "El usuario ya existe";
        mysql_free_result($resul);
    }
}

if (strcmp($_POST['buttonformulario'], 'Acceder Cuenta') == 0) {

    $usuario = $_POST['usuario'];
    $pass = $_POST['password'];


    $sql = "select usuario,password,nombre,email,apellidos from clientes where usuario='$usuario' and password=md5('$pass')";
    if (!($resul = mysql_query($sql)))
        die(mysql_error());
    $arr_resul = mysql_fetch_array($resul);
    if (mysql_num_rows($resul) == 0) {
        echo "Combinación de Usuario/Contraseña incorrecta";
    } elseif (mysql_num_rows($resul) == 1) {
        session_start();
        $_SESSION['validado'] = true;
        $_SESSION['usuario'] = $arr_resul[0];
        $_SESSION['password'] = $arr_resul[1];
        $_SESSION['nombre'] = $arr_resul[2];
        $_SESSION['email'] = $arr_resul[3];
        $_SESSION['apellidos'] = $arr_resul[4];
        echo "Usuario logeado correctamente";
    } else {
        echo "Error Generado";
    }

    mysql_free_result($resul);
}


if (strcmp($_POST['buttonformulario'], 'Cambiar Contraseña') == 0) {
    session_start();
    $usuario = $_SESSION['usuario'];
    $pass = $_POST['password1'];
    $sql = "update clientes set password=MD5('$pass') where usuario='$usuario'";
    if (!($resul = mysql_query($sql)))
        die(mysql_error());
    $_SESSION['password'] = $pass;
    echo "Contraseña Cambiada con Éxito";
}


if (strcmp($_POST['buttonformulario'], 'Guardar Cambios') == 0) {
    session_start();
    $usuario = $_SESSION['usuario'];
    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $email = $_POST['email'];

    $sql = "update clientes set nombre='$nombre',apellidos='$apellidos', email='$email' where usuario='$usuario'";
    if (!($resul = mysql_query($sql)))
        die(mysql_error());
    $_SESSION['nombre'] = $nombre;
    $_SESSION['apellidos'] = $apellidos;
    $_SESSION['email'] = $email;
    echo "Datos Actualizados Con Éxito";
}
mysql_close();
?>
