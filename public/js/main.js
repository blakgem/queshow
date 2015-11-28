$("body").ready(function(){

	$(".mi-slider").slick({
		autoplay:true,
		autoplaySpeed:3000,
		slidesToShow: 3,
  		slidesToScroll: 3
	});


var h1 = $("#main-title");

	h1.click(function(){
		$(this).innerHTML = " Bienvenido a queshow";
	});


	var esto = $(this);



	h1.click(function(){
		$(this).toggleClass("sobre");
	});

});


	
