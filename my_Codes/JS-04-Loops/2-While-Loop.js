//!  ***** WHILE LOOP *******
//* For loop ile benzer şekilde sadece syntax farklılığı vardır.Birbirinin yerine kullanılabilir.
//* "while" döngüsü, belirli bir koşul doğru olduğu sürece kod bloğunu tekrarlayan bir döngüdür. "While" döngüsü, başlangıçta belirtilen koşul doğru olduğu sürece çalışır ve koşul yanlış olduğunda döngüyü sonlandırır.
//! NOT: Eğer koşul düzgün yapılandırılmamışsa, "while" döngüsü sonsuz bir döngü oluşturabilir ve bu durum sayfanızın veya uygulamanızın donmasına neden olabilir.

// while (Kosul) {
//     calistirilacak kodlar
// }

//* 1'den 10'a kadar olan sayilari yazdiran program:

// let i = 1;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

//* Kullanicidan 100 ile 200 arasinda bir sayi girildigi müddetce sayi istemeyi devam ettiren bir program:

let number = 100;

while (number >= 100 && number <= 200) {
  number = +prompt("Bir sayi giriniz");
}
