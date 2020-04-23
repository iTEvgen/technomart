var modal_show = document.querySelector(".contacts__modal-show");
var popap = document.querySelector(".modal-form");
var close = popap.querySelector(".modal-form__close");
var name__first = popap.querySelector("[name=first-name]");
var e__mail = popap.querySelector("[name=e-mail]");
var form = popap.querySelector("form");


modal_show.addEventListener("click", function (evt) {
  evt.preventDefault();
  popap.classList.add("modal-form-show");
  name__first.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popap.classList.remove("modal-form-show");
  popap.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!name__first.value || !e__mail.value) {
    evt.preventDefault();
    popap.classList.remove("modal-error");
    popap.offsetWidth = popap.offsetWidth;
    popap.classList.add("modal-error")
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popap.classList.contains("modal-form-show")) {
      popap.classList.remove("modal-form-show");
      popap.classList.remove("modal-error");
    }
  }
});

