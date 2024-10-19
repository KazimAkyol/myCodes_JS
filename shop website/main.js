const localStorage = window.localStorage;
const cart_btn = document.getElementsByClassName("btn-cart");
const delete_btn = document.getElementsByClassName("delete");

eventListeners();

function eventListeners() {
  window.addEventListener("load", function () {
    for (let i = 0; i < cart_btn.length; i++)
      cart_btn[i].addEventListener("click", AddCart);
  });
}
