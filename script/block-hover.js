/*$(document).ready(function() { 
    $(".block_description", this).slideUp(1);
    $(".block_date",this).slideUp(1,"linear");

    $(".block", this).mouseenter(function(){
        $(".block_description", this).slideDown(400,"swing");
            $(".block_date",this).slideDown(400,"swing");
            
      
        
    })

    $(".block", this).mouseleave(function(){
        $(".block_description", this).slideUp(400,"swing");
            $(".block_date",this).slideUp(400,"swing");
            
                
    })
}); */

$(document).ready(function() { 
    $(".block_description", this).css("height", "0");
            $(".block_date",this).css("height", "0");

    $(".block", this).mouseenter(function(){
        $(".block_description", this).animate({height:"130px"},400);
            $(".block_date",this).animate({height: "37px"},500);})

    $(".block", this).mouseleave(function(){
        $(".block_description", this).animate({height: "0"},400);
            $(".block_date",this).animate({height: "0"},500);})

}); 
