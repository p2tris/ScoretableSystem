<?php

$dbName = 'andre';
$connection = mysql_connect('127.0.0.1', 'root', '') or die("Could not connect.");
// Selecting DB
mysql_select_db($dbName, $connection);

$i = 1;
while ($i <= 14){

	$komake = 0.0;

	$basePoints1 = $_GET['punkte'.$i.''];
	if ($basePoints1 == 12) {
		$basePoints1 = 12.01;
		$komake = 0.01;
	} elseif ($basePoints1 == 10) {
		$komake = 0.001;
		$basePoints1 = 10.001;
	} elseif ($basePoints1 == 8) {
		$komake = 0.0001;
		$basePoints1 = 8.0001;
	} elseif ($basePoints1 == 7) {
		$komake = 0.00001;
		$basePoints1 = 7.00001;
	}

	$basePoints2 = $_GET['punkte2t'.$i.''];
	if ($basePoints2 == 12) {
		$komake += 0.01;
		$basePoints2 = 12.01;
	} elseif ($basePoints2 == 10) {
		$komake += 0.001;
		$basePoints2 = 10.001;
	} elseif ($basePoints2 == 8) {
		$komake += 0.0001;
		$basePoints2 = 8.0001;
	} elseif ($basePoints2 == 7) {
		$komake += 0.00001;
		$basePoints2 = 7.00001;
	}

	$insertSite_sql = 'UPDATE tants SET punktid = (punktid + '.$basePoints1. '), punktid2t = (punktid2t + '.$basePoints2. '), koma = (koma + '.$komake.') WHERE id ='.$_GET['id'.$i.'']. '';
	$insertSite = mysql_query($insertSite_sql) or die(mysql_error());
	$i++;
}

mysql_close($connection);
?>