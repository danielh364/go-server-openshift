<?php
$para      = 'danielhdz364@gmail.com';
$titulo    = 'El título';
$mensaje   = 'Hola';
$cabeceras = 'From: danielhdz364@gmail.com' . "\r\n" .
    'Reply-To: danielhdz364@gmail.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($para, $titulo, $mensaje, $cabeceras);
?>
