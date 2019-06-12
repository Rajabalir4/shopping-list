$(document).ready(function(){

$('form').submit(function(event) {
	event.preventDefault();
	$('ul').append('<li><span class="shopping-item">'+$('input[type="text"]').val()+'</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
});

$('input[type="text"]').keydown(function(event) {
	if (event.keyCode==13) {
		event.preventDefault();
		$("form").submit();
	}
});


$('ul').on('click', '.shopping-item-delete', function(event) {
	$(this).parents("li").remove();
});	

$('ul').on('click', '.shopping-item-toggle', function(event) {
	$(this).parent().siblings("span").toggleClass( "shopping-item__checked");
});



});