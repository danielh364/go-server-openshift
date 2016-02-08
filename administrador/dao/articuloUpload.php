<?php
if($_FILES['uploadedfile']['type']=="image/png" OR $_FILES['uploadedfile']['type']=="image/jpg" OR $_FILES['uploadedfile']['type']=="image/jpeg"){
  $target_path = "../../img/";
  $target_path = $target_path . basename($_FILES['uploadedfile']['name']); if(move_uploaded_file($_FILES['uploadedfile']['tmp_name'], $target_path)) {
     echo "El archivo ha sido subido.";
  } else{
  echo "Ha ocurrido un error en la subida.";
  }

}
else{
  echo "Solo se pueden subir imagenes, en formato png o jpg.";
}
?>
