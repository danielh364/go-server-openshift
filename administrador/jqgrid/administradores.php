<?php
include '../bd/conexion.php';
mysql_select_db("goserver") or die("Error connecting to db.");

$page = $_GET['page'];
$limit = $_GET['rows'];
$sidx = $_GET['sidx'];
$sord = $_GET['sord'];

if(!$sidx) $sidx =1;

$result = mysql_query("SELECT COUNT(*) AS count FROM administradores");
$row = mysql_fetch_array($result,MYSQL_ASSOC);

$count = $row['count'];
if( $count > 0 && $limit > 0) {
$total_pages = ceil($count/$limit);
} else {
$total_pages = 0;
}
if ($page > $total_pages) $page=$total_pages;
$start = $limit*$page - $limit;
if($start <0) $start = 0;

$SQL = "SELECT * FROM administradores ORDER BY $sidx $sord LIMIT $start , $limit";
$result = mysql_query( $SQL ) or die("Couldn't execute query.".mysql_error());

$i=0;
while($row = mysql_fetch_array($result,MYSQL_ASSOC)) {
	$responce->rows[$i]['id']=$row['usuario'];
	$responce->rows[$i]['cell']=array($row['usuario'],$row['password']);
$i++;
}
$responce->page = $page;
$responce->total = $total_pages;
$responce->records = $count;
echo json_encode($responce);
?>
