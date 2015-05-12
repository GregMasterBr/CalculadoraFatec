<?php
include('../includes/config.php');
 
//$query="select c.curso,c.cod_curso from curso c order by c.curso";
/*$query="select c.curso,c.cod_curso,ic.cod_instituicao from curso c 
		inner join instituicao_curso  ic
		on c.cod_curso=ic.cod_curso
		order by c.curso";*/
$query="select c.curso,c.cod_curso,r.cod_instituicao,r.periodo from curso c 
  inner join resultado_fatec  r
  on c.cod_curso=r.cod_curso 
  group by c.curso,c.cod_curso,r.cod_instituicao,r.periodo  ";	

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
