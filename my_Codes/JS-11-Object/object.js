/* -------------------------------------------------------------------------- */
//!                                  OBJECTS                                  */
/* -------------------------------------------------------------------------- */

//* Dizilerde index numaralari ile erisim saglaniyor.0'dan baslayarak artan bir siralama.

//! Diziler sirali bellekler bölgeleridir ve sirali bir sekilde ulasilabilir. Ama daha karmasik veriler icin Object (nesne) kullanilir.

const dizi = [1, 2, 3, 4, 5, 6];
console.log(dizi[0]); //1

//! Objectlerde key-value (Property-value) degerlerini icerir. Bu o nesnenin özelliklerini belirtir.

//! Herhangi bir veriye erisim icin property (key) adi kullanilir.

/* -------------------------------------------------------------------------- */
//*                       // Object Oluşturma Yöntemleri                      */
/* -------------------------------------------------------------------------- */

//? 1.Object() class'indan tpretme:

const car = new Object(); //Bos bir obje ürettik
console.log(car);
car.brand = "BMW";
car.model = 2000;
car.isCrashed = true;

console.log(car);

const car1 = new Object();
car1.brand = "Volvo";
car1.model = 2005;
car1.isCrashed = false;

console.log(car1);

/* --------------------------------------------------*/

//? 2.Constructor metodu ile object olusturma: