islem(4, 20);

function islem(par1, par2) {
  console.log(par1); //4
  console.log(par2); //20

  return par1 + par2;
}

console.log(islem(5, 10)); //15

let topla = function (p1, p2) {
  return p1 + p2;
};

console.log(topla(4, 6)); //10

const carp = (p1, p2) => {
  return p1 * p2;
};

console.log(carp(4, 5)); //20

let isim = "harvey watson";
console.log(isim.length); //undefined
console.log(isim[0]); //h
console.log(isim[1]); //a
console.log(isim[2]); //r
console.log(isim[isim.length - 1]); //undefined

//! 1) Celcius değerini Fahrenheit değerine dönüştüren bir fonksiyon yazınız: (Celsius × 9/5) + 32 = Fahrenheit

function calcFahrenheit(celcius) {
  let fahrenheit = (celcius * 9) / 5 + 32;
  console.log(fahrenheit);
}
calcFahrenheit(30); //86=(30*9)/5+32
