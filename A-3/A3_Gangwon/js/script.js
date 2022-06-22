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
        opacity: "0"
    }, 1500);
    sno++;
    if (sno > eno) sno = 0;
    $(slide[sno]).stop().animate({
        opacity: "1"
    }, 1500);
}

function openPop() {
    $(".pop").show();
}

function closePop() {
    $(".pop").hide();
}

$(".notice_tab a").click(function () {
    $(this).css({
        "border-bottom": "none",
        "background-color": "white",
        "color": "#333333"
    });
    $(".gallery_tab a").css({
        "border-bottom": "1px solid #333333",
        "background-color": "#030c33",
        "color": "white"
    });
    $(".gallery").hide();
    $(".notice").show();
});
$(".gallery_tab a").click(function () {
    $(this).css({
        "border-bottom": "none",
        "background-color": "white",
        "color": "#333333"
    });
    $(".notice_tab a").css({
        "border-bottom": "1px solid #333333",
        "background-color": "#030c33",
        "color": "white"
    });
    $(".notice").hide();
    $(".gallery").show();
});