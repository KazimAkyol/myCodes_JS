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

//! 3.Size bir  cümle verildi. "Clarusway" kelimesini bulmanız ve şuna benzer bir cümle döndürmeniz gerekir:
//? Clarusway'i bulamıyorsanız, "I can't find Clarusway :(" yazın.
//? findClarusway("I am finding Clarusway !") ➞ "I found Clarusway at 4!"

test: "I like Clarusway"; // Output : I found at Clarusway at 3!
test: "I like bootcamps "; // Output  I can't find Clarusway :(

function findClarusway(sentence) {
  if (sentence.includes("Clarusway")) {
    return `I found at Clarusway at ${
      sentence.split(" ").indexOf("Clarusway") + 1
    }`;
  } else {
    return "Ican't find Clarusway";
  }
}

let sentence1 = "I likes Clarusway";

console.log(findClarusway(sentence1));

console.log(sentence1.split(" ").indexOf("Clarusway"));

//! 4.Bir öğe dizisini alan, tüm yinelenen öğeleri kaldıran ve eski diziyle aynı sırada yeni bir dizi döndüren bir fonksiyon oluşturan program:

// removeDuplicated([1,0,1,0,1]) // Output [1,0]
// removeDuplicated(["the","small","cat","the","cat"]) // ouput["the","small","cat"]

function removeDuplicated(arr) {
  const duplicatedArray = [];
  for (const i of arr) {
    if (!duplicatedArray.includes(i)) {
      duplicatedArray.push(i);
    }
  }
  return duplicatedArray;
}

console.log(removeDuplicated([1, 0, 1, 0, 1])); // [1, 0]
console.log(removeDuplicated(["the", "small", "cat", "the", "cat"])); // ['the', 'small', 'cat']

//! 5.Bir dizide ilk harfi A ile baslayan yeni bir diziye alan fonksiyon:
const words = ["Apple", "Banana", "Orange", "Avocado", "Grape", "Apricot"];

function filterWords(arr) {
  const newArr = arr.filter((word) => word[0] === "A");
  return newArr;
}

console.log(filterWords(words)); // ['Apple', 'Avocado', 'Apricot']

//! 6.Bir dizide verilen  maaşlara %10 zam yapılacak ama hala 20000 altında kalanlara ek ödeme planlanacak:
//* a.Kaç kişi zam olsa bile 20000 altında kalıyor?
let salaries = [18000, 13000, 17000, 24000, 18500, 21000, 19300];

let belowUnder20K = salaries.filter((salary) => salary * 1.1 < 20000);
console.log(belowUnder20K); // [18000, 13000, 17000]

//* b.Maasi zamli halde 20000'in altinda kalanlara patronumuz belki ir güzellik yapar. 20000' altinda kalanlari 20000'e tamamlayabilir ama ne kadar bütce ayirmali?

let addBudget = salaries.map((salary) => {
  let increased = salary * 1.1;
  return increased < 20000 ? 20000 - increased : 0;
});

console.log(addBudget);

let totalPayment = addBudget.reduce((sum, payment) => sum + payment, 0);

console.log(totalPayment);
