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





//* Ödev1: fiyatlar dizisinde her bir fiyata %10 zam yapalim. NOT: forEach kullanilmali ve orijinal dizi degistirilmeli.
const fiyatlar = [100, 250, 50, 89]; 