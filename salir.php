<?php

include ("seguridad.php");
session_unset();
$s1 = session_destroy();
if ($s1 == true) {
    echo "Se ha cerrado la session";
} else {
    echo "se ha producido un error";
}
?>
