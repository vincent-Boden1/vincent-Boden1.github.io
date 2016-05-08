/* Created by vin-c on 26/04/2016. */
$(document).ready(function(){
	/*De link verwijderen van het gezichtveld + fade In na 1 sec*/
    var hidden1 = $('#rekenmachine');
    if (hidden1.hasClass('visible')){
        hidden1.animate({"left":"-1000px"}, 1000).removeClass('visible');
    } else {
        hidden1.animate({"left":"0px"}, 1000).addClass('visible');
    }
    var hidden2 = $('#afstandenplaneten');
    if (hidden2.hasClass('visible')){
        hidden2.animate({"left":"3000px"}, 1000).removeClass('visible');
    } else {
        hidden2.animate({"left":"50%"}, 1000).addClass('visible');
    }

	/*Link fade out + naar pagina gaan*/
	$('#linkrek').click(function() {
		var obj = $("#rekenmachine");
		$(obj).animate({
			left: '-3000px'
		}, 500, function() {
			$(this).css('left', '+5000px');
		});
		var obj1 = $("#afstandenplaneten");
		$(obj1).animate({
			left: '+3000px'
		}, 500, function() {
			$(this).css('left', '+5000px');
		});
		setInterval(function(){ 
			window.location.href = "../html/rekenmachine.html";	
		}, 1000);
	});
	$('#linkafst').click(function() {
		var obj = $("#rekenmachine");
		$(obj).animate({
			left: '-3000px'
		}, 500, function() {
			$(this).css('left', '+5000px');
		});
		var obj1 = $("#afstandenplaneten");
		$(obj1).animate({
			left: '+3000px'
		}, 500, function() {
			$(this).css('left', '+5000px');
		});
		setInterval(function(){ 
			window.location.href = "../html/afstandenplaneten.html";	
		}, 1000);
	});
});