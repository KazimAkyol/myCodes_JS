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