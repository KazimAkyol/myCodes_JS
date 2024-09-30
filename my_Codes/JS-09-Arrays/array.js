// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

//* Dizi Tanimlama:

//! 1.yöntem (Array literal) tercih edilen yöntem:

const yaslar = [30, 56, 45, 98, 23];

console.log(yaslar);

//yaslar = [3, 5, 7]; // Assigment to constant variable.

//! 2.yöntem (Array constructor):

const cars = new Array("BMW", "TOFAS", "VOLVO");
console.log(cars);

//*************************** */

const birth = 1979;

const isimler = [
  "fatma",
  "kazim",
  "gökhan",
  2024 - birth,
  "muhterem",
  true,
  yaslar,
];

console.log(isimler);

console.log(isimler[2]); //gökhan
console.log(isimler[6]); //yaslar
console.log(isimler[6][2]); //45
console.log(--isimler[6][2]); //44(45-1)
console.log(isimler[6][2]); //44

isimler[6] = false;
console.log(isimler[6]); // false (43.satirda index 6'daki eleman false olarak degistirildigi icin console'da false olarak yazdirdi. Bu islem kalicidir.)

isimler[7] = "ipek";
console.log(isimler);

// ?=========================================================
// ?                DİZİYİ DEĞİŞTİREN METODLAR (MUTATOR)
// ?=========================================================

//* pop(): dizinin son elemanini siler, yazdirmaya kalkarsak sildigi elemani döndürür.

const meyveler = ["Elma", "Erik", "Armut", "Muz", "Kivi"];

meyveler.pop(); //Kivi silindi
console.log(meyveler);

console.log(meyveler.pop());
console.log(meyveler);

//* shift(): komutu dizinin ilk elemanini siler, yazdirmaya kalkarsak sildigi elemani döndürür.

console.log(meyveler.shift());
console.log(meyveler);

//* push(): dizinin sonuna eleman ekler.

meyveler.push("cilek", "Kavun", "karpuz"); // 3 elemani da diziye ekleyecek.
console.log(meyveler);

//* unshift(): dizinin basina eleman ekler.

meyveler.unshift("Ayva");
console.log(meyveler);

//* reverse(): dizinin tamamini ters cevirir(dizilerde calisir).

meyveler.reverse();

console.log(meyveler);

console.log(meyveler[3].split("").reverse()); //['t', 'u', 'm', 'r', 'A']

console.log(meyveler[3].split("").reverse().join(""));

//* splice():
//* 1.parametre dizinin eleman ekleyecegimiz index'ini belirtir.
//* 2.parametre=0 ise belirttigimiz index'teki elemani saga ittirir, artik orada yeni yazdigimiz olur.
//* 2.parametre=1 ise belirttigimiz index'teki elemani siler ve üstüne yazar.

console.log(meyveler);

meyveler.splice(2, 1, "Ananas"); //index'i 2 olan eleman silindir ve yerine Ananas yazdirdi.
console.log(meyveler);

meyveler.splice(2, 0, "seftali"); //index'i 2 olan eleman saga ittirdi ve yerine seftali yazdirdi.
console.log(meyveler);

console.log(meyveler.splice(3, 1)); //index'i 3 olan eleman silindi.
console.log(meyveler);

//* sort(), string ifadelerde alfabetik siralar(ASCII degerlerine göre)
//* sort metodu diziyi iterasyona ugratir ve parametre olarak aldigi arrow foknsiyonunu (a-b>0 önce b'yi yaz gibi) dizinin her bir elemanina uygular. Bu sayede kücük sayilar ile büyük sayilar yer degistirerek siralama islemini gerceklestirir.

meyveler.push("cilek");
console.log(meyveler.sort());

const number = [3, 5, 1, 35, 10, 22, 55, 77, 231];

console.log(number.sort());

console.log(number.sort((a, b) => a - b));
