//? Dizi (Array) Metodlar
//* pop(): dizinin son elemanini siler
//* shift(): dizinin basindaki elemani siler
//* push(): dizinin sonuna eleman ekler
//* unshift(): dizinin basina eleman ekler
//* reverse(): diziyi tersine cevirir
//* splice(): (baslangic indexi, kacinci eleman secilecekse(silinecek), eklenecek eleman(item,item2,item3))
//* sort(): siralama yapar(stringlerde ASCII kodlarina göre siralama yapar)
//* sort(): ((a,b)=>a-b)
//* includes(deger) iceriyor mu? - (true-false döndürür)
//* indexOf(deger): degerin kacinci indexte oldugunu gösterir
//* join(" "): bir dizideki elemanlari birlestirerek string'e cevirir
//* slice(): diziden bir parcayi almamizi saglar
//* concat(): iki diziyi birlestirir
//* every(): dizi icindeki her eleman icin bir callback fonksiyon cagirir ve call fonksiyondaki sarti sagliyorsa true döndürür

const numbers0 = [45, 16, 22, 14, 78];
console.log(numbers0.every((num) => num > 13)); //true

//* some(): dizi icindeki her eleman icin bir callback fonksiyon cagirir ve call fonksiyondaki en az bir eleman sarti sagliyorsa true döndürür, yanlissa false döndürür

const numbers1 = [45, 16, 22, 14, 78];
console.log(numbers1.some((num) => num > 80)); //false

//* map(): bir dizi icin bir callback fonksiyon cagirir ve her eleman icin cikan sonuclari bir diziye yazdirir
//* forEach(): bir dizi icin bir callback fonksiyon cagirir. Geriye bir deger döndürmez
//* filter(): bir dizi icin bir callback fonksiyon cagirir ve verilen kosula göre bir deger döndürür
//* reduce(): dizideki elemanlari toplayarak tek bir degere döndürür

//! 1.Bir dizideki elemanlarin ortalamasini bulan fonksiyon:

const numbers = [34, 56, 56, 87, 90];

// 1.yol

let toplam = 0;
const ortalama = () => {
  for (let i = 0; i < numbers.length; i++) {
    toplam += numbers[i];
  }
  return toplam;
};

console.log(ortalama(numbers) / numbers.length); //64.6

// 2.yol

console.log(numbers.reduce((toplam, eleman) => toplam + eleman) / 5); //64.6

// 3.yol

const sum = numbers.reduce((a, b) => {
  console.log("a", a);
  console.log("b", b);
  return a + b;
}, 0); // ilk index'e 0 verilerek a=0 ile baslandi

const result = sum / numbers.length;

console.log(result); //64.6

//! 2.Girilen bir cümledeki kelime sayisini bulan fonsiyon:

let sentence = "Merhaba           Cohort DE-10TR";

// function kelimeSayisi(sentence) {
//   //Cümleyi bosluklara göre bölüp kelimeleri sayar
//   let kelimeler = sentence.trim().split(/\s+/);
//   return kelimeler.length;
// }

// console.log(kelimeSayisi(sentence)); //3

function countWords(newSentence) {
  //const sumOfnewCount = newSentence.split(" ").length;

  // Birden fazla bosluk iceriyorsa
  const sumLetter = newSentence.split(/\s+/).length;

  return sumLetter;

  //return sumOfnewCount;
}

console.log(countWords(sentence));

console.log(sentence.split(/\s+/));
