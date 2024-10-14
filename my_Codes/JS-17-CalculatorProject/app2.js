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
};
