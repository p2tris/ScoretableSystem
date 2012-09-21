<?php

$dbName = 'andre';
$connection = mysql_connect('localhost', 'root', '') or die("Could not connect.");
// Selecting DB
mysql_select_db($dbName, $connection);

$i = 1;
while ($i <= 17){
	$insertSite_sql = 'UPDATE tants SET punktid = (punktid + '.$_GET['punkte'.$i.'']. ') WHERE id ='.$_GET['id'.$i.'']. '';
	$insertSite = mysql_query($insertSite_sql) or die(mysql_error());
	$i++;
}



mysql_close($connection);
?>