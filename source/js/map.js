var map__show = document.querySelector(".contacts__map-show");
var popap__map = document.querySelector(".modal-maps");
var close__map = popap__map.querySelector(".modal-form__close");


map__show.addEventListener("click", function (evt) {
  evt.preventDefault();
  popap__map.classList.add("modal-maps-show");
});

close__map.addEventListener("click", function (evt) {
  evt.preventDefault();
  popap__map.classList.remove("modal-maps-show");
  popap__map.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popap__map.classList.contains("modal-maps-show")) {
      popap__map.classList.remove("modal-maps-show");
    }
  }
});
