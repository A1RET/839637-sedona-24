var link = document.querySelector(".popup-button");
var popup = document.querySelector(".popup");
var dateIn = popup.querySelector("[name=date-in]");
var form = popup.querySelector(".search-form");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("popup-show");
  form.classList.toggle("search-form-show");
  dateIn.focus();
});