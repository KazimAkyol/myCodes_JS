//! ************ IF - ELSE ********** //

// if (sart) {
//     sart durumu dogru ise bu blok calistirilir.
// }else{
//     sart durumu dogru degilse bu blok calistirilir.
// }

let sicaklik = 30;

if (sicaklik > 50) {
  console.log("yikamaya basla");
} else {
  console.log("suyu isitmaya devam et");
}

//! prompt, kodu kullanicidan bilgi almayi saglar.
//! Kullanicidan alinan her bilgi string olarak gelir.

//* Girilen bir sayinin tek mi, cift mi oldugunu yazan program:

// let sayi = Number(prompt("Bir sayi giriniz"));

// let kalan = sayi % 2;

// if (kalan === 0) {
//   console.log("Sayi cifttir");
// } else {
//   console.log("Sayi tektir");
// }

//! ******* IF - ELSE IF - ELSE ******* //

// if (sart1) {
//     sart1 durumu dogru ise bu blok calistirilir.
// } else if (sart2) {
//     sart1 durumu dogru degil, sart2 durumu dogru ise bu blok calistirilir.
//  } else {
//     sart durumu dogru degilse bu blok calistirilir.
//  }

//! HESAP MAKINESI

console.log("*******Hesap Makinesi*******");

// 7 + 5 = 12
// 7- 5 = 2
// 7 * 5 = 35
// 7 / 5 = 1

const sayi1 = +prompt("1.sayiyi griniz");
const islem = prompt(" Bir operatör giriniz(+,-,*,/):");
const sayi2 = +prompt("2.sayiyi giriniz");

let sonuc;

if (islem == "+") {
  sonuc = sayi1 + sayi2;
} else if (islem == "-") {
  sonuc = sayi1 - sayi2;
} else if (islem == "*") {
  sonuc = sayi1 * sayi2;
} else if (islem == "/") {
  sonuc = sayi1 / sayi2;
} else {
  console.log("Yanlis operatör girdiniz");
}

console.log("SONUC", sonuc);

if (sonuc != 0) {
  console.log("Tebrikler bir sonuc buldunuz", sonuc);
}

//* 1.Kisayol
if (sonuc) {
  console.log("Tebrikler bir sonuc buldunuz", sonuc);
}

