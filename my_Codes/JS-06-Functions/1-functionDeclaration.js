// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------

//? Bir fonksiyon belirli bir görevi gerceklestirmek icin tasarlanmis, yeniden kullanilabilir, (tek bir görev icin tek fonksiyon olmasi daha iyidir) test etmesi kolaydir.

//! Fonksiyon Tanimlama Yöntemleri:
// Function Declaration (Fonksiyon Bildirimi)
// Function Expression (Fonksiyon Ifadesi)
// Arrow Function (Ok Fonksiyonlari)
// Fonksiyon Constructor (Fonksiyon Olusturucusu)

//! * -------- Function-Declaration ----------------------------*/
// 1-Fonksiyonlar function anahtar kelimesiyle tanimlanir.
// 2-function kelimesinin ardindan fonksiyonun ismi verilir.
// 3-Sonra da bir parantez acilip kapatilir.
//? Fonksiyonun calismasi icin cagirmak gereklidir. Fonksiyon cagirilmadiginda isleme alinmaz. Bu cagirma islemine invoke ya da call denir.

//! Function Declaration yöntemi ile fonksiyonun tanimlanmasi cagrilmasindan önce veya sonra olabilir.

console.log("******** 1- FUNCTION DECLARATION *********");

//* Örnek-1:

yazdir();

//? fonksiyonun tanimlanmasi:

function yazdir() {
  console.log("merhaba, nasilsiniz?");
}

//? call - invoke fonksiyonunu calistirma:
//yazdir

//* Örnek-2: (parametreli fonksiyon):

function adYazdir(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

adYazdir("kazim", "fatma", "gökhan");
adYazdir("mehmet", "muhterem");

//* Örnek-3: (parametreli, dönüs degerli-return):

function yasHesapla(isim, yil) {
  console.log(
    `benim adim ${isim} ve ben ${new Date().getFullYear() - yil} yasindayim`
  );

  return new Date().getFullYear() - yil;
}

const mehmet = yasHesapla("mehmet", 1988); //benim adim mehmet ve ben 36 yasindayim
const muhterem = yasHesapla("muhterem", 1990); //benim adim  muhterem ve ben 34 yasindayim
const fatma = yasHesapla("fatma", 2000); //benim adim fatma ve ben 24 yasindayim

//console.log(mehmet); //36
//console.log(fatma); //24

console.log((mehmet + muhterem + fatma) / 3); //31.333

//* Örnek-4: (tek-cift sorgulamasi):

console.log(isEvenOdd(34));
console.log(isEvenOdd(37));

function isEvenOdd(sayi) {
  console.log(sayi % 2 == 0 ? "cifttir" : "tektir");

  return sayi % 2 == 0 ? "cifttir" : "tektir";
}

//* Örnek-5: (arguments keyword'ü ile karsilama):

function sumAll() {
  //console.log(arguments);
  //console.log(arguments[0]); // [] array saymaya 0'dan baslae, bu yüzden ilk sayi 23'tür.
  //console.log(arguments[1]); // array'de 2.sayi 1 numarasina tekabül eder, bu yüzden 2.sayi 34'tür.

  let toplam = 0;
  for (let i = 0; i < 11; i++) {
    toplam = toplam + arguments[i];
  }
  return `${toplam}, ${arguments[4]}`;
}

console.log(sumAll(23, 34, 67, 89, 23, 45, 35, 67, 23, 12, 36));
