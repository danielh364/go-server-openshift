<?php

session_start();
if (!isset($_SESSION['validado']) || $_SESSION['validado'] == false) {
    header('HTTP/1.0 403 Forbidden');
    exit();
}
?>
