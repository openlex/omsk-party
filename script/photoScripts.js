$(document).ready(function() { 

	$(".photo_container .photo").hover(
		function(){
			$(this).children('.photo_icons').css({'display':'block'});
			$(this).children('.img_tumb').css({'opacity':'0.2'});
		},
		function(){
			$(this).children('.photo_icons').css({'display':'none'});
			$(this).children('.img_tumb').css({'opacity':'1'});
		}
	);	

	$(".ico_photo").hover(
		function(){
			$('.ico_photo_count').css({'font-weight':'bold'});
		},
		function(){
			$('.ico_photo_count').css({'font-weight':'normal'});
		}
	);	

	
})
