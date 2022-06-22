$(".menu").hover(
    function(){
        $(".sub_menu").stop().slideDown("slow");
    },
    function(){
        $(".sub_menu").stop().slideUp("fast");
    }
);

// slide

var slide = $(".slide > a");
var sno = 0;
var eno = slide.length - 1;

var timer = setInterval("autoSlide()", 3000);

function autoSlide() {
    $(slide[sno]).stop().animate({
        left:"100%"
    }, 1000, function(){
        $(this).css({left:"-100%"});
    });
    sno ++;
    if(sno > eno){
        sno = 0;
    }
    $(slide[sno]).stop().animate({
        left:"0"
    }, 1000)
}

// popUp

function openPop() {
    $(".pop").show();
}

function closePop() {
    $(".pop").hide();
}