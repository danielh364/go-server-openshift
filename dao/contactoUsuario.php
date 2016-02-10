<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$mensaje='Buenas ' .$name. ' pronto el soporte se pondra en contacto contigo.';;

require_once('./PHPMailer/class.phpmailer.php');

//Create a new PHPMailer instance
$mail2 = new PHPMailer;
$mail2->CharSet="UTF-8";
//Setwho the message is to be sent from
$mail2->setFrom($email);
//Set who the message is to be sent to
$mail2->addAddress($email);
//Set the subject line
$mail2->Subject = 'GoServer Informacion';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail2->msgHTML($mensaje);
//Replace the plain text body with one created manually
$mail2->AltBody = 'This is a plain-text message body';
//Attach an image file
//send the message, check for errors
if (!$mail2->send()) {
} else {
}
?>
