<?php

// DB name in Db
$dbName = "andre";
// DB adress, user, password in DB
$connection = mysql_connect('localhost', 'root', '') or die("Could not connect.");
// Selecting DB
mysql_select_db($dbName, $connection);

$sql="SELECT * FROM tants ORDER BY punktid ASC";

$result = mysql_query($sql);

$responses = array();

while($row = mysql_fetch_array($result))
{
	
	$response = array(
        'id' => $row['id'],
        'koht' => $row['koht'],
        'punktid' => $row['punktid']
    );
    $responses[] = $response;
	
}

echo json_encode($responses);

mysql_close($connection);
?>