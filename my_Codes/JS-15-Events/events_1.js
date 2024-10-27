document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.textAlign = "center";
// Örnekler yazisinin rengini kirmizi yapip, yaziyi sayfada ortaladik

let resim = document.querySelector(".resim");

let ses1 = document.querySelector(".ses1");

//! ara butonuna tiklandiginda

document.querySelector(".ara").onclick = () => {
  resim.src = "./image/img.gif";

  //* audio calistir. play() komutu HTML'deki audio'yu calistirir
  ses1.play();
};

//! baglat butonuna tiklandiginda

document.querySelector(".baglat").onclick = () => {
  resim.src = "./image/telbagla.gif";
};

//! konus butonuna tiklandiginda

document.querySelector(".btn-outline-danger").onclick = () => {
  resim.src = "./image/telfirlat.gif";
};
