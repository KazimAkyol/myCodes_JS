//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//*                       ITERATION IN ARRAYS
//* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//* ======================================================
//*                     FOR LOOP
//* ======================================================

//* Örnek: dizi1 array'indeki pozitif sayilarla negatif sayilari 2 ayri array'de toplayan function yaziniz:

const dizi1 = [-5, 15, -78, -45, 34, 27, 4, -9, 7];

const negatifler = [];
const pozitifler = [];

for (let i = 0; i < dizi1.length; i++) {
  if (dizi1[i] < 0) {
    negatifler.push(dizi1[i]);
  } else {
    pozitifler.push(dizi1[i]);
  }
}

console.log(negatifler); //[-5, -78, -45, -9]
console.log(pozitifler); //[15, 34, 27, 4, 7]

//* FOR IN ile ayni soruyu cözelim:

const dizi = [-5, 15, -78, -45, 34, 27, 4, -9, 7];

const negatifler1 = [];

const pozitifler1 = [];

for (let i in dizi) {
  if (dizi[i] < 0) {
    negatifler1.push(dizi[i]);
  } else {
    pozitifler1.push(dizi[i]);
  }
}

console.log(negatifler1); //[-5, -78, -45, -9]
console.log(pozitifler1); //[15, 34, 27, 4, 7]

//* FOR OF ile aynı soruyu çözelim:

const dizi2 = [-5, 15, -78, -45, 34, 27, 4, -9, 7];

const negatifler2 = [];

const pozitifler2 = [];

for (let eleman of dizi2) {
  if (eleman < 0) {
    negatifler2.push(eleman);
  } else {
    pozitifler2.push(eleman);
  }
}

console.log(negatifler2); //[-5, -78, -45, -9]
console.log(pozitifler2); //[15, 34, 27, 4, 7]

//* ======================================================
//*                   FOR IN LOOP
//* ======================================================
