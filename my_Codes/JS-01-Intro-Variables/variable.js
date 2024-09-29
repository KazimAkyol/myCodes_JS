//!  %%%%%%%%%%% DEĞİŞKEN TANIMLAMA  %%%%%%%%%%%%%%%%

// CONST ve LET,ECMASCRIPT6 ile gelmistir. VAR eski versiyonlardan beri bulunmaktadir.

//! ===================  CONST  ======================
//? const ve let Modern Javascript ile gelmis yeni degisken tanimlama keyword'leridir.
//! const: Sadece baslangicta deger atanabilir.
//! Sonradan degeri degistirilemez (non-ptimitive'ler (array...) haric).

const degiskenAdi = "Javascript";

const sayi = 7;

console.log(typeof degiskenAdi, typeof sayi); // string number

//! sayi = 8 // Assignment to constant variable.
//! const ile tanimlanan degiskenler degistirilemez.

//! ======================  LET  ========================
//? let de const gibi yaygin kullanilan degisken tanimlama yöntemidir.
//! const'dan farki, sadece tanimlama kisminda degil; istenildigi zaman degistirilebilir.
//* const gibi tanimlandigi blok icerisinde gecerlidir. Baska yerlerden erisilemez. (Block-Scoped)
//? const kullanamadigimiz durumlarda (degiskenin degeri sürekli degisecekse) let kullanmaliyiz.

let dil = "javascript";

dil = "java";

console.log(dil); //java

let sayi1 = 23;

sayi1 = 34;

let sayi2 = "45";

console.log(sayi2 + 56); //4556

//! Bir string ile number toplanirsa aslinda toplama yapmaz, onlari iki kelime gibi yanyana yazar.

console.log(sayi2 - 34); //11
console.log(sayi2); //45

//! ===================  VAR VERİ TİPİ ===============================
//? var ile bir degisken tanimlandiginda let de oldugu gibi degeri sonradan degistirilebilir.
//! var degiskenleri tanimlandigi yere göre global veya fonksiyon icerisinde erisilebilir.
//* Degisken fonksiyon icerisinde tanimlandi ise ancak o fonksiyonda erisilebilir. (Function-Scoped)
//? Eger, degisken fonksiyonlarin disinda tanimlandi ise tüm her yerden erisilebilir. (Global-Scoped)
//! Günümüzde programcilar global degisken gerekmedikce var ile degisken tanimlamayi secmemektedir.

var sayi3 = 67;

sayi3 = 56;

console.log(sayi3); //56

console.log("*************************");

var ilk = "global";

console.log(ilk); //global

{
  console.log(ilk); //global

  ilk = "GLOBAL";
  console.log(ilk); //GLOBAL

  var ikinci = "naber";
}

console.log(ikinci); //naber
console.log(ilk); //GLOBAL // var oldugu icin süslünün disindan da erisebildik.

console.log("*********** LET **************");

let first = "osman"; //global-scoped

console.log(first); //osman

{
  // block scope
  console.log(first); //osman

  first = "hüseyin";
  console.log(first); //hüseyin

  let second = 45;
  console.log(second); //45
}

console.log(first); //hüseyin

// console.log(second);
// let ve const ile tanimlanan block'taki elemana disaridan erisemeyoz.

console.log("*********** CONST **************");

const erste = "kazim";
console.log(erste); //kazim

{
  console.log(erste); //kazim

  // erste = "muhterem"; // seklinde degistirmeye calisinca hata verdi.

  const zweite = "gökhan";

  console.log(zweite); //gökhan
}

// console.log(zweite);

// const ve let icin scope icinde olan scope (süslü) kalir.
