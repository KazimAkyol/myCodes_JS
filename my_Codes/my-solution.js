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
    // Eger price'lar 90'dan büyükse
    console.log(price);
  }
});

//* Ödev-3: fiyatlar dizisindeki fiyati 110'dan kücük olan degerlere %10 artis yapin ve bu degerleri console'a tek tek bastiriniz:

const prices12 = [100, 250, 50, 89];

prices12.forEach((price) => {
  if (price < 110) {
    // Eger price'lar 110'dan kücükse
    const newPrice = price * 1.1; // Yeni bir const tanimlayip, bu price'lara %10 artis yapiyoruz
    console.log(newPrice);
  }
});

//* Ödev-4: maaslar dizisinde 4000'den düsük olan maaslara %50 zam yapmak istiyoruz ve bunu ayri dizi olarak saklamak istiyoruz:

const maaslar = [3000, 5000, 4000, 6000, 6500];

const zamliMaaslar = maaslar
  .filter((maas) => maas < 4000) //4000'den kücük olan maaslari filtreliyoruz
  .map((maas) => maas * 1.5); //Bu maaslara %50 zam yapiyoruz
console.log(zamliMaaslar);

//* Ödev-5: Maasi 4000'den büyük olanlara %25 zam yaparak sonuclari console'da yazdiralim:

const maaslar1 = [3000, 5000, 4000, 6000, 6500];

maaslar1.forEach((maas, raise) => {
  if (maas > 4000) {
    maaslar1[raise] = maas * 1.25;
  }
});

console.log(maaslar1); //[3000, 6250, 4000, 7500, 8125]
