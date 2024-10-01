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

names = names.map((a) => a.slice(0, 1).toUpperCase() + a.slice(1));

console.log(names);

//* Örnek:
//* fiyatlar dizisindeki ürün fiyatlarinın 250 TL altında olanlarına
//* %50 zam, diğerlerine de %20 zam yapılmak isteniyor. Ayrıca
//* zamli fiyatlar kalıcı olarak diziye işlenmek isteniyor fiyatlar[1]=eski fiyat*1.5 gibi
//* 1. ürünün zamlı fiyati 150 TL gibi
//* p => prices dizisinin her bir elemanı
//* i => indis
//* array=> fiyatlar dizisidir.

const fiyatlar = [100, 300, 50, 90];

fiyatlar.map((p, i, array) => {
  if (p < 250) {
    array[i] = p * 1.5;
  } else {
    array[i] = p * 1.2;
  }
});

console.log(fiyatlar); //[150, 360, 75, 135]

//* Örnek: tlPrices dizisindeki rakamlarin Euro ve dolar karsiliklarini hesaplatarak yeni dizilere kaydediniz:
//? toFixed(sayı) komutu virgüllü sayılarda kullanılır, aldığı sayı parametresi kadar virgülden sonra eleman bırakır.

//! toFixed()= kullandığınız sayıları string'e çevirir, tekrar number yapmak istersek, önlerine Number yazarız (ya da + koyarız):

const tlPrices = [100, 150, 200, 80, 50];
const dolar = 34.2;
const euro = 38.0;

const dolarPrices = tlPrices.map((a) => +(a / dolar).toFixed(2));

console.log(dolarPrices);

const euroPrices = tlPrices.map((a) => (a / euro).toFixed(2));

console.log(euroPrices);

console.log(tlPrices);
