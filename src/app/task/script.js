  
$("ul").on("click","li",function(){
    $(this).toggleClass("crossed");
});

$("ul").on("click","i",function(event){
   
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("#inputTask").on("keypress",function(event){
    
    if(event.which == "13"){
        var value = $(this).val();
        $(this).val("");
        $("ul").append("<li><span class='delete'><i class='far fa-trash-alt'></i></span> " + value + "<span class='badge badge-primary'>Primary</span></li>");
        
    }
});
$("i").on("click",function(){
     
    $("input").fadeToggle();
});
