<?php
include('../includes/config.php');

$query="SELECT cod_instituicao,fatec FROM instituicao ";
$result = $mysqli->query($query) or die($mysqli->error.__LINE__);

$arr = array();
if($result->num_rows > 0) {
	while($row =  $result->fetch_assoc()) {
		$arr[] = $row;	
		
	}
	//$arr[] = array_map('htmlentities',$arr);
}

# JSON-encode the response
$json_response = (json_encode($arr));

// # Return the response
echo $json_response;

?>





