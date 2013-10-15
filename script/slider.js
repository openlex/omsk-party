	

$(document).ready(function() { 
	var is_animate = false;
	var leftArrow = $(".gallaryBlock_controllElements_left");
	var rightArrow = $(".gallaryBlock_controllElements_right");
	var slideWrap = $(".gallaryBlock_container");
	var slideWidth = $('.galleryBlock_imgBlock').outerWidth(true);
	var scrollSlider = slideWrap.position().left - slideWidth;

	leftArrow.click(function(){
		if(!$(this).parent().parent().parent().find(".gallaryBlock_container").is(':animated')) {
			$(this).parent().parent().parent().find(".gallaryBlock_container").animate({left: scrollSlider},500, function(){
				$(this).parent().parent().parent().find(".gallaryBlock_container")
				.find('.galleryBlock_imgBlock:first')
				.appendTo($(this).parent().parent().parent().find(".gallaryBlock_container"))
				.parent()
				.css({'left': 0});
			})
		}
	});	

	rightArrow.click(function(){
		if(!$(this).parent().parent().parent().find(".gallaryBlock_container").is(':animated')) {
	    	$(this).parent().parent().parent().find(".gallaryBlock_container")
			.css({'left': scrollSlider})
			.find('.galleryBlock_imgBlock:last')
			.prependTo($(this).parent().parent().parent().find(".gallaryBlock_container"))
			.parent()
			.animate({left: 0}, 500);
   		}
 	});
});


