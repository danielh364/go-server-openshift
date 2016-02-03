<?php
session_start();
if (!isset($_SESSION['administrador']) || $_SESSION['administrador'] == false) {
    header('HTTP/1.0 403 Forbidden');
    exit();
}
?>
