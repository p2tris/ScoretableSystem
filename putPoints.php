<?php

$dbName = 'andre';
$connection = mysql_connect('127.0.0.1', 'root', '') or die("Could not connect.");
// Selecting DB
mysql_select_db($dbName, $connection);

$i = 1;
while ($i <= 17){

	$basePoints1 = $_GET['punkte'.$i.''];
	if ($basePoints1 == 12) {
		$basePoints1 = 12.01;
	} elseif ($basePoints1 == 11) {
		$basePoints1 = 11.001;
	} elseif ($basePoints1 == 10) {
		$basePoints1 = 10.0001;
	} elseif ($basePoints1 == 9) {
		$basePoints1 = 9.00001;
	}

	$basePoints2 = $_GET['punkte2t'.$i.''];
	if ($basePoints2 == 12) {
		$basePoints2 = 12.01;
	} elseif ($basePoints2 == 11) {
		$basePoints2 = 11.001;
	} elseif ($basePoints2 == 10) {
		$basePoints2 = 10.0001;
	} elseif ($basePoints2 == 9) {
		$basePoints2 = 9.00001;
	}

	$insertSite_sql = 'UPDATE tants SET punktid = (punktid + '.$basePoints1. '), punktid2t = (punktid2t + '.$basePoints2. ') WHERE id ='.$_GET['id'.$i.'']. '';
	$insertSite = mysql_query($insertSite_sql) or die(mysql_error());
	$i++;
}

mysql_close($connection);
?>