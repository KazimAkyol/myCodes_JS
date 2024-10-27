let resim = document.querySelector(".resim");

//! ara butonuna tiklandiginda

document.querySelector(".ara").onclick = () => {
  resim.src = "./image/img.gif";
};

//! baglat butonuna tiklandiginda

document.querySelector(".baglat").onclick = () => {
  resim.src = "./image/telbagla.gif";
};
