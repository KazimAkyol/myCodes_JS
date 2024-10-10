let rastgeleSayi = Math.ceil(Math.random() * 20);

console.log(rastgeleSayi);

let mesaj = document.querySelector(".msg");
let tahmin = document.querySelector(".guess");

//! her check butonuna basinca olacaklar:

document.querySelector("check").onclick = () => {
  if (tahmin.value == rastgeleSayi) {
    document.querySelector("body").style.backgroundColor = "green";

    mesaj.textContent = "Tebrikler...";

    document.querySelector(".number").textContent = rastgeleSayi;
  } else if (tahmin.value > rastgeleSayi) {
    mesaj.textContent = "AZALT";
  } else {
    mesaj.textContent = "ARTTIR";
  }
};

//! soru isareti kutusuna tiklandiginda yeni yarismaci icin sayfayi hazirla:

document.querySelector(".number").onclick = () => {
  //* bilgisayar yeni bir sayi tutsun
  rastgeleSayi = Math.ceil(Math.random() * 20);

  //* body'nin rengi turuncu olsun
  document.querySelector("body").style.backgroundColor = "red";

  //* tahmin beliren kutuda tekrar ? olsun
  document.querySelector(".number").textContent = "?";

  //* mesaj kisminda "oyun yeni oyuncu icin tekrar basliyor" yazsin

  mesaj.textContent = "oyun yeni oyuncu icin tekrar basliyor";
};

//! enter'a basilinca check butonuna basilmis gibi calissin:

tahmin.onkeydown = (tus) => {
  console.log(tus);

  if (tus.key == "Enter") {
    // if(tus.keyCode==13){

    document.querySelector(".check").click();
  }
};

