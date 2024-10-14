//* ======================================================
//*                     IOS CALCULATOR
//* ======================================================

const numberButtons = document.querySelectorAll(".num");
const operationButtons = document.querySelectorAll(".operator");
const equalButtons = document.querySelector(".equal");
const ustEkranDiv = document.querySelector(".previous-display");
const altEkranDiv = document.querySelector(".current-display");

let ustEkranSayi = "";
let altEkranSayi = "";
let islem = "";

//* herhangi bir number'a basilinca

numberButtons.forEach((number) => {
  number.onclick = () => {
    //! ekrani hazirla

    ekranaHazirlik(number.textContent);

    updateEkran();
  };
});

const ekranaHazirlik = (number) => {
  //? kullanici 0 girerse, sonrasinda 0 ve . disinda bir sayi girerse, ekranda sadece girilen yeni sayi (0 iptal olsun) gözüksün sadece 7 gözüksün mesela, altEkranYazi = num; bunu yap ama son basimi ital et ve döndür

  if (altEkranSayi == "0" && number != "0" && number != ".") {
    altEkranSayi = number;
    //! bu döngüden cik, bu isini globaldeki degiskeni degistirerek bitirdi ama bir sey döndürmeyecek, daha önceki 0'i da yok sayacak
    return;
  }

  //? kullanici herhango bir yerde . girmisken, tekrar nokta girmeye calisirsa giremesin

  if (number == "." && altEkranSayi.includes(".")) return;

  //? ekrana 10 basamakli sayi girilebilsin, 11.basamak girilmesin

  if (altEkranSayi.length > 9) return;

  //? kullanici ilk basta 0 girer, ardindan tekrar 0 girerse, girilmesin, tek 0 döndürsün

  if (altEkranSayi === "0" && number === "0") return;

  //? bütün sartlari basari ile gectiyse basilan numaralari arka arkaya ekle

  altEkranSayi += number;
};

//! burada yapilanlari ekrana bastir

const updateEkran = () => {
  //? ilk sayilar altekran'da görünsün

  altEkranDiv.textContent = altEkranSayi;

  //? islem girilince
  // üstekran'da altta yazan rakam + islem gözükmeli

  if (islem) {
    ustEkranDiv.textContent = ustEkranSayi + " " + islem;
  } else {
    ustEkranDiv.textContent = "";
  }
};

//* herhangi bir isleme tiklandiginda

operationButtons.forEach((op) => {
  op.onclick = () => {
    //? altekran bosken, hicbir sekilde sayi girisi yapilmamissa, operatöre basilmasin. Bos return yapmaya calistigimiz islemi yaptirmaz.
    //? return fonksiyon icerisinde her yerde kullanilabilir. Kod return satirina eristiginde fonksiyon durur ve deger fonksiyonun cagirildigi yere geri gönderilir. Bir fonksiyon icerisinde birden fazla return fonksiyonu da olabilir ve return deger döndürmek zorunda degildir.

    if (altEkranSayi === "") return;

    //? arka arkaya islem yapilirsa (esittir'e basmadan hesaplama yapilsin)
    if (altEkranSayi && ustEkranSayi) hesapla();

    islem = op.textContent;

    ustEkranSayi = altEkranSayi;

    altEkranSayi = "";

    updateEkran();
  };
});

//* esittir butonuna tiklandiginda

equalButtons.onclick = () => {
  hesapla();

  updateEkran();
};

//* hesapla fonksiyonu

const hesapla = () => {
  let sonuc;
  switch (islem) {
    case "+":
      sonuc = Number(ustEkranSayi) + Number(altEkranSayi);
      break;
    case "-":
      sonuc = ustEkranSayi - altEkranSayi;
      break;
    case "x":
      sonuc = ustEkranSayi * altEkranSayi;
      break;
    case "÷":
      sonuc = ustEkranSayi / altEkranSayi;
      break;
    default:
      break;
  }

  //! hesaplama yapildiktan sonra ekranda olmasini istediklerimi vs-code'da güncelleyip updateEkran()'i cagirmaliyim
  altEkranSayi = sonuc;
  ustEkranSayi = "";
  islem = "";
};

//? AC butonuna basildiginda
document.querySelector(".ac").onclick = () => {
  ustEkranSayi = "";
  altEkranSayi = "";
  islem = "";
  updateEkran();
};

//? PM (+-) butonuna basildiginda
document.querySelector(".pm").onclick = () => {
  //* ekranda sayi yokken PM'e basilmasin

  if (altEkranSayi !== "") {
    altEkranSayi = altEkranSayi * -1;
  }
  updateEkran();
};

//? percent (%) butonuna basildiginda
document.querySelector(".percent").onclick = () => {
  //* ekranda sayi yokken percent'e basilmasin

  if (altEkranSayi !== "") {
    altEkranSayi = altEkranSayi / 100;
    updateEkran();
  }
};
