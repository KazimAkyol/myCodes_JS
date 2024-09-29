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

//? bazi fonksiyonlar

//* Math.floor(); her zaman en yakin alt tam sayiya yuvarlar.
//* Math.ceil(); her zaman en yakin üst tam sayiya yuvarlar.
//* Math.trunc(); sayinin tam kismini alir.
//* Math.round(); en yakin tam sayiya yuvarlar.

//* Math.random(); 0 ve 1 arasinda rastgele sayi üretir.

//* toFixed(x); virgülden sonra x adet basamak birakir.

const ab = 1.3;
const cd = 1.8;
console.log(Math.floor(ab)); //1
console.log(Math.floor(cd)); //1

console.log(Math.ceil(ab)); //2
console.log(Math.ceil(cd)); //2

console.log(Math.trunc(ab)); //1
console.log(Math.trunc(cd)); //1

console.log(Math.round(ab)); //1
console.log(Math.round(cd)); //2

console.log((3.145674893939).toFixed(3)); //3.146

console.log(Math.random()); // 0-1 arasinda rastgele bir sayi üretir.

//document.write(Math.trunc(ab));

//* RANDOM: rastgele, rastgele sayi üretmek icin kullanilir.
//* 0-1 arasinda bir sayi üretir.
console.log(Math.random());
console.log(Math.ceil(Math.random() * 20)); // 1-20 arasinda rastgele bir sayi üretir.

//* ARTTIRMA, AZALTMA

let a = 5;

console.log("ilk", a++); //5
console.log("ikinci", a); //6
