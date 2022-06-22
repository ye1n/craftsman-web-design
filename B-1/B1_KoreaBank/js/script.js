$("nav").hover(
    function () {
        $(".sub_nav").stop().slideDown("slow");
    },
    function () {
        $(".sub_nav").stop().slideUp("fast");
    }
);

let m = $('.main_nav ul li');
let s = $('.sub_nav ul');

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

$(".notice_tab").click(function(){
    $(this).css({
        "width": "100%",
        "background-color":"#3a8dfd"
    });
    $(".gallery_tab").css({
        "width": "100%",
        "background-color":"white"
    });
    $(".gallery").hide();
    $(".notice").show();
});
$(".gallery_tab").click(function(){
    $(this).css({
        "width": "100%",
        "background-color":"#3a8dfd"
    });
    $(".notice_tab").css({
        "width": "100%",
        "background-color":"white"
    });
    $(".notice").hide();
    $(".gallery").show();
});