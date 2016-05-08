/* Created by vin-c on 26/04/2016 */
$(document).ready(function(){
	/*De link verwijderen van het gezichtveld + fade In na 1 sec*/
    var hidden1 = $('#planeten');
    if (hidden1.hasClass('visible')){
        hidden1.animate({"left":"-1000px"}, 1000).removeClass('visible');
    } else {
        hidden1.animate({"left":"0px"}, 1000).addClass('visible');
    }
    var hidden2 = $('#mendeljev');
    if (hidden2.hasClass('visible')){
        hidden2.animate({"left":"3000px"}, 1000).removeClass('visible');
    } else {
        hidden2.animate({"left":"50%"}, 1000).addClass('visible');
    }

	/*Link fade out + naar pagina gaan*/
	$('#linkplan').click(function() {
		var obj = $("#planeten");
		$(obj).animate({
			left: '-3000px'
		}, 500, function() {
			$(this).css('left', '+5000px');
		});
		
		var obj1 = $("#mendeljev");
		$(obj1).animate({
			left: '+3000px'
		}, 500, function() {
			$(this).css('left', '+5000px');
		});
		setInterval(function(){ 
			window.location.href = "../html/planeten.html";	
		}, 1000);
	});
	$('#linkmendel').click(function() {
		var obj = $("#planeten");
		$(obj).animate({
			left: '-3000px'
		}, 500, function() {
			$(this).css('left', '+5000px');
		});
		var obj1 = $("#mendeljev");
		$(obj1).animate({
			left: '+3000px'
		}, 500, function() {
			$(this).css('left', '+5000px');
		});
		setInterval(function(){ 
			window.location.href = "../html/tabelvanmendeljev.html";	
		}, 1000);
	});
});