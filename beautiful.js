$(window).load(function(){
  
    
    
var page=0;
var lastPage=parseInt($("#slide img").length-1);
    
    $("#slide img").css("display","none");
    $("#slide img").eq(page).css("display","block");
    
function changePage(){
    $("#slide img").fadeOut(1500);
    $("#slide img").eq(page).fadeIn(1500);
};
    
var Timer;
function startTimer(){
    Timer=setInterval(function(){
        if(page===lastPage){
            page=0;
            changePage();
        }else{
            page++;
            changePage();
        };
    },4000);
}
    
function stopTimer(){
    clearInterval(Timer);
}
    
startTimer();
    
    
    
    
    
    
$('.lesson-hover').hover(
    function(){
        $(this).find('.text-contents').addClass('text-active');
    },
    function(){
        $(this).find('.text-contents').removeClass('text-active');
    }
);
    
    
    
    
    
});
