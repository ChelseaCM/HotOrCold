$(document).ready(function(){
var rand = Math.floor(Math.random()*100) + 1;



$(".button").hover(function(){
	$(this).addClass("hoverbutton");
});
$(".button").mouseleave(function(){
	$(this).removeClass("hoverbutton");
});

$("#submit").mousedown(function(){
	submitguess();
});		
function submitguess (){
	var guess = $('#userguess').val();
	if (guess<rand){
	$("#result").html("Too low!");
	$('#userguess').val('');
	} else if (guess > rand){
	$("#result").html("Too high!");
	$('#userguess').val('');
	} else {
	$("#result").html("Congratulations! You guessed our number!");
	$('#userguess').val('');
	}
}

$("#newgame").on('mousedown', function(){
	$('#newgame').hide();
	$('#game').fadeIn(1000);
});

$("#endgame").mousedown(function(){
	$('#content').hide();
	$('#thanks').fadeIn(1000);
});


});