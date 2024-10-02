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
