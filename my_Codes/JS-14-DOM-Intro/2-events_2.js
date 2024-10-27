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

//* example-2: onclick, ondblclick (ondoubleclick)

const bir = document.querySelector(".bir"); // sari JS resim
const iki = document.querySelector(".iki"); // siyah JS resim

bir.onclick = () => {
  bir.src = "./img/logo2.png";
  iki.src = "./img/js_logo.png";
};

iki.onclick = () => {
  bir.src = "./img/js_logo.png";
  iki.src = "./img/logo2.png";
};

bir.ondblclick = () => {
  bir.src = "./img/bir.jpeg";
  iki.src = "./img/iki.webp";
};
