// ? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* Kendi kendine cagiran fonksiyona rcursive fonksiyon denilir.
//* Özellikle karmasik hesaplamalarin kodlamasini kolaylastirmak icin kullanilir.
//* Ancak dikkatli kullanmak gerekir. Yoksa stack overflow hatasi alinabilir.

//* Örnek-1: Sayma sayilarinin ilk 7 teriminin toplamini bulunuz:

const add = (n) => {
  let toplam = 0;

  for (let i = 1; i < n; i++) {
    toplam += i;
  }

  return toplam;
};

console.log(add(7)); //1+2+3+4+5+6=21

//* ayni örnegi recursive ile cözelim:

const toplamlar = (n) => {
  if (n < 1) {
    return n;
  } else {
    return toplamlar(n - 1) + n;
  }
};

console.log(toplamlar(1)); //1
console.log(toplamlar(2)); //top(1)+2
console.log(toplamlar(3)); //top(2)+3
console.log(toplamlar(4)); //top(3)+4
console.log(toplamlar(5)); //top(4)+5
console.log(toplamlar(6)); //top(5)+6
console.log(toplamlar(7)); //top(6)+7
