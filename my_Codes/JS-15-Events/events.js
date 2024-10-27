document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.textAlign = "center";

let resim = document.querySelector(".resim");

let ses1 = document.querySelector(".ses1");

//! ara butonuna tiklandiginda:

document.querySelector(".ara").onclick = () => {
  resim.src = "./image/img.gif";
};

//* audio calistir. play() komutu HTML'deki audio'yu calistirir
ses1.play();

// sesin volume'ünü 0 ile 1 arasinda degerler vererek ayarlayabiliriz
ses1.volume = 0.5;

//! baglat butonuna tiklandiginda:

document.querySelector(".baglat").onclick = () => {
  resim.src = "./image/telbagla.gif";

  //* audio'nun sesini kapatmak icin pause() komutu
  ses1.pause();
};

//! konus butonuna tiklandiginda:

document.querySelector(".btn-outline-danger").onclick = () => {
  resim.src = "./image/telfirlat.gif";
};

//! mouse ile resmin üzerine gelince

// resim.onmouseover = () => {}

resim.addEventListener("mouseover", () => {
  resim.src = "./image/aslan1.jpeg";
});

//! mouse ile resmin üzerinden ayrilinca

resim.addEventListener("mouseout", () => {
  resim.src = "./image/aslan2.jpeg";

  //document.querySelector(".ses2").play();
});

//! klavyeden input'a veri girisi yapilirken, checked'in tikli olmasina bagli olarak, elimizi klavyeden cektigimizde olacaklar

const textInput = document.querySelector("#textbox");
const checkInput = document.querySelector("#checkbox");

textInput.onkeyup = () => {
  // checked=metodu checkbox input'un tikli olup olmadigini kontrol eder, tiklanmissa true döndürür
  if (checkInput.checked) {
    //console.log(textInput.value);
    textInput.value = textInput.value.toUpperCase();
  } else {
    textInput.value = textInput.value.toLowerCase();
  }
  //input'a veri girisi yaptigimizda, kücük tikliyse benim büyük input'a girdigim harfleri büyüt, aksi durumda kücült
};

//! listemin basina "Programlama Dilleri" h1 etiketi ekleme

//? HTML'de h1 etiketi olusturmak
const baslik = document.createElement("h1");

{
  /* <h1></h1> */
}

//? baslik2 şeklinde class ismi ekleyelim
baslik.className = "baslik2";

{
  /* <h1 class="baslik2"></h1> */
}

//? Programlama Dilleri şeklinde yazı oluşturduk

const yazi = document.createTextNode("Programlama Dilleri");

//? h1 elemeti icin olusturdugum text'i h1'e child yapalim

baslik.appendChild(yazi);

{
  /* <h1 class="baslik2">Programlama Dilleri</h1> */
}

//? listemin üstündeki div'in sonrasina ekleyelim

document.querySelector("main").after(baslik);

//!  "append" metodu ile seçtiğimiz HTML etiketi bitmeden önceki son kısma ekleme yapabiliriz (<div>merhaba -buraya-  </div>).  "prepend" metodu ile seçtiğimiz HTML etiketi başladıktan sonraki ilk kısma ekleme yapabiliriz  (<div> -buraya-  merhaba   </div>).  "after" metodu ile ile seçtiğimiz HTML etiketi bittikten sonraki ilk kısma ekleme yapabiliriz (<div> merhaba </div>  -buraya-).
//! *******kısayol**********

const bolum = document.querySelector(".section");

bolum.innerHTML =
  `<h1 class='baslik2'>Programlama Dilleri</h1>` + bolum.innerHTML;

//! languages input'una girilen verileri ul'ye eklemek
//! uzun yol:

const dil = document.querySelector(".languages");
const liste = document.querySelector(".liste");

document.querySelector(".ekle").onclick = () => {
  //* yeni girilen satiri saklamak icin bir li olusturduk
  // const yeniLi = document.createElement("li");
  //* yeni li icin textnode olusturduk
  // const text = document.createTextNode(dil.value);
  //* olusturdugumuz textnode'u yeni li'ye bagladik
  // yeniLi.appendChild(text);
  //* yeni eklenen satiri var olan listeye (ul) baglayalim
  // liste.appendChild(yeniLi);
};

document.querySelector(".ekle").onclick = () => {
  liste.innerHTML = liste.innerHTML + `<li>${dil.value}</li>`;

  // ekle'ye basilip li eklenince input'un ici bosalsin
  dil.value = "";
};

//! sil komutuna basinca ul listesinden li elemani silmek

document.querySelector(".sil").onclick = () => {
  liste.removeChild(liste.lastElementChild); // ul'nin son cocugunu siler

  liste.removeChild(liste.firstElementChild); // ul'nin ilk cocugunu siler

  liste.removeChild(liste.children[2]); // ul'nin 2 indexli cocugunu siler
};
