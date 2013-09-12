$(document).ready(function() { 
    $(".block_description", this).slideUp(1);

    $(".block", this).mouseenter(function(){
        $(".block_description", this).slideDown(350); 
        
        
        
    })

    $(".block", this).mouseleave(function(){
        $(".block_description", this).slideUp(350);
        
    })

     /*function(){ 

         $(".block_description",this).css('visibility','visible'); 
        },

        function(){ 

        $(".block_description",this).css('visibility','hidden'); 

     }
     )

     //ОТСТУП У КАЖДОГО НЕЧЁТНОГО ПОЛЯ КОМЕЕНТАРИЯДЛЯ КАТАЛОГА ЗАВДЕНИЙ НА ГЛАВНОЙ
     //$(".places_comments_field:even").css('margin-right','20px')*/
    
}); 