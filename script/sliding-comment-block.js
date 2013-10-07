$(document).ready(function() { 
	var reply=false;
	$(".reply").css("margin-top", '-150px');
	$(".reply").css("display", "none");
	$(".reply_textarea").css("visibility", "hidden");
	
	$(".js_answer",this).click(function() {
		$(this).parent().next().animate({"margin-top":"-26px"},700);
		//$(".reply").css("margin-top", '-26px');
		$(this).parent().next().css("display", "block");

		$(".reply").mouseenter(function() {
      		$(".reply_textarea",this).css("visibility", "visible");
    	});
		
		

		/*if (reply==false){
			reply=!reply;
		}else{
			

		}*/
	});

	$(".send_photo_reply_button").click(function() {
		$(this).parent().next().animate({"margin-top":"-150px"},700);
		
		setTimeout( function(){
			$(this).parent().next().css("display", "block");
		 },700);
		
	})
})




