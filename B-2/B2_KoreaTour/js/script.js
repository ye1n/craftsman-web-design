$("nav").hover(
    function () {
        $(".sub_nav").stop().slideDown("slow");
    },
    function () {
        $(".sub_nav").stop().slideUp("fast");
    }
);

let m = $('.main_nav ul li a');
let s = $('.sub_nav .list ul');

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
        top: "100%"
    }, 1000, function () {
        $(this).css({ top: "-100%" });
    });
    sno++;
    if (sno > eno) sno = 0;
    $(slide[sno]).stop().animate({
        top: "0"
    }, 1000);
}

function openPop() {
    $(".window").show();
    $(".pop").show();
}

function closePop() {
    $(".window").hide();
    $(".pop").hide();
}