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

//? ARTTIRMA VE AZALTMA

let a = 5;
console.log("ilk", a++); //5
console.log("ikinci", a); //6

let b = a++;
console.log(b); //6
console.log(a); //7

let c = 10;
console.log("ilk", ++c); //11

let d = ++c;
console.log(d); //12
console.log(c); //12

let e = 33;
console.log("ilk", e--); //33
console.log("ikinci", e); //32

console.log(--e); //31
console.log(e); //31

//! e'yi 5 arttir

e = e + 5;
console.log(e); //36
console.log((e += 5)); //41

//! e'yi 5 ile carp

e = e * 5;
console.log(e); //205
console.log((e *= 5)); //1025
console.log((e -= 5)); //1020
console.log((e /= 5)); //204
console.log((e %= 5)); //4

//? CARPMA VE ÜS ALMA

const PI = 3.14;
const yaricap = 5;

console.log(PI * yaricap ** 2); //78.5

//! Math pow(power) bir sayinin kuvvetini/üssünü almak icin kullanilir.

console.log(PI * Math.pow(yaricap, 2)); //78.5

//! Math sqrt metodu verilen degerin karekökünü alir.

console.log(Math.sqrt(144)); //12

console.log(144 ** (1 / 2)); //12

//********* MOD ALMA ******** */

const number = 456;

console.log("birler", 456 % 10); //birler basamagi 6
console.log("onlar", Math.trunc((456 % 100) / 10)); //onlar basamagi 5
console.log("yüzler", Math.trunc(456 / 100)); //yüzler basamagi 4

// * =======================================================
// *                 KARŞILAŞTIRMA OPERATÖRLERİ
// * =======================================================

const nummer = 4;

console.log(nummer == 4); //true
console.log(nummer === 4); //true
console.log(nummer === "4"); //false
console.log(nummer == "4"); //true

console.log(nummer != 4); //false, nummer 4'e esit degil demi?
console.log(nummer != 5); //true, nummer 5'e esit degil demi?
console.log(nummer != "4"); //false, nummer "4" 'e esit degil demi?

console.log(nummer > 4); //false
console.log(nummer >= 4); //true

// * =======================================================
// *         MANTIKSAL OPERATORLER (logical operators)
// * =======================================================

console.log("**********************");

//? TRUE:
console.log(Boolean(5));
console.log(Boolean(5.8));
console.log(Boolean(-5.8));
console.log(Boolean([1, 2, 5]));

//? FALSE:
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(NaN)); // false, NaN:Not a Number

let v = null;
console.log(v); //null

const v1 = false || 4;
console.log(v1); //4
console.log(Boolean(v1)); //true

const v2 = false || 0 || null || 12.6 || false || 3;
console.log(v2); //12.6
console.log(Boolean(v2)); //true

const v3 = false || 0 || undefined || "" || null || NaN;
console.log(v3); //NaN
console.log(Boolean(v3)); //false

const v4 = 5 && 3.5 && true && 0;
console.log(v4); //0
console.log(Boolean(v4)); //false

const v5 = 4 && 13.4 && true && -5;
console.log(v5); //-5
console.log(Boolean(v5)); //false

// * =======================================================
// *                 TİP DÖNÜŞÜMLERİ
// * =======================================================

let para = Number("1000") + Number("400");

console.log(para); //1400
console.log("1000" - "400"); //600
console.log("1000" * "400"); //400000
console.log("1000" / "400"); //2.5
console.log("1000" + "400"); //1000400

const s1 = 12;
const s2 = "23";
console.log(s1 + Number(s2)); //35

//*****/

let ss1 = "123.456";

console.log(parseInt(ss1)); //123, string'i tam sayiya cevirir.
console.log(parseFloat(ss1)); //123.456, string'i sayiya cevirir.

let f = 123.678;

console.log(f.toString()); // number'i string'e cevirir.

//* ile number'a cevirme:

let ee = "12";

console.log(typeof +ee); //number

//* toFixed(x) metodu virgülden sonra x basamak kadar birakmamizi saglar ama sayiyi string'e cevirir.

let z = 34.4564563456;

console.log(+z.toFixed(3)); //34.456

//* prompt komutu da toFixed gibi kullanilan sayiyi string yapar.

//const age = +prompt("yasinizi giriniz");

console.log(typeof age);

//* Null, Undefined, NaN:

console.log(typeof null); //object
console.log(Boolean(null)); //false
console.log(null - 5); //-5

console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(null === null); //true

console.log(Number("asdfg")); //NaN

//! GENEL KÜLTÜR

console.log(Number("0x11")); // x=hexa 16'lik taban = 17

console.log(Number("0b101")); // b=binary 2'lik taban = 5

console.log(Number("0o11")); // o=octal 8'lik taban = 9
