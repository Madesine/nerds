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
