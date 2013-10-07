/*$(document).ready(function() { 
	$(".js_answer").click(function() {
		//alert( "Handler for .click() called." );
		$(this).parent().after('<div class="reply">s</div>');
		$(".reply").css("margin-top", $(this).parent().height()+32);

	});
})*/



$(document).ready(function() { 
	var reply=false;
	$(".js_answer").click(function() {
		if (reply==false){
			reply=!reply;
			//$(".reply").css("margin-top", 0);
			//alert( "Handler for .click() called." );
			$(this).parent().after('<div class="reply"><form name="write_photo_comment"><textarea name="comment_photo" placeholder="Ваш комментарий" class="reply_textarea"></textarea><input class="send_photo_reply_button" type="submit" value="отправить"/></form></div>');
			//$(".reply").css("margin-top", 0);
			$(".reply").animate({"margin-top":$(this).parent().height()+32}, 800);
			$(".js_answer").css("visibility","hidden");
		}else{
			reply=!reply;
			$(".reply").animate({"margin-top":-1}, 800);
			$(".reply").remove();

		}
	});
})




/*$(document).ready(function() {
	
var reply=false;

	$(".js_answer").click(function() {
		reply!=reply;
		replyField(reply);

		//alert( "Handler for .click() called." );
		
	});


	
})

function replyField(reply){
	if (reply==true){
		$(this).parent().after('<div class="reply"></div>');
		$(".reply").css("margin-top", 0);
		$(".reply").animate({"margin-top":$(this).parent().height()+32}, 400);
	}
}*/