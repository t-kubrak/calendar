$(".solarSection:first-child").hover(function(){
	$('main .line').slice(0,2)
		.css("border-color", "white")
		.css("transition", "0.4s");
	$('.midnight').slice(0,2)
		.css("font-size", "18px")
		.css("transition", "0.4s");
}, function() {
    $('main .line').slice(0,2)
    	.css("border-color", "black")
    	.css("transition", "0.4s");
	$('.midnight').slice(0,2)
		.css("font-size", "16px")
		.css("transition", "0.4s");
});

$(".lunarSection:first-child").hover(function(){
	$('.sunsetLine').slice(0,2)
		.css("border-color", "white")
		.css("transition", "0.4s");
	$('.sunset').slice(0,2)
		.css("font-size", "3.5em")
		.css("transition", "0.4s");
}, function() {
    $('.sunsetLine')
    	.css("border-color", "black")
    	.css("transition", "0.4s");
    $('.sunset').slice(0,2)
    	.css("font-size", "3em")
    	.css("transition", "0.4s");
});

$(".solarSection:nth-child(2)").hover(function(){
	$('main .line').slice(1,3)
		.css("border-color", "white")
		.css("transition", "0.4s");
	$('.midnight').slice(1,3)
		.css("font-size", "18px")
		.css("transition", "0.4s");
}, function() {
    $('main .line').slice(1,3)
    	.css("border-color", "black")
    	.css("transition", "0.4s");
	$('.midnight').slice(1,3)
		.css("font-size", "16px")
		.css("transition", "0.4s");
});

$(".lunarSection:nth-child(2)").hover(function(){
	$('.sunsetLine').slice(1,3)
		.css("border-color", "white")
		.css("transition", "0.4s");
	$('.sunset').slice(1,3)
		.css("font-size", "3.5em")
		.css("transition", "0.4s");
}, function() {
    $('.sunsetLine')
    	.css("border-color", "black")
    	.css("transition", "0.4s");
    $('.sunset').slice(1,3)
    	.css("font-size", "3em")
    	.css("transition", "0.4s");
});