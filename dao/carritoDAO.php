<?php

include '../bd/conexion.php';
mysql_select_db('goserver') or die('No se pudo seleccionar la base de datos');

session_start();
$usuario = $_SESSION['usuario'];

$carrito = $_POST['datos'];
$ocarrito = new stdClass();
$ocarrito = json_decode($carrito);
$carritoFecha = $ocarrito->fecha;
$carritoTotal = $ocarrito->total;

$query = "insert into  pedidos (usuario, fecha, total) values ('$usuario' , '$carritoFecha', '$carritoTotal')";
$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());
// Cerrar la conexión
foreach ($ocarrito->articulos as $articulo) {

    $sql = "insert into  detallepedidos (idpedido, idarticulo, unidades,precio) select (select MAX(idpedido) from pedidos where usuario='$usuario' and total='$carritoTotal') as idpedido ,(select idarticulo from articulos where titulo='$articulo->titulo')  as idarticulo,(select '$articulo->unidades') as unidades, (select '$articulo->precio')  as precio from dual";
    if (!($resul = mysql_query($sql)))
        die(mysql_error());
}


$query = "select MAX(idpedido) as id from pedidos where usuario='$usuario' and total='$carritoTotal'";
$result = mysql_query($query) or die('Consulta fallida: ' . mysql_error());

while ($line = mysql_fetch_array($result, MYSQL_ASSOC)) {
    $idp= $line['id'];
}

$cuentaOrigen = $ocarrito->ncuenta;
$cuentaDestino ='20002000749876543211';
$importe = $ocarrito->total;
$concepto = 'GoServer Servicio Nº '.$idp;
$pin = '2045';

$data = json_encode(array("cuentaOrigen" => "$cuentaOrigen", "cuentaDestino" => "$cuentaDestino","importe" => "$importe", "concepto" => "$concepto", "pin" => "$pin"));

$ch = curl_init('http://banco-samuvl.rhcloud.com/banktastic-banco-api/api/transaccion');

curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, false);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
//execute post
$result = curl_exec($ch);

if(!curl_errno($ch))
{
 $info = curl_getinfo($ch);

if($info['http_code']==200){

  $sql = "update pedidos set Pagado='SI' where idPedido='$idp'";
  if (!($resul = mysql_query($sql)))
      die(mysql_error());

  mysql_close($link);
echo "Pago realizado con exito";
}else{
  echo "Se ha generado un error al realizar el pago, Consulte con su Banco.";
}
}
//close connection
curl_close($ch);
?>
