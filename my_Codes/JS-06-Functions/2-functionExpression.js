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

console.log(isEvenOdd(34));
