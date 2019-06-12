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

/*$(function(){
	$('#azul').click(function(){
		$('p').css('color','blue');
	});
	$('#vermelho').click(function(){
		/*$('p').css('color','vermelho');
		$('#msg').text('Cor alterada com sucesso!');
		$('#msg').delay(3000);
		$('#msg').fadeOut('fast');

		//Encadeamento de bloco...

		$('p').css('color','vermelho');
			$('#msg')
			.text('Cor alterada com sucesso!')
			.delay(3000)
			.fadeOut('fast')
			.addClass('green');
	});	
});

*/

$(function(){
	$('#link1').click(function(){
		$('#surf01').show();
		$('#surf02').hide();
		$('#surf03').hide();
		$('#surf04').hide();
	});
	$('#link2').click(function(){
		$('#surf02').show();
		$('#surf01').hide();
		$('#surf03').hide();
		$('#surf04').hide();
	});
	$('#link3').click(function(){
		$('#surf03').show();
		$('#surf02').hide();
		$('#surf01').hide();
		$('#surf04').hide();
	});
	$('#link4').click(function(){
		$('#surf04').show();
		$('#surf02').hide();
		$('#surf03').hide();
		$('#surf01').hide();
	});
});