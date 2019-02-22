var link = document.querySelector(".popup-button");
var popup = document.querySelector(".popup");
var dateIn = popup.querySelector("[name=date-in]");
var form = popup.querySelector(".search-form");


form.classList.add("search-form-close");
link.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("search-form-open");
  form.classList.toggle("search-form-close");
  if(popup.classList.contains('popup-show')) 
    {
    setTimeout(function() {popup.classList.toggle("popup-show")},500);
  } else {
    popup.classList.toggle("popup-show");
  }
  dateIn.focus();
});