// popup
function openPop() {
  $(".pop").show();
}

function closePop() {
  $(".pop").hide();
}

// nav
$("nav").hover(
  function () {
    $(".sub-nav").stop().slideDown("slow");
  },
  function () {
    $(".sub-nav").stop().slideUp("fast");
  }
);

let m = $(".main-nav>ul>li");
let s = $(".sub-nav>ul");

for (let i = 0; i < m.length; i++) {
  $(s[i])
    .stop()
    .hover(
      function () {
        $(m[i]).addClass("hover");
      },
      function () {
        $(m[i]).removeClass("hover");
      }
    );
}

// tab-box
$(".notice-tab").click(function () {
  $(this).css({
    "background-color": "burlywood",
  });
  $(".gallery-tab").css({
    "background-color": "white",
  });
  $(".notice-box").show();
  $(".gallery-box").hide();
});

$(".gallery-tab").click(function () {
  $(this).css({
    "background-color": "burlywood",
  });
  $(".notice-tab").css({
    "background-color": "white",
  });
  $(".notice-box").hide();
  $(".gallery-box").show();
});

// slide
var slide = $(".slide > a");
var sno = 0;
var eno = slide.length - 1;
var timer = setInterval("autoSlide()", 3000);

function autoSlide() {
  $(slide[sno])
    .stop()
    .animate(
      {
        top: "100%",
      },
      1000,
      function () {
        $(this).css({ top: "-100%" });
      }
    );
  sno++;
  if (sno > eno) sno = 0;
  $(slide[sno]).stop().animate(
    {
      top: "0%",
    },
    1000
  );
}
