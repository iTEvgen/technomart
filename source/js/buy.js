var modal_produrt_show = document.querySelectorAll(".popular-products__click");
var popap__product = document.querySelector(".modal-produrt");
var close__product = popap__product.querySelector(".modal-form__close");
var next__product = popap__product.querySelector(".modal-product__button--mody-color");
var buy__product = popap__product.querySelector(".modal__button-grid a");

for (var i = 0; i < modal_produrt_show.length; i++)
modal_produrt_show[i].addEventListener("click", function(evt) {
  evt.preventDefault();
  popap__product.classList.add("modal-produrt-show");
});

close__product.addEventListener("click", function(evt) {
  evt.preventDefault();
  popap__product.classList.remove("modal-produrt-show");
})

next__product.addEventListener("click", function(evt) {
  evt.preventDefault();
  popap__product.classList.remove("modal-produrt-show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popap__product.classList.contains("modal-produrt-show")) {
      popap__product.classList.remove("modal-produrt-show");
    }
  }
});
