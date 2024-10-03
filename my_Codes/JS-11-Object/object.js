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

//* Sanki bir kalip olusturmus olduk
function PersonelList(id, ad, maas) {
    this.id = id;
    this.ad  = ad;
    this.maas = maas;
}

const personal1 = new PersonelList(1001, "Ali", 10000);
console.log(personal1);

const personal2 = new PersonelList(1002, "Veli", 20000);
console.log(personal2);

//* Her nesne icin ayri bir kopya olusturulan metotlar, bellek kullanimini arttirabilir.

//! ÖNEMLI !!!
//? OBJECT LITERAL - En cok kullanacagimiz yöntem:

let personalYapisi = {}; //Bos bir obje olusturmak

console.log(typeof personalYapisi);

//* Objectler icinde farkli veri türlerini barindirabiliriz. String,Number,Boolean,Dizi,Function,Object

let personal = {
    name: "Hnery",
    lastName: "Nathan",
    dateOfBirth: 2001,
    isMarried: false,
    workExperience: ["tester", "developer", "team lead"],
    adress: {
        city: "London",
        street: "Baker Street",
        no: 221,
        postalCode: 3214511,
    },
    
}