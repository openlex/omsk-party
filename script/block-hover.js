$(document).ready(function() { 
    $(".block_description", this).css("height", "0");
            $(".block_date",this).css("height", "0");

    $(".galleryBlock_imgBlock", this).mouseenter(function(){
        $(".block_description", this).animate({height:"130px"},400);
            $(".block_date",this).animate({height: "37px"},500);})

    $(".galleryBlock_imgBlock", this).mouseleave(function(){
        $(".block_description", this).animate({height: "0"},400);
            $(".block_date",this).animate({height: "0"},500);})

}); 
