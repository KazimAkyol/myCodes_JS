// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!-----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
//! Function expression ve arrow function yöntemlerinde önce fonksiyon tanimlanmalidir sonra cagrilmalidir. Aksi takdirde hata alirsiniz.

console.log("******** 2- EXPRESSION*******");

//* Örnek-1: (tek-cift kontrolü):

//! isEvenOdd(34); Expression da fonksiyon tanimlanmadan cagiramayiz.

const isEvenOdd = function (sayi) {
  return sayi % 2 == 0 ? "cifttir" : "tektir";
};

console.log(isEvenOdd(34)); //cifttir

const result = isEvenOdd(35);
console.log(result); //tektir

//* Örnek-2:

const buyukBul = function (a, b, c) {
  let enBuyuk; // function scope
  if (a > b && a > c) {
    enBuyuk = a;
  } else if (b > a && b > c) {
    enBuyuk = b;
  } else enBuyuk = c;

  console.log(enBuyuk);
};

buyukBul(243, 475.78); //475

//* Örnek-3: (arguments keyword'ü ile):

const enBul = function () {
  let enBuyuk = arguments[0];
  let enKucuk = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > enBuyuk) {
      enBuyuk = arguments[i];
    }

    if (arguments[i] < enKucuk) {
      enKucuk = arguments[i];
    }
  }
  return `en büyük sayi ${enBuyuk}, en kücük sayi ${enKucuk}`;
};

console.log(enBul(34, 111, 777, 678, 56, 2, 5678, 34, 6));

//* Örnek-4: Bir fonksiyon icinden baska bir fonksiyon cagirilabilir.
