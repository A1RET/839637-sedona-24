var link = document.querySelector(".popup-button");
var popup = document.querySelector(".popup");
var dateIn = popup.querySelector("[name=date-in]");
var form = popup.querySelector(".search-form");

popup.classList.add("popup-hide");
form.classList.add("search-form-close");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("search-form-open");
  form.classList.toggle("search-form-close");
  if(popup.classList.contains("popup-hide")) {
    popup.classList.toggle("popup-hide");
  } else {
    setTimeout(function() {popup.classList.toggle("popup-hide")},500);
  }
  dateIn.focus();
});