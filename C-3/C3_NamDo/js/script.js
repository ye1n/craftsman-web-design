$("nav > ul > li").hover(
    function () {
        $(this).children('ul').stop().slideDown("slow");
    },
    function () {
        $(this).children('ul').stop().slideUp("fast");
    }
);

let m = $('nav > ul > li > a');
let s = $('nav > ul > li > ul');
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
var timer = setInterval("autoslide()", 3000);

function autoslide() {
    $(slide[sno]).stop().animate({
        left: "100%"
    }, 1000, function () {
        $(this).css({ left: "-100%" });
    });
    sno++;
    if (sno > eno) sno = 0;
    $(slide[sno]).stop().animate({
        left: "0"
    }, 1000);
}

function openPop() {
    $(".pop").show();
}

function closePop() {
    $(".pop").hide();
}