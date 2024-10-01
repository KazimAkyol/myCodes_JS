//* ======================================================
//*                   FOREACH METHOD
//* ======================================================

//! NOT: forEach metodu void bir metottur. (Yani herhangi bir değer döndürmez.log(forEach..)=undefined) terminal işlemdir, diziyi fonksiyon içinde yazdırır, tüketir, bitirir ve siz extra bişey istemedikçe diziyi değiştirmez.

//* Örnek:
const prices1 = [100, 250, 50, 90];

prices1.forEach((osman) => console.log(osman)); //console'da sirasiyla alt alta yazdirir.

console.log(prices1); //orijinal diziyi degistirmez.

let toplam = 0;

const terminal = prices1.forEach((a) => console.log((toplam += a))); // her bir elemani bir sonrakiyle topladi ve o indis'e yazdirdi

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

prices12.map((p, i, array) => {
  if (p < 110) {
    array[i] = p * 1.1;
    console.log(prices12);
  }
});

console.log(prices12);

//* Ödev-4: maaslar dizisinde 4000'den düsük olan maaslara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz:

const maaslar = [3000, 5000, 4000, 6000, 6500];

maaslar.forEach((maas, raise) => {
  if (maas < 4000) {
    maaslar[raise] = maas * 1.5;
    console.log(maaslar);
  }
});
