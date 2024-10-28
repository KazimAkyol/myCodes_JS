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

  // sesin volume'ünü 0 ile 1 arasinda degerler vererek ayarlayabiliriz

  ses1.volume = 0.1;
};

//! baglat butonuna tiklandiginda

document.querySelector(".baglat").onclick = () => {
  resim.src = "./image/telbagla.gif";

  // audio'nun sesini kapatmak icin pause() komutu
  ses1.pause();
};

//! konus butonuna tiklandiginda

document.querySelector(".btn-outline-danger").onclick = () => {
  resim.src = "./image/telfirlat.gif";
};

//! mouse ile resmin üzerine gelince

// resim.onmouseover = () => {};

resim.addEventListener("mouseover", () => {
  resim.src = "./image/aslan1.jpeg";
});

//! mouse ile resmin üzerinden ayrilinca

resim.addEventListener("mouseout", () => {
  resim.src = "./image/aslan2.jpeg";

  document.querySelector(".ses2").play();
});

//! klavyeden input'a veri girisi yapilirken, checked'in tikli olmasina bagli olarak, elimizi tustan cektigimizde olacaklar

const textInput = document.querySelector("textbox");
const checkInput = document.querySelector("checkbox");

textInput.onkeyup = () => {
  // checked=metodu checkbox input'un tikli olup olmadigini kontrol eder, tiklanmissa true döndürür.

  if (checkInput.checked) {
    textInput.value = textInput.value.toUpperCase();
  } else {
    textInput.value = textInput.value.toLowerCase();
  }
};
