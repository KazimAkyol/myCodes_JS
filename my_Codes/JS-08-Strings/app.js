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
