<?php
//$link = mysql_connect('localhost', 'root', '')
$link = mysql_connect('127.12.128.2:3306', 'admin47uTTcP', 'mmGeavbqlwdX')
        or die('No se pudo conectar: ' . mysql_error());
mysql_select_db('goserver') or die('No se pudo seleccionar la base de datos');
// Realizar una consulta MySQL

    $usuario = $_POST['user'];
    $pass = $_POST['password'];

    $sql = "select usuario,password from administradores where usuario='$usuario' and password=md5('$pass')";
    if (!($resul = mysql_query($sql)))
        die(mysql_error());
    $arr_resul = mysql_fetch_array($resul);
    if (mysql_num_rows($resul) == 0) {
        echo "Combinación de Usuario/Contraseña incorrecta";
    } elseif (mysql_num_rows($resul) == 1) {
        session_start();
        $_SESSION['administrador'] = true;
        $_SESSION['usuarioadmin'] = $arr_resul[0];
        $_SESSION['passwordadmin'] = $arr_resul[1];

        echo "Administrador logeado correctamente";
    } else {
        echo "Error Generado";
    }

    mysql_free_result($resul);

mysql_close();
?>
