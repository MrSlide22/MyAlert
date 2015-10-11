function myAlert(msg, title){
	$('body').append('<div class="ma-bg"></div><div class="ma-panel"><div class="ma-title">'+title+'</div><div class="ma-msg">'+msg+'</div><div class="ma-footer"><button class="ma-button" type="submit">Aceptar</button></div></div>');

	$('.ma-panel').css('left', ($(document).width() - $('.ma-panel').width())/2+'px');

	$('.ma-button').on('click', function(){
		$('.ma-bg').remove();
		$('.ma-panel').remove();
	});

	$(window).on('resize', function(){
		$('.ma-panel').css('left', ($(document).width() - $('.ma-panel').width())/2+'px');
	});

	$('.ma-button').focus();
}

function myConfirm(msg, title, yes, no){
	$('body').append('<div class="ma-bg"></div><div class="ma-panel"><div class="ma-title">'+title+'</div><div class="ma-msg">'+msg+'</div><div class="ma-footer"><button class=" ma-button ma-no" type="submit">Cancelar</button><button class="ma-button ma-yes" type="submit">Aceptar</button></div></div>');

	$('.ma-panel').css('left', ($(document).width() - $('.ma-panel').width())/2+'px');

	$('.ma-yes').on('click', function(){
		$('.ma-bg').remove();
		$('.ma-panel').remove();
		yes();
	});

	$('.ma-no').on('click', function(){
		$('.ma-bg').remove();
		$('.ma-panel').remove();
		no();
	});

	$(window).on('resize', function(){
		$('.ma-panel').css('left', ($(document).width() - $('.ma-panel').width())/2+'px');
	});

	$('.ma-button').focus();
}