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
    $(".pop").show("slow");
}

function closePop() {
    $(".pop").hide("fast");
}

// gallery
$(".tab_notice").click(function(){
    $(this).css({
        "border-bottom":"0",
        "background-color":"#fff"
    });
    $(".tab_gallery").css({
        "border-bottom":"1px solid #000",
        "background-color":"#65e4ff"
    });
    $(".gallery").hide();
    $(".notice").show();
})

$(".tab_gallery").click(function(){
    $(this).css({
        "border-bottom":"0",
        "background-color":"#fff"
    });
    $(".tab_notice").css({
        "border-bottom":"1px solid #000",
        "background-color":"#65e4ff"
    });
    
    $(".notice").hide();
    $(".gallery").show();
})