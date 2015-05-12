//Define an angular module for our app
var myApp = angular.module('CalculadoraFatecApp',['chart.js', 'ui.bootstrap']);

myApp.controller('ControllerPrincipal', function ($scope, $http, $timeout) {
	 $scope.test = "Yes";
    $http.get('ajax/getInstituicao.php').success(function(data){
        $scope.Fatecs = data;
		$scope.filter=0;
    });
	
	$http.get('ajax/getCurso.php').success(function(data){
        $scope.Cursos = data;			
	  });
	$http.get('ajax/getInstituicaoCurso.php').success(function(data){
        $scope.InstituicaoCursos = data;		
	 });

	 
	$scope.templates = [{
        name: 'Insituição - Curso - Período ',
        url: 'includes/instituicao_curso_periodo.html'},
    {
        name: 'Calculadora',
        url: 'includes/calculadora.html'}];
    $scope.template = $scope.templates[0]; //inicio

    $scope.myFunction = function() {
        //$scope.color = 'red';
    }
	
	$scope.getInclude = function(link){
	if(link=='calculadora'){
	 return $scope.template = $scope.templates[1];//calculadora
	}
	return  $scope.template = $scope.templates[0];//insituicao-curso-periodo
}



});

myApp.controller('CalcCtrl', function ($scope, $http, $timeout) {
	//$scope.qpeso1 = 0; //declaração de propriedades
	//$scope.qpeso2 = 0;
	//$scope.redacao = 0;
	$scope.enem = false;
	//$scope.nota_enem = 0;
	$scope.afrodescendencia=false;
	$scope.escola_publica=false;
	$scope.npc=0;
	$scope.aux=0;
	$scope.resultado = 0;
	
	 $scope.CalcularNota=function(){
	 //alert($scope.resultado);
	 //return  $scope.resultado=$scope.qpeso2;
	
	 
     $scope.npc=($scope.qpeso2 * 2) + ($scope.qpeso1);
	  $scope.aux=($scope.npc*100)/64;    
	   if ($scope.enem == true){
			
             if($scope.nota_enem > $scope.aux){
					$scope.resultado =((8.00*((4*$scope.aux)+(1*$scope.nota_enem)))+(2.00*$scope.redacao))/10;
					//alert($scope.resultado);
                }
			else{
				$scope.resultado =((8.00*$scope.aux)+(2.00*$scope.redacao))/10;
				//alert($scope.resultado);
			}
        }
        else{
          	$scope.resultado =((8.00*$scope.aux)+(2.00*$scope.redacao))/10;
			//alert($scope.resultado);			
		}
		//Pontuação acrescida
		if($scope.afrodescendencia==true && $scope.escola_publica==false){
			$scope.resultado=$scope.resultado*1.03;
			//alert($scope.resultado);
		}
		if($scope.afrodescendencia==false && $scope.escola_publica==true){
			$scope.resultado=$scope.resultado*1.1;    
			//alert($scope.resultado);
		}
		if($scope.afrodescendencia==true && $scope.escola_publica==true){
			$scope.resultado=$scope.resultado*1.13;
			//alert($scope.resultado);
		}
		if($scope.resultado>100){
			$scope.resultado=100;
		}
		//return  $scope.resultado;
    }
});

  myApp.controller('LineCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    $scope.series = ['Series A', 'Series B'];
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $scope.onClick = function (points, evt) {
      console.log(points, evt);
    };
    $scope.onHover = function (points) {
      if (points.length > 0) {
        console.log('Point', points[0].value);
      } else {
        console.log('No point');
      }
    };

    $timeout(function () {
      $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      $scope.data = [
        [28, 48, 40, 19, 86, 27, 90],
        [65, 59, 80, 81, 56, 55, 40]
      ];
      $scope.series = ['Series C', 'Series D'];
    }, 3000);
  }]);

  myApp.controller('BarCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.options = { scaleShowVerticalLines: false };
    $scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];//Curso
    $scope.series = ['Series A', 'Series B']; //Curso
    $scope.data = [
      [65, 59, 80, 81, 56, 55, 40],
      [28, 48, 40, 19, 86, 27, 90]
    ];
    $timeout(function () {
      $scope.options = { scaleShowVerticalLines: true };
    }, 3000);
  }]);  
myApp.filter('unique', function() {
    return function(input, key) {
        var unique = {};
        var uniqueList = [];
        for(var i = 0; i < input.length; i++){
            if(typeof unique[input[i][key]] == "undefined"){
                unique[input[i][key]] = "";
                uniqueList.push(input[i]);
            }
        }
        return uniqueList;
    };
});


/*
$scope.getInclude = function(){
    if(x){
        return "partial.html";
    }
    return "";
}
*/