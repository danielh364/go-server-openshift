<?php


require_once('./PHPMailer/class.phpmailer.php');

//Create a new PHPMailer instance
$mail = new PHPMailer;
$mail->CharSet="UTF-8";
//Set who the message is to be sent from
$mail->setFrom('daniel_mostwanted364@hotmail.com');
//Set an alternative reply-to address
$mail->addReplyTo('danielhdz364@gmail.com');
//Set who the message is to be sent to
$mail->addAddress('danielhdz364@gmail.com');
//Set the subject line
$mail->Subject = 'PHPMailer mail() test';
//Read an HTML message body from an external file, convert referenced images to embedded,
//convert HTML into a basic plain-text alternative body
$mail->msgHTML("contenido...");
//Replace the plain text body with one created manually
$mail->AltBody = 'This is a plain-text message body';
//Attach an image file


//send the message, check for errors
if (!$mail->send()) {
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
    echo "Message sent!";
}
?>
