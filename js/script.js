const feedbackLink = document.querySelector(".feedback-link");

const feedbackPopup = document.querySelector(".feedback-modal");

const feedbackClosePopup = document.getElementById("modal-close");
const userNameField = feedbackPopup.querySelector("[name=user_name]");

feedbackLink.addEventListener("click", function(e) {
  e.preventDefault();
  feedbackPopup.classList.add("modal-show");
  userNameField.focus();
});

feedbackClosePopup.addEventListener("click", function(e) {
  e.preventDefault();
  feedbackPopup.classList.remove("modal-show");
});

// carousel
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
