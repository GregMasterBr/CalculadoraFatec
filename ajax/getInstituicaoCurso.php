<?php
include('../includes/config.php');
 
$query="select ic.cod_instituicao, ic.cod_curso from instituicao_curso ic ";

$result = $mysqli->query($query) or die($mysqli->error.__LINE__);
	
$arr = array();
if($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $arr[] = $row;
    }
}
# JSON-encode the response
$json_response = json_encode($arr);
 
// # Return the response
echo $json_response;
?>