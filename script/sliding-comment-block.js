$(document).ready(function() { 

	var reply = ($(this).parent().next());
	$(".reply").css({"display":"none"});
	$(".send_photo_reply_button").css({"left":"20px"});
	
	$(".js_answer",this).click(function () {
	      if (!($(this).parent().next().is(":animated"))) {
		      if ($(this).parent().next().is(":hidden")) {
		      	$(this).html("скрыть");
		        $(this).parent().next().slideDown('slow');
		        $(this).parent().next().children('.send_photo_reply_button').delay(500);
		        $(this).parent().next().children('.send_photo_reply_button').animate({"left":"-84px"}, 800);
		      } else {
		      	$(this).html("ответить");
		      	$(this).parent().next().children('.send_photo_reply_button').animate({"left":"20px"}, 800);
		      		$(this).parent().next().delay(500);
		      		$(this).parent().next().slideUp();
		      }

		      $(".send_photo_reply_button").click(function () {
		      	$(".send_photo_reply_button").animate({"left":"20px"}, 800);
		      		$(this).parent().next().delay(500);
		      		$(this).parent().next().slideUp();
		      
		      })
		  }
	})


	$('.jsBlockedComment').css({opacity:"0.8"});
	$('.jsBlockedComment .comment_textarea, .jsBlockedComment .send_comment_button').css("display","none");
	$('.jsBlockedComment span').html("<a href='#'><h3>ДЛЯ КОММЕНТИРОВАНИЯ НЕОБХОДИМО ЗАРЕГЕСТРИРОВАТЬСЯ</h3></a>");
	$('.jsBlockedComment a').css({'text-decoration':'none','text-align':'center'});
	$('.jsBlockedComment .commentsBlock_fieldBlock_field').css({'padding-top':'55px', 'padding-bottom':'0px'});

});