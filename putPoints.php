<?php

$dbName = 'andre';
$connection = mysql_connect('127.0.0.1', 'root', '') or die("Could not connect.");
// Selecting DB
mysql_select_db($dbName, $connection);

$i = 1;
while ($i <= 14){

	$basePoints1 = $_GET['punkte'.$i.''];
	if ($basePoints1 == 12) {
		$basePoints1 = 12.01;
	} elseif ($basePoints1 == 10) {
		$basePoints1 = 10.001;
	} elseif ($basePoints1 == 8) {
		$basePoints1 = 8.0001;
	} elseif ($basePoints1 == 7) {
		$basePoints1 = 7.00001;
	}

	$basePoints2 = $_GET['punkte2t'.$i.''];
	if ($basePoints2 == 12) {
		$basePoints2 = 12.01;
	} elseif ($basePoints2 == 10) {
		$basePoints2 = 10.001;
	} elseif ($basePoints2 == 8) {
		$basePoints2 = 8.0001;
	} elseif ($basePoints2 == 7) {
		$basePoints2 = 7.00001;
	}

	$insertSite_sql = 'UPDATE tants SET punktid = (punktid + '.$basePoints1. '), punktid2t = (punktid2t + '.$basePoints2. ') WHERE id ='.$_GET['id'.$i.'']. '';
	$insertSite = mysql_query($insertSite_sql) or die(mysql_error());
	$i++;
}

mysql_close($connection);
?>