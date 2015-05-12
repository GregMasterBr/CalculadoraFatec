<?php
include('../includes/config.php');
 
//$query="select c.curso,c.cod_curso from curso c order by c.curso";
/*$query="select c.curso,c.cod_curso,ic.cod_instituicao from curso c 
		inner join instituicao_curso  ic
		on c.cod_curso=ic.cod_curso
		order by c.curso";*/
$query="  select i.fatec,c.curso,r.ano,r.semestre,r.periodo,r.demanda,r.nota_corte  from resultado_fatec r
  inner join instituicao i on r.cod_instituicao=i.cod_instituicao
  inner join curso c on r.cod_curso=c.cod_curso
 where r.cod_instituicao='61' ";	

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
