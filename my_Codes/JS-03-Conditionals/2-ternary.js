//!  ************  TERNARY OPERATOR ************ //
// Sarta bagli durumlar yazmak icin baska ve daha kisa bir yöntem de ternary operatör
// ECMASCRIPT 6 ile gelen bir özellik

//* Örnek-1: Askerlik örnegi if yapisi ile:

// let yas = 17;
// console.log(typeof h);

// if (yas > 18 && h === "saglikli") {
//   console.log("Askerlik yapabilir");
// } else {
//   console.log("Askerlik yapamaz");
// }

// //* Örnek -1: Askerlik örnegi Ternary ile:

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
