// menu
$(".menu>ul>li").hover(
    function() {
        $(this).children("ul").stop().slideDown("slow");
    },function() {
        $(this).children("ul").stop().slideUp("fast");
    }
);

// slide
var slide = $(".slide > a");
let sno = 0;
let eno = slide.length -1;
var timer = setInterval("autoSlide()", 3000);

function autoSlide() {
    $(slide[sno]).animate({
        opacity : "0"
    }, 1000, function(){
        $(this).css({opacity:"0"});
    });
    console.log(sno);
    sno++;
    if(sno > eno) {
        sno = 0;
    }
    $(slide[sno]).animate({
        opacity : "1"
    }, 1000);
}

// popup
function openPop() {
    $(".window").show();
    $(".pop").show();
}

function closePop() {
    $(".window").hide();
    $(".pop").hide();
}