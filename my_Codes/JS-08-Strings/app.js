// ?=========================================================
// ?                 STRINGLER
// ?=========================================================

//! String Tanimlama

const str1 = "Clarusway DE-10";
const str2 = `Hello world!`;

console.log(str2); // Hello world!

//* String constructor ile String olusturma

const str3 = new String("World");
console.log(str3); // "World"

const str4 = "🐝";
console.log(str4); // 🐝

//! Normalde primitive veri tiplerinin property veya metodu olmaz.
//! Ancak Javascript otomatik olarak primitive String'leri String object'lerine dönüstürür. Bu sayede, String object'lerine ait olan fonksiyonlar veya özellikleri primitive string ile kullanmak mümkün olur.
//! Ayrica 2 tür arasinda cevrim yapmakta mümkündür.

//* -------------------------------------------------------------------------- */
//*                         STRING YAPISI VE INDEXLEME                         */
//* -------------------------------------------------------------------------- */

let kelime = "Clarusway";

console.log(kelime[0]); // C
console.log(kelime[1]); // l
console.log(kelime[2]); // a

for (let i = 0; i <= 8; i++) {
  console.log(kelime[i]); // Clarusway
}

//* Stringler, parca olarak degistirilmez.
//* You cannot mutate a string, since it is a primitive value: immutable

kelime[7] = 0;
console.log(kelime); // Clarusway

//! ************ STRING PROPERTY ************
//* Property bir string'in kendi özelligidir, bir method(fonksiyon) degildir.
//* Parantez acip kapatmaya gerek yoktur.

//? length
//* prototype

//! ************ STRING METHODS ************
//* charAt()             Returns the character at the specified index.
//* charCodeAt()	        Returns the Unicode of the character at the specified index.
//* concat()	            Joins two or more strings, and returns a new string.
//* endsWith()	        Checks whether a string ends with a specified substring.
//* fromCharCode()	    Converts Unicode values to characters.
//* includes()	        Checks whether a string contains the specified substring.
//* indexOf()	        Returns the index of the first occurrence of the specified value in a string.
//* lastIndexOf()	    Returns the index of the last occurrence of the specified value in a string.
//* localeCompare()	    Compares two strings in the current locale.
//* match()	            Matches a string against a regular expression, and returns an array of all matches.
//* repeat()	            Returns a new string which contains the specified number of copies of the original string.
//* replace()	        Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
//* search()	             Searches a string against a regular expression, and returns the index of the first match.
//* slice()	            Extracts a portion of a string and returns it as a new string.
//* split()	            Splits a string into an array of substrings.
//* startsWith()	        Checks whether a string begins with a specified substring.
//* substr()	            Extracts the part of a string between the start index and a number of characters after it.
//* substring()	        Extracts the part of a string between the start and end indexes.
//* toLocaleLowerCase()	Converts a string to lowercase letters, according to host machine's current locale.
//* toLocaleUpperCase()	Converts a string to uppercase letters, according to host machine's current locale.
//* toLowerCase()	    Converts a string to lowercase letters.
//* toString()	        Returns a string representing the specified object.
//* toUpperCase()	    Converts a string to uppercase letters.
//* trim()	            Removes whitespace from both ends of a string.
//* valueOf()	        Returns the primitive value of a String object.

// *=========================================================
// *               lenght - Property
// *=========================================================

//? lenght => Bir string'in bosluklarda dahil kac karakterden olustugunu verir.

const metin = "Clarusway🚗";
console.log(metin.length); // 11

//* Emojiler 2 karakter uzunlugundadir.

for (let i = 0; i <= metin.length - 1; i++) {
  console.log(metin[i]);
}

let emoji = "🚗";
console.log(emoji.length); // 2

//! ************ STRING METHODS ************
//* String metodlari () kullanilir. (Arka planda fonksiyonlardir.)
//? Chaining yani zincirleme olarak birden fazla metod birlikte kullanilabilir.

// *=========================================================
// *   toLowerCase() toUpperCase() immutable=değiştirmez
// *=========================================================

//? Karakterleri büyük harfe dönüstürme => .toUpperCase()

console.log(metin.toUpperCase()); // CLARUSWAY🚗
console.log(metin); // Clarusway🚗
//* Degisim gecicidir. Tamamen degistirmiyor, degistirip kaydetmek istiyorsak yeni bir degere atamaliyiz.
let yeniMetin = metin.toUpperCase();
console.log(yeniMetin); // CLARUSWAY🚗

//? Karakterleri kücük harfe dönüstürme => .toLowerCase()

console.log(yeniMetin.toLowerCase()); // clarusway🚗
let yeniMetin2 = yeniMetin.toLowerCase();
console.log(yeniMetin2); // clarusway🚗

/* -------------------------------------------------------------------------- */
/*                      //! String Bİrleştirme yöntemleri                     */
/* -------------------------------------------------------------------------- */

//* + ile birlestirme
//* concat ile birlestirme
//* Template Literal (``) ile baglama

let text1 = "Merhaba";
let text2 = "Javascript";

console.log(text1 + " " + text2); // Merhaba Javascript

let text = "Merhaba";

text += "clarusway";
console.log(text); // Merhabaclarusway

// let a = 5;
// let b = 4;

// a += b;
// console.log(a);

// *=========================================================
// *               concat() immutable=değiştirmez
// *=========================================================

//? concatanation

const s1 = "Mola Saati";
const s2 = " yaklasiyor";

console.log(s1.concat(s2)); // Mola Saati yaklasiyor
console.log(s1);
console.log(s2);

let newStr = s1.concat(s2);
console.log(newStr); // Mola Saati yaklasiyor

// *=========================================================
// *               Template Literals
// *=========================================================

//* ES6 ile tanıtılan bu yöntem, backtick işareti (``) kullanarak string birleştirmeyi kolaylaştırır ve değişkenleri doğrudan string içinde kullanmanıza olanak tanır.

let str5 = "Merhaba";
let str6 = "Dünya";

console.log("Merhaba" + "Dünya"); // MerhabaDünya
console.log(`${str5} ${str6}`); // Merhaba Dünya

console.log(`${str5} 

    ${str6} 
    
    "Nasilsin?"`); // seklinde yazilir

//! String Parcalama Metodlari

//* split()
//* substring()
//* substr()
//* slice()

// *=========================================================
// *                 split() immutable
// *=========================================================
//* Stringi belirtilen şekilde parçalara ayırır ve parçalarını bir diziye aktarır
//* str.split(seperator)
//* separator : ayraç
//* Parçaladığı elemanları bir diziye aktarır.

const metin1 = "Clarusway IT Bootcamp DE10";
console.log(metin1.split(" "));
console.log(metin1); // Clarusway IT Bootcamp DE10

let parcalanmisMetin = metin1.split(" ");
console.log(parcalanmisMetin);
console.log(parcalanmisMetin[2]); // Bootcamp

for (let i = 0; i < parcalanmisMetin.length; i++) {
  if (parcalanmisMetin[i] === "IT") {
    console.log("Bu cümle IT kelimesi iceriyor"); // Bu cümle IT kelimesi iceriyor
  }
  //console.log(parcalanmisMetin[i]);
}

//* Cümleyi harf harf parcalamak icin
console.log(metin1.split("")); // tirnak icerisinde bosluk birakilmadigi icin yazilan kelimeleri harf harf console'a yazdirir.

//! Verilen tarih bilgisini gün/ay/yil olarak ayirma:

let date = "27.09.2024";
let newDate = date.split(".");
console.log(newDate);
let gun = newDate[0];
let ay = newDate[1];
let yil = newDate[2];

console.log("gün", gun); // gün 27
console.log("ay", ay); // ay 09
console.log("yil", yil); // yil 2024

let months =
  "Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec";

let newMonth = months.split(" / ");
console.log(newMonth); // ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

/* -------------------------------------------------------------------------- */
/*                               //? Join metodu                              */
/* -------------------------------------------------------------------------- */
//* String metodu degildir.
//* Javascript dilinde join metodu, bir dizi elemani string olarak birlsetirir. Join metodu dizi (array) olarak bunu virgül gibi bir karakter ile ayirarak string'e dönüstürür.

console.log(newMonth.join("-")); // Jan-Feb-Mar-Apr-May-Jun-Jul-Aug-Sep-Oct-Nov-Dec

/* -------------------------------------------------------------------------- */
//?                               Reverse Metodu                              */
/* -------------------------------------------------------------------------- */

//* String metodu degildir.
//* Reverse metodu ile bir diziyi tersine cevirebilmekteyiz. Dizi icerisindeki ilk degeri son, son degeri ise ilk siraya seklinde siralayabilmekteyiz.

//! Bir kelimeyi tersten yazdiran program:

let kelime1 = "Merhaba";

console.log(kelime1.split("").reverse().join("")); // abahreM

//! Polindrom:
let kelime2 = "madam";

let mesaj =
  kelime2 === kelime2.split("").reverse().join("")
    ? "Polindromdur"
    : "Polindrom degildir";

console.log(mesaj); // Polindromdur

// *=========================================================
// *               Slice
// *=========================================================

//! Slice Metodu
//? String icinde bir bölümü almak icin kullanilir.
//* Slice (baslangic index numarasi, bitis index numarasi(bu numara dahil degildir))

let sentence = "Merhaba Cohort DE-10";
console.log(sentence.slice(8, 14)); // Cohort
console.log(sentence.slice(8)); // Cohort DE-10

console.log(sentence.slice(-5)); // DE-10
console.log(sentence.slice(-12, -6)); // Cohort

// *=========================================================
// *               substring
// *=========================================================

//! substring(baslangic index numarasi, bitis indey numarasi)
//* Slice'dan farki negatif sayi kullanilmaz.

console.log(sentence.substring(8, 14)); // Cohort

// *=========================================================
// *               substr
// *=========================================================

//! substr(baslangic index numarasi, kac adet karakter alinacagi)

console.log(sentence.substr(15, 2)); // DE

/* -------------------------------------------------------------------------- */
/*                      //!String içinde arama işlemleri                      */
/* -------------------------------------------------------------------------- */
//* includes, indexOf, search ,match  metodlarını kullanabiliriz.

// *=========================================================
// *               includes
// *=========================================================
//? includes()   ... yı içeriyor mu -> true yada false bir değer döndürür.
//? caseSensitive bir özelliktir.

let cumle = "to be or not To be, Thats is the question";
console.log(cumle.toUpperCase().includes("TO BE")); // true

//! Bir site adresi güvenli mi degil mi?
//! https: s means secure

let url = "https://clarusway.com/";

let msg = url.includes("https")
  ? "Bu site güvenlidir"
  : "bu site güvenli degildir";
console.log(msg); // Bu site güvenlidir

// *=========================================================
// *               indexOf
// *=========================================================

//? indexOf (aranacak metin, konum) Bir karakter yada karakter grubunun kaçıncı sırada olduğunu yani index numarasını verir. Eğer o karakter yoksa olmadığını -1 değeri vererek gösterir. Büyük küçük harfe duyarlıdır. Sadece ilk gördüğünün index numarasını verir.

console.log(cumle.indexOf("be")); // 3
console.log(cumle.indexOf("The")); // -1
//* parantez icinde yazilan/aratilan karakter yoksa -1 döndürür
console.log(cumle.lastIndexOf("be")); // 16

// *=========================================================
// *               search
// *=========================================================

//? search() bir string icindeki aranan elemanin ilk index numarasini yazar. Bulamzsa -1 döndürür.
//* Büyük kücük harfe duyarlidir.
console.log(cumle.search("be")); // 3

//!REGEX - regular expression

// Regex regular expression denir. Bunların yazım stili / işaretiyledir.

// Flags Kullanımı
// Düzenli ifadelerde çeşitli bayraklar kullanarak aramayı değiştirebiliriz:

// g : Global arama
// i : Büyük/küçük harf duyarsız arama

let variable = "Kücük";

console.log(variable.search(/U/)); // -1

// [A-Z] , [a-z] , [0-9]
let cumle2 = "to be or not To be, Thats is The question";
console.log(variable.search(/[A-Z]/)); // 0
console.log(variable.search(/[a-z]/)); // 2
console.log(cumle2.search(/[A-Z]/)); // 13
console.log(cumle2.search(/[a-z]/)); // 0
console.log(cumle2.search(/[0-9]/)); // -1
console.log(cumle2.search(/[.]/)); // -1

// ^ olmayan

console.log(variable.search(/[^A-Z]/)); // 1

// *=========================================================
// *               match
// *=========================================================

//? match metodu, bir dizi icindeki bir düzenli ifadeye (Regex) uyari kisimlari bulur ve bir dizi olarak döner.
//* Bir dizi döndürür.

let phone = "My phone is 123-456-7890";

let result = phone.match(/\d/);
console.log(result);

let text3 = "Contact us at supoort@example.com or sales@example.com";
let emailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
let emails = text3.match(emailPattern);
console.log(emails);

// *=========================================================
// *               startsWith(), endsWith() -- case sensitive
// *=========================================================
//* startsWith :.. ile başlıyormu (True , false)
//* endsWith :.. ile başlıyormu (True , false)

console.log(phone.startsWith("My")); //true
console.log(phone.endsWith("890")); //true

//! String'de Degisiklik Yapma

// *=========================================================
// *               Replace -immutable
// *=========================================================

let text5 = "Hello World, How are you? World";
let newText = text5.replace("World", "JavaScript");
console.log(newText); //Hello JavaScript, How are you? World
console.log(text5.replaceAll("World", "JavaScript")); //Hello JavaScript, How are you? JavaScript

// *=========================================================
// *               Trim
// *=========================================================

//? bas ve sondaki bosluklari kaldirmak icin => trim

let metin2 = " Clarusway";
console.log(metin2);
let metin3 = metin2.trim();
console.log(metin3);
