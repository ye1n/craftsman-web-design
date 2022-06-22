$(".menu").hover(
    function () {
        $(".sub_menu").stop().slideDown("slow");
    },
    function () {
        $(".sub_menu").stop().slideUp("fast");
    }
);

let m = $('.main_menu ul li');
let s = $('.sub_menu ul');

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
    $("#pop").show("slow");
    $(".window").show();
}

function closePop() {
    $("#pop").hide("fast");
    $(".window").hide();
}