<?php
// the message
$msg = "Prueba";

$msg = wordwrap($msg,1000);

// send email
mail("danielhdz364@gmail.com","Seccion: Contacto",$msg);
?>
