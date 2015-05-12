function calController($scope){
	
	$scope.qpeso1 = 0; //declaração de propriedades
	$scope.qpeso2 = 0;
	$scope.redacao = 0;
	$scope.enem = false;
	$scope.nota_enem = 0;
	$scope.afrodescendencia=false;
	$scope.escola_publica=false;
	$scope.npc=0;
	$scope.aux=0;
	$scope.resultado = 0;
	

    $scope.resultado=function(){
      $scope.npc=parseInt(($scope.qpeso2 * 2)) + parseInt($scope.qpeso1);
	  $scope.aux=($scope.npc*100)/64;    
	   if ($scope.enem == true){
             if($scope.nota_enem > $scope.aux){
					$scope.resultado =((8.00*((4*$scope.aux)+(1*$scope.nota_enem)))+(2.00*$scope.redacao))/10
                }
			else{
				$scope.resultado =((8.00*$scope.aux)+(2.00*$scope.redacao))/10;
			}
        }
        else{
          	$scope.resultado =((8.00*$scope.aux)+(2.00*$scope.redacao))/10;     
		}
		//Pontuação acrescida
		if($scope.afrodescendencia==true && $scope.escola_publica==false){
			$scope.resultado=$scope.resultado*1.03;
		}
		if($scope.afrodescendencia==false && $scope.escola_publica==true){
			$scope.resultado=$scope.resultado*1.1;    
		}
		if($scope.afrodescendencia==true && $scope.escola_publica==true){
			$scope.resultado=$scope.resultado*1.13;
		}
		//return  $scope.resultado;
    }

}