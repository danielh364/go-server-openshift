<?php
include 'contactoUsuario.php';

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$mensaje='Nombre:' .$name. '<br><br> Email:<br> '.$email. ' <br><br>Mensaje:<br>'.$message;

require_once('./PHPMailer/class.phpmailer.php');

//Create a new PHPMailer instance
$mail = new PHPMailer;
$mail->CharSet="UTF-8";
//Set who the message is to be sent from
$mail->setFrom('danielhdz364@gmail.com');
//Set who the message is to be sent to
$mail->addAddress('danielhdz364@gmail.com');
//Set the subject line
$mail->Subject = 'Seccion: Contacto';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML($mensaje);
//Replace the plain text body with one created manually
$mail->AltBody = 'This is a plain-text message body';
//Attach an image file
//send the message, check for errors
if (!$mail->send()) {
    echo "Error al enviar el Email";
} else {
    echo "Email Enviado!";
}
?>
