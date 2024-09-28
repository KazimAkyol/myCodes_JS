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

console.log(sayi2 - 34); //45-34=11
console.log(sayi2); //45

//! ===================  VAR VERİ TİPİ ===============================
//? var ile bir degisken tanimlandiginda let de oldugu gibi degeri sonradan degistirilebilir.
//! var degiskenleri tanimlandigi yere göre global veya fonksiyon icerisinde erisilebilir.
//* Degisken fonksiyon icerisinde tanimlandi ise ancak o fonksiyonda erisilebilir. (Function-Scoped)
//? Eger, degisken fonksiyonlarin disinda tanimlandi ise tüm her yerden erisilebilir. (Global-Scoped)
//! Günümüzde programcilar global degisken gerekmedikce var ile degisken tanimlamayi secmemektedir.
