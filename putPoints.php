<?php

$dbName = 'andre';
$connection = mysql_connect('127.0.0.1', 'root', '') or die("Could not connect.");
// Selecting DB
mysql_select_db($dbName, $connection);

$i = 1;
while ($i <= 17){
	$insertSite_sql = 'UPDATE tants SET punktid = (punktid + '.$_GET['punkte'.$i.'']. '), punktid2t = (punktid2t + '.$_GET['punkte2t'.$i.'']. ') WHERE id ='.$_GET['id'.$i.'']. '';
	$insertSite = mysql_query($insertSite_sql) or die(mysql_error());
	$i++;
}

mysql_close($connection);
?>