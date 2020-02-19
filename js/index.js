var SHOWINGCLASS = "showing";
var DOTTED = "dotted";
var slide = document.querySelectorAll(".slide-item");
var firstSlide = document.querySelector(".slide-item:first-child");
var lastSlide = document.querySelector(".slide-item:last-child");
var firstDotbtn = document.querySelector(".dotbtn:first-child");
var lastDotbtn = document.querySelector(".dotbtn:last-child");
var nextbtn = document.querySelector("#slide-btn-right");
var prevbtn = document.querySelector("#slide-btn-left");
var dotted = document.querySelectorAll(".dotbtn");
var clickbtn = document.querySelectorAll(".tab-click-btn");
var showtab = document.querySelectorAll(".tab-open");
var proBtn = document.querySelectorAll(".pro-btn");
var proTab = document.querySelectorAll(".pro-slide-item");

var SHOWINGCLASS2 = "showing2";
var slide2 = document.querySelectorAll(".news-item");
var firstSlide2 = document.querySelector(".news-item:first-child");
var lastSlide2 = document.querySelector(".news-item:last-child");
var nextbtn2 = document.querySelector("#slide-news-btn-right");
var prevbtn2 = document.querySelector("#slide-news-btn-left");

function dot(e) {
  var currentslide = document.querySelector(".showing");
  var currentdotted = document.querySelector(".dotted");

  if (currentdotted) {
    currentslide.classList.remove("showing");
    currentdotted.classList.remove("dotted");
  }
  dotted[e].classList.add("dotted");
  slide[e].classList.add("showing");
};

// 메인 슬라이드
function nextSlides() {
  var currentslide = document.querySelector(".showing");
  var currentdotted = document.querySelector(".dotted");

  if (currentslide) {
    currentslide.classList.remove("showing");
    currentdotted.classList.remove("dotted");

    var nextslide = currentslide.nextElementSibling;
    var nextdotted = currentdotted.nextElementSibling;

    if (nextslide) {
      nextslide.classList.add("showing");
      nextdotted.classList.add("dotted");
    } else {
      firstSlide.classList.add("showing");
      firstDotbtn.classList.add("dotted");
    }
  } else {
    firstSlide.classList.add("showing");
    firstDotbtn.classList.add("dotted");
  }
};

function prevSlides() {
  var currentslide = document.querySelector(".showing");
  var currentdotted = document.querySelector(".dotted");

  if (currentslide) {
    currentslide.classList.remove("showing");
    currentdotted.classList.remove("dotted");

    var prevslide = currentslide.previousElementSibling;
    var prevdotted = currentdotted.previousElementSibling;

    if (prevslide) {
      prevslide.classList.add("showing");
      prevdotted.classList.add("dotted");
    } else {
      lastSlide.classList.add("showing");
      lastDotbtn.classList.add("dotted");
    }
  } else {
    lastSlide.classList.add("showing");
    lastDotbtn.classList.add("dotted");
  }
};
// window.setInterval("nextSlides()", 4000);
nextSlides();

nextbtn.addEventListener("click", nextSlides);
prevbtn.addEventListener("click", prevSlides);


// 메인 탭 메뉴
function tabshowing(n) {
  var currentbtn = document.querySelector(".tab-click-btns");
  var currenttab = document.querySelector(".tab-opens");

  if (currentbtn) {
    currentbtn.classList.remove("tab-click-btns");
    currenttab.classList.remove("tab-opens");
  }
  clickbtn[n].classList.add("tab-click-btns");
  showtab[n].classList.add("tab-opens");
};

// product 탭 메뉴
function proclickbtn(n) {
  var probtn = document.querySelector(".pro-btns");
  var protab = document.querySelector(".pro-slide-items");

  if (probtn) {
    probtn.classList.remove("pro-btns");
    protab.classList.remove("pro-slide-items");
  }
  proBtn[n].classList.add("pro-btns");
  proTab[n].classList.add("pro-slide-items");
};

// 뉴스 슬라이드
function nextSlides2() {
  var currentslide2 = document.querySelector(".showing2");

  if (currentslide2) {
    currentslide2.classList.remove("showing2");

    var nextslide2 = currentslide2.nextElementSibling;

    if (nextslide2) {
      nextslide2.classList.add("showing2");
    } else {
      firstSlide2.classList.add("showing2");
    }
  } else {
    firstSlide2.classList.add("showing2");
  }
};

function prevSlides2() {
  var currentslide2 = document.querySelector(".showing2");

  if (currentslide2) {
    currentslide2.classList.remove("showing2");

    var prevslide2 = currentslide2.previousElementSibling;

    if (prevslide2) {
      prevslide2.classList.add("showing2");
    } else {
      lastSlide2.classList.add("showing2");
    }
  } else {
    lastSlide2.classList.add("showing2");
  }
};
// window.setInterval("nextSlides2()", 4000);
nextSlides2();

nextbtn2.addEventListener("click", nextSlides2);
prevbtn2.addEventListener("click", prevSlides2);


// function topscroll() {
//   if (document.documentElement.scrollTop > 20) {
//     headerfix.style.display = "block";
//   } else {
//     headerfix.style.display = "none";
//   }
// };


// window.onscroll = function () {
//   topscroll()
// };