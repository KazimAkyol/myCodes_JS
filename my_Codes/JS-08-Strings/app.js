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
