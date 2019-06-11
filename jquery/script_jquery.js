// $(seletor).ação(); 


/*$(document).ready(function(){
	$('button').click(function(){
		$ ('h1').hide();
		$ ('h1').fadeOut("slow"); --> esconde suave...
	});
});
*/  

// Modo mais simples de fazer o memso script ".Ready" acima...

/*$(function(){
	$('button').click(function(){
		//$('h1').hide();
		$('h1').css("color","blue");
	});
});
*/

$(function(){
	$('#azul').click(function(){
		$('p').css('color','blue');
	});
	$('#vermelho').click(function(){
		/*$('p').css('color','vermelho');
		$('#msg').text('Cor alterada com sucesso!');
		$('#msg').delay(3000);
		$('#msg').fadeOut('fast');*/

		// Encadeamento de bloco...

		$('p').css('color','vermelho');
			$('#msg')
			.text('Cor alterada com sucesso!')
			.delay(3000)
			.fadeOut('fast')
			.addClass('green');
	});	
});

