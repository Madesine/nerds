const carouselBackground = document.querySelector(".carousel-container");

const firstSlide = document.querySelector(".slide-one-paragraph");
const secondSlide = document.querySelector(".slide-two-paragraph");
const thirdSlide = document.querySelector(".slide-three-paragraph");

const carouselRadios = document.getElementsByName("slide-carousel");

carouselRadios[0].addEventListener("change", function(e) {
  e.preventDefault();
  secondSlide.classList.remove("slide-show");
  thirdSlide.classList.remove("slide-show");

  firstSlide.classList.add("slide-show");
  carouselBackground.style.backgroundImage = "url(./img/index_img/slide1.png)";
});

carouselRadios[1].addEventListener("change", function second(e) {
  e.preventDefault();
  firstSlide.classList.remove("slide-show");
  thirdSlide.classList.remove("slide-show");

  secondSlide.classList.add("slide-show");
  carouselBackground.style.backgroundImage = "url(./img/index_img/slide2.png)";
});

carouselRadios[2].addEventListener("change", function third(e) {
  e.preventDefault();
  firstSlide.classList.remove("slide-show");
  secondSlide.classList.remove("slide-show");

  thirdSlide.classList.add("slide-show");
  carouselBackground.style.backgroundImage = "url(./img/index_img/slide3.png)";
});

let i = 0;

function animation() {
  setTimeout(function() {
    requestAnimationFrame(animation);
    if (i == 3) {
      i = 0;
    }
    if (i == 0) {
      secondSlide.classList.remove("slide-show");
      thirdSlide.classList.remove("slide-show");

      firstSlide.classList.add("slide-show");
      carouselBackground.style.backgroundImage =
        "url(./img/index_img/slide1.png)";
    } else if (i == 1) {
      firstSlide.classList.remove("slide-show");
      thirdSlide.classList.remove("slide-show");

      secondSlide.classList.add("slide-show");
      carouselBackground.style.backgroundImage =
        "url(./img/index_img/slide2.png)";
    } else {
      firstSlide.classList.remove("slide-show");
      secondSlide.classList.remove("slide-show");

      thirdSlide.classList.add("slide-show");
      carouselBackground.style.backgroundImage =
        "url(./img/index_img/slide3.png)";
    }
    carouselRadios[i].checked = "checked";

    i++;
  }, 10000);
}
animation();
