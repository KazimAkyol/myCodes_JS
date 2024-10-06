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

//! 2) Belirli bir string ifadenin tersini bulan fonksiyonu yazınız:

const string = "hello world";

function reversString(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(reversString(string)); // dlrow olleh

//! 3) Belirli bir string ifadenin palindrome olup olmadığını bulan fonksiyonu yazınız:

const string1 = "selles";

function isPalindrome(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr === str;
}
console.log(isPalindrome(string1)); //true

//! 4) Belirli bir sayinin tam bölenlerinin toplamini bulan fonksiyonu yaziniz:

function sumDivisors(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumDivisors(12)); //28

//! 5) Yarıçapı verilen bir dairenin alan ve çevresini bulan program:

function circleVlues(rad) {
  return `Perimeters: ${2 * Math.PI * rad}, Area: ${Math.PI * rad * rad}`;
}

console.log(circleVlues(10)); //"Perimeters: 62.83, Area: 314.15"
console.log(circleVlues(15)); //"Perimeters: 94.24, Area: 706.85"
console.log(circleVlues(25)); //"Perimeters: 157.07 Area: 1963.49"

//! 6) Belirli vir sayinin asal olup olmadigini bulan fonksiyonu yaziniz:

const isPrime = (num) => {
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

console.log(isPrime(71));

//! 7) ilk 2 parametreyi carpip 3.parametre üssüne alan fonsiyonu yaziniz:

const transmogrifier = (val1, val2, val3) => {
  let result = Math.pow(val1 * val2, val3);
  console.log(result); //true
};

transmogrifier(3, 4, 2); //144

//! 8) Bir sayiyi tersine cevirecek bir fonksiyon yaziniz:
//546
//! 1.Yöntem:
// function reverseNumber(num) {
//   var reverse = 0;
//   while (num != 0) {
//     reverse = reverse * 10;
//     reverse = reverse + (num % 10);
//     num = Math.trunc(num / 10); //virgülden sonraki kismi atmak icin
//   }
//   return reverse;
// }

// console.log(reverseNumber(546)); //645

//! 2.Yöntem:

// let numara = 5441681;
// console.log(numara);
// console.log(numara(toString()));

const ters = (sayi) => {
  let cevir = sayi.toString();
  let ekle = "";
  for (let i = cevir.length - 1; i >= 0; i--) {
    ekle += cevir[i];
  }
  return parseInt(ekle);
};

console.log(ters(654)); //456
console.log(ters(2024)); //4202

//! 9) 100-1000'e kadar olan sayilarin polindrom olanlarini belirten/yazan program:

function reverseNumber(number) {
  var reverse = 0;
  var num = number;
  while (num != 0) {
    reverse = reverse * 10;
    reverse = reverse + (num % 10);
    num = Math.trunc(num / 10); //virgülden sonraki kismi atmak icin
  }
  return reversString === number ? `${number} polindromdur` : null;
}

for (let i = 100; i < 1000; i++) {
  let x = reverseNumber(i);
  x === null ? null : console.log(x);
}

//! 10) Girilen bir sayinin pozitif bölenlerini bulan bir fonksiyon yaziniz:

function findPositiveDivisors(num) {
  let result = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) result.push(i);
    console.log("result", result);
  }
  return result;
}

console.log(findPositiveDivisors(12)); // output: [1, 2, 3, 4, 6, 12]

function findFactors(num) {
  const factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

console.log(findFactors(12));

//! 11) Aşağıdaki isterleri sağlayan bir fal programı yazıniz:

//? tellFortune adlı bir işlev yazın:
//? 4 farklı parametre : jobTitle, geoLocation, partner, numKids.
//? falınızı ekrana şu şekilde verir: "Gelecekteki mesleğiniz *****'dir. ****'da yaşayacaksınız. **** ile evlenecek ve *** çocuk sahibi olacaksınız"

function tellFortune(jobTitle, geoLocation, partner, numKids) {
  let future =
    "You will be a " +
    jobTitle +
    " in " +
    geoLocation +
    " and married to " +
    partner +
    " " +
    " with " +
    numKids +
    " kids.";
  console.log(future);
}
