//!  ************  TERNARY OPERATOR ************ //
// Sarta bagli durumlar yazmak icin baska ve daha kisa bir yöntem de ternary operatör
// ECMASCRIPT 6 ile gelen bir özellik

//* Örnek: Askerlik örnegi if yapisi ile:

// let yas = 17;
// console.log(typeof h);

// if (yas > 18 && h === "saglikli") {
//   console.log("Askerlik yapabilir");
// } else {
//   console.log("Askerlik yapamaz");
// }

// //* Örnek: Askerlik örnegi Ternary ile:

// yas > 18 ? console.log("Askerlik yapabilir") : console.log("Askerlik yapamaz");

const age = 19;
const health = true;
const gender = "male";

if (age > 18 && health == true && gender == "male") {
  console.log("Askerlik yapabilir");
} else {
  console.log("Askerlik yapamaz");
}

let mesaj =
  age > 18 && health == true && gender == "male"
    ? console.log("tamam, sen git askere")
    : console.log("hayir, asla gidemezsin");

const sayi1 = 56;
const sayi2 = 23;

//* Toplamindan cikan sonuc 60'tan büyükse sayilari carp, kücükse sayilari böl:

let sonuc = sayi1 + sayi2;

sonuc > 60 ? console.log(sayi1 * sayi2) : console.log(sayi1 / sayi2);

let result = sonuc > 60 ? sayi1 * sayi2 : sayi1 / sayi2;

console.log(result);

//* grade 50'den büyükse gecti, degilse kaldi:

let grade = 40;

grade > 50 ? console.log("Gectiniz") : console.log("Kaldiniz");

// else icin bir degerimiz yoksa "" ve null verip kurtulabiliriz:
grade > 50 ? console.log("Gectiniz") : null;

//* ÖRNEK SORULAR
//* Örnek-1: Bir sayi 50 ile 100 arasinda mi? Evetse 50 ile 100 arasinda, degilse bu aralikta degil yadiralim:

let num = 55; // 101 degeri verildiginde "Bu aralikta degil" seklinde de console'a yazdirilabilir.
num > 50 && num < 100
  ? console.log("50 ile 100 arasinda")
  : console.log("Bu aralikta degil");

//* Örnek-2: Bir sayi hem 3'e hem 5'e tam bölünüyor mu?
let sayi3 = 45;
let sonuc3 = sayi3 % 3 === 0 && sayi3 % 5 === 0 ? "Bölünebilir" : "Bölünemez";
console.log(sonuc3);

//* Örnek-3: Bir araba modeli hem elektrikli hem de 2020'den sonra mi üretilmis?
let isElectric = true;
let productionYear = 2022;

//* Örnek-4: Bir kisi yetiskin mi yasli mi (yas 18'den büyük ve 65'ten büyük)?
let age1 = 70;

//* Örnek-5: Bir sayi hem negatif hem tek mi?
let num1 = -3;

//* Örnek-6: Bir sayi hem 4'e hem 6'ya tam bölünebiliyor mu?
let sayi4 = 24; // Kontrol etmek istedigimiz sayi
let sonuc2 = sayi4 % 4 === 0 && sayi4 % 6 === 0 ? "Bölünebilir" : "Bölünemez";
console.log(sonuc2);

//* Örnek-7: Bir sayı 5’e bölünebiliyor mu ve 50’den büyük mü?

//* Örnek-8: İki sayı toplamı 100’den büyük ve farkları 20’den küçük mü?

//* Örnek-9: Bir sayı hem çift mi hem de 10’un katı mı?

//* Örnek-10: Bir sayı 1000’den büyük mü ve 5’e tam bölünebiliyor mu?
