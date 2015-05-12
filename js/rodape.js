$(function() {
	$("#icone").click(function(){
		var rodape 	= $("#rodape");
 		if (rodape.is(":visible")){
			rodape.slideUp( 500 );
			/*$("#icone").removeClass('minus').addClass('plus');*/
			$("#inf-rodape-menu").addClass('esconde');
		} else {
			rodape.slideDown( 500 );
			/*$("#icone").removeClass('plus').addClass('minus');*/
			$("#inf-rodape-menu").removeClass('esconde');
		}
	});
});