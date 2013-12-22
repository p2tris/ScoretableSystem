<?php

// DB name in Db
$dbName = "andre";
// DB adress, user, password in DB
$connection = mysql_connect('127.0.0.1', 'root', '') or die("Could not connect.");
// Selecting DB
mysql_select_db($dbName, $connection);

//insert from first cat points from 1 to 17
$sql1="SELECT * FROM tants ORDER BY punktid ASC";

$result1 = mysql_query($sql1);

$punktid1 = 1;

while($row = mysql_fetch_array($result1))
{
	$insertSite_sql = 'UPDATE tants SET final = '.$punktid1.' WHERE id ='.$row['id'].' ;';
	$insertSite = mysql_query($insertSite_sql) or die(mysql_error());
	$punktid1++;
}

//insert from second cat points from 1 to 17
$sql2="SELECT * FROM tants ORDER BY punktid2t ASC";

$result2 = mysql_query($sql2);

$punktid2 = 1;

while($row2 = mysql_fetch_array($result2))
{
	
	$insertSite_sql2 = 'UPDATE tants SET final = (final + '.$punktid2.') WHERE id ='.$row2['id'].' ;';
	$insertSite2 = mysql_query($insertSite_sql2) or die(mysql_error());
	$punktid2++;
}

// Final table that actually gets shown
$sql="SELECT * FROM tants ORDER BY final ASC";

$result = mysql_query($sql);

$responses = array();

while($row = mysql_fetch_array($result))
{
	
	$response = array(
        'id' => $row['id'],
        'koht' => $row['koht'],
        'finals' => $row['final']
    );

    $responses[] = $response;
	
}

//give json of the table
echo json_encode($responses);

mysql_close($connection);
?>