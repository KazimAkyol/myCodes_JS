// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanimlama:

//! 1.yöntem (Array literal) tercih edilen yöntem:

const yaslar = [30, 56, 45, 98, 23];

console.log(yaslar);

//yaslar = [3, 5, 7]; // Assigment to constant variable.

//! 2.yöntem (Array constructor):

const cars = new Array("BMW", "TOFAS", "VOLVO");
console.log(cars);

//*************************** */

const birth = 1979;

const isimler = [
  "fatma",
  "kazim",
  "gökhan",
  2024 - birth,
  "muhterem",
  true,
  yaslar,
];

console.log(isimler);

console.log(isimler[2]);
