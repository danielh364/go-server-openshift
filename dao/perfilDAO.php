<?php

session_start();
$usuario = $_SESSION['usuario'];
$pass = $_SESSION['password'];
$nombre = $_SESSION['nombre'];
$apellidos = $_SESSION['apellidos'];
$email = $_SESSION['email'];

$cliente[0] = array("usuario" => $usuario, "nombre" => $nombre, "apellidos" => $apellidos, "password" => $pass, "email" => $email);
echo json_encode($cliente);
?>
