
$(document).ready(function() { 

	 $(".block").hover(

	 function(){ 

    	 $(".block_description",this).css('visibility','visible'); 
    	},

    	function(){ 

    	$(".block_description",this).css('visibility','hidden'); 

     }
     )

	 //ОТСТУП У КАЖДОГО НЕЧЁТНОГО ПОЛЯ КОМЕЕНТАРИЯДЛЯ КАТАЛОГА ЗАВДЕНИЙ НА ГЛАВНОЙ
     //$(".places_comments_field:even").css('margin-right','20px')
  	
}); 