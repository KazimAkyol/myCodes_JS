//? METHOD-1 (SADECE JAVASCRİPT TE YAZILAN YOL) 1.yol

//* example-1: onmouseover, onmouseout

const merhaba = document.querySelector("#js"); // merhaba h2'si

const badi = document.querySelector("#badi");

merhaba.onmouseover = () => {
  badi.style.background = "pink";
  merhaba.style.color = "red";
};

merhaba.onmouseout = () => {
  badi.style.background = "orange";
};
