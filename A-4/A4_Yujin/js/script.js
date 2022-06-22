$("nav").hover(
    function() {
        $(".sub_nav").stop().slideDown("slow");
    },function() {
        $(".sub_nav").stop().slideUp("fast");
    }
);

let m = $(".main_nav > ul > li > a");
let s = $(".sub_nav > .list > ul");

for (let i = 0; i < m.length; i++) {
    $(s[i]).stop().hover(function () {
        $(m[i]).addClass('hover');
    }, function () {
        $(m[i]).removeClass('hover');
    });
}

var slide = $(".slide > a");
var sno = 0;
var eno = slide.length - 1;
var timer = setInterval("autoSlide()", 3000);

function autoSlide() {
    $(slide[sno]).stop().animate({
        opacity: "0"
    }, 1500);
    sno ++;
    if(sno > eno) sno = 0;
    $(slide[sno]).stop().animate({
        opacity:"1"
    }, 1500);
}

function openPop() {
    $(".pop").show();
}

function closePop() {
    $(".pop").hide();
}