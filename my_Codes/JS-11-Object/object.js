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
  this.ad = ad;
  this.maas = maas;
}

const personal1 = new PersonelList(1001, "Ali", 10000);
console.log(personal1);

const personal2 = new PersonelList(1002, "Veli", 20000);
console.log(personal2);

//* Her nesne icin ayri bir kopya olusturulan metodlar, bellek kullanimini arttirabilir.

//! ÖNEMLI !!!
//? OBJECT LITERAL - En cok kullanacagimiz yöntem:

let personalYapisi = {}; //Bos bir obje olusturmak

console.log(typeof personalYapisi);

//* Objectler icinde farkli veri türlerini barindirabiliriz. String,Number,Boolean,Dizi,Function,Object

let personal = {
  name: "Henry",
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
  calculateAge: function () {
    return new Date().getFullYear() - this.dateOfBirth;
  },
  formattedName: function () {
    return `${this.name} ${this.lastName}'nin yasi ${this.calculateAge()}`;
  },
  //* Objectler icinde arrow function kullanarak this metoduyla object icindeki degerlere ulasilmaz.

  arrowFunction: () => {
    return this.workExperience; //window objesine karsilik gelir. HTML root anlamindadir.
  },
  classicFunction: function () {
    return this;
  },

  //* Arrow function üretilirken this keyword'ünden kurtulmak icin yapilmistir.
  //* Arrow function'da this window objesine karsilik gelir.
  //* window objesi icinde workExperience isimli bir özellik bulamadigindan undefined
};

console.log(personal);
console.log(personal.name);
console.log(personal.dateOfBirth);
console.log(personal.calculateAge());
console.log(personal.formattedName());
console.log(personal.arrowFunction());
console.log(personal.classicFunction());

const obj = {
  name: "Mehmet",
  age: 40,
  fullName: function () {
    //Klasik fonksiyon taniminda this objedeki elemanlardir.
    return this.age;
  },
  formattedName: () => {
    return this.age;
  },
};

console.log(obj.fullName());
console.log(obj.formattedName());

/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
//*                 Object içindeki özelliğe erişim yöntemleri                */
/* -------------------------------------------------------------------------- */

//? 1.DOT NOTATION - Nokta Gösterimi

console.log("Dot Notation ile erisim", personal.dateOfBirth);
console.log(personal);

//? 2.Köseli parantezler icinde özellik belirterek erisim
// Degisken kullanimina olanak saglar.

console.log("Özellik yöntemi ile erisim", personal["dateOfBirth"]);
// Object kullaniminda buna örnek verilecek.

/* -------------------------------------------------------------------------- */

//! NOT: Object icinde array varsa array metodlari da kullanilabilir.

console.log(personal.name);
console.log(personal.workExperience[1]); //developer
personal.workExperience.forEach((work) => console.log(work)); //tester,developer,team lead

//? 3.Destructuring yöntemi ile erisim

const { name, lastName, isMarried } = personal;

console.log(name);
console.log(lastName);
console.log(isMarried);
//console.log(workExperience); Destructure islemine tabi olmadigi icin hata verir.

/* --------------------------------------------------*/

//! Objeler icine kolaylikla yeni deger ekleyebiliriz: