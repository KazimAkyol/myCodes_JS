// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

const cola = 50;
const cips = 35;
const dondurma = 20;

console.log("cola" + cips + dondurma); //cola3520

let toplam = cola + cips + dondurma;

console.log(toplam); // 105

//! 1 arttir

toplam = toplam + 1;

console.log(toplam); //106

toplam++;

console.log(toplam); //107

//!10 arttir

toplam = toplam + 10;

toplam += 10;

console.log(toplam); //127

//? + operatörü string concatination islemi de yapar.

const sayi1 = "12";
const sayi2 = 45;

console.log(sayi1 + sayi2); //1245
console.log(sayi1 - sayi2); //-33

const isim = "mehmet";
const soyisim = "kara";

console.log("benim adim soyadim " + isim + " " + soyisim); //benim adim soyadim mehmet kara

//! BACKTICK (template literals) ``

console.log(`benim adim soyadim ${isim} ${soyisim} `); //benim adim soyadim mehmet kara