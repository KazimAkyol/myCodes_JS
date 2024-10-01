//* ======================================================
//*                   FOREACH METHOD
//* ======================================================

//! NOT: forEach metodu void bir metottur. (Yani herhangi bir değer döndürmez.log(forEach..)=undefined) terminal işlemdir, diziyi fonksiyon içinde yazdırır, tüketir, bitirir ve siz extra bişey istemedikçe diziyi değiştirmez.

//* Örnek:
const prices1 = [100, 250, 50, 90];

prices1.forEach((osman) => console.log(osman)); //console'da sirasiyla alt alta yazdirir.

console.log(prices1); //orijinal diziyi degistirmez.

let toplam = 0;

const terminal = prices1.forEach((a) => console.log((toplam += a))); // her bir elemani bir sonrakiyle topladi ve o indis'e yazdirdi.

console.log(terminal);

//* Örnek:
//* p => prices dizisinin her bir elemanı
//* i => indis
//* prices=> prices dizisidir. Farklı isim kullanılabilir:
//* Herbir elemanı 2 katıyla çarp ve bütün dizi elemanlarını topla:

const prices2 = [100, 250, 50, 90];

let toplam1 = 0;

prices2.forEach((p, i, prices) => {
  //? diziyi kalici olarak degistirdik
  prices[i] = p * 2;

  //? dizinin elemanlarini toplayip yazdirdi
  console.log((toplam1 += p));
});

console.log(prices2); //[200, 500, 100, 180]

//* Örnek: Meyveler dizisindeki elemanların, harf sayısı 3'ten büyük olan meyveleri büyük harfe çevir:

const meyveler = ["elma", "erik", "muz", "karpuz"];

meyveler.forEach((meyve) => {
  if (meyve.length > 3) {
    console.log(meyve.toUpperCase());
  } else {
    console.log(meyve);
  }
});

//* ======================================================
//*                       MAP METHOD
//* ======================================================

//! map yapılan değişikliği bir diziye atıp, bunu döndürebilir, forEach gibi tüketmez.

//* Örnek: names dizisinin içindeki her ismi büyük harf olarak yeni bir diziye saklayalım:

let names = [
  "ayca",
  "kemal",
  "mustafa",
  "ayse",
  "fatih",
  "halil",
  "umut",
  "gökçe",
  "mehmet",
];

const yeni = names.map((isim) => isim.toUpperCase());

console.log(names); //map, biz istemedikce diziyi kalici degistirmez.

console.log(yeni); //Eger map'i bir degiskene atarsak verileri kalici tutmus oluruz (ister mevcut diziyi degistiririz, ister yeni bir diziye atariz.Burada yeni diziye atadik.)

//* her elemanin ilk harfini kalici büyüt:

//* Ödev-1: fiyatlar dizisinde her bir fiyata %10 zam yapalim. NOT: forEach kullanilmali ve orijinal dizi degistirilmeli:

const fiyatlar = [100, 250, 50, 89];

fiyatlar.forEach((fiyat, raise) => {
  fiyatlar[raise] = fiyat * 1.1;
});

console.log(fiyatlar);

//* Ödev-2: fiyatlar dizisindeki fiyati 90'dan büyük olan degerleri console'a tek tek bastiriniz:

const prices11 = [100, 250, 50, 89];

prices11.forEach((price) => {
  if (price > 90) {
    console.log(price);
  }
});

//* Ödev-3: fiyatlar dizisindeki fiyati 110'dan kücük olan degerlere %10 artis yapin ve bu degerleri console'a tek tek bastiriniz:

const prices12 = [100, 250, 50, 89];

prices12.forEach((price) => {
  if (price < 110) {
    const newPrice = price * 1.1;
    console.log(newPrice);
  }
});

//* Ödev-4: maaslar dizisinde 4000'den düsük olan maaslara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz:

const maaslar = [3000, 5000, 4000, 6000, 6500];

const zamliMaaslar = maaslar
  .filter((maas) => maas < 4000)
  .map((maas) => maas * 1.5);
console.log(zamliMaaslar); // [4500]

//* Ödev-5: Maasi 4000'den büyük olanlara %25 zam yaparak sonuclari console'da yazdiralim:

const maaslar1 = [3000, 5000, 4000, 6000, 6500];

maaslar1.forEach((maas, raise) => {
  if (maas > 4000) {
    maaslar1[raise] = maas * 1.25;
  }
});

console.log(maaslar1);
