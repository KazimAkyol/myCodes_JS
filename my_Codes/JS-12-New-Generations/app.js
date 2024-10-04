//* =============================================
//*  DESTRUCTURING (OBJECT)
//* =============================================

const product = {
  id: "123456",
  brand: "Apple",
  type: "Smart Phone",
  price: 30000,
};

const product1 = {
  id: "987654",
  brand: "Samsung",
  type: "Tablet",
  price: 5000,
};

//? .notasyonu ile erisim müümkün

console.log(product.type); //Smart Phone
console.log(product.price); //30000
let proPrice = product.price;
console.log(proPrice); //30000
proPrice += 1000;
console.log(proPrice); //31000
console.log(product.price); //30000

//? square bracket []

console.log("brand", product["brand"]); // brand Apple

//? destructuring yöntemi

let { id, brand, type, price } = product;

console.log(id, brand, type); //123456 Apple Smart Phone
console.log(price); //30000
price += 5000;
console.log(price); //35000
console.log(product.price); //30000

//? Key'ler isim degisiklikleriyle yapilir
const {
  id: pro1Id,
  brand: pro1Brand,
  type: pro1Type,
  price: pro1Price,
} = product1;

console.log(pro1Brand, pro1Id, pro1Type, pro1Price); //Samsung 987654 Tablet 5000

//? Nested Destructuring
const insanlar = {
  kisi1: {
    kimlikNo: "1234567890",
    adi: "Ahmet",
    soyadi: "Can",
    meslek: "Mimar",
    maas: 30000,
  },
  kisi2: {
    kimlikNo: "44234567890",
    adi: "Canan",
    soyadi: "Can",
    meslek: "Sosyal Gelisim Uzmani",
    maas: 25000,
  },
};

console.log(insanlar.kisi2.meslek); //Sosyal Gelisim Uzmani
console.log(insanlar["kisi2"]["meslek"]); //Sosyal Gelisim Uzmani

//? Level-1 Destructuring
// const { kisi1, kisi2 } = insanlar;

// console.log(kisi1);
// console.log(kisi1.adi);

//? Level-2 Destructuring

// const { kimlikNo, adi, soyadi, meslek, maas } = kisi1;
// console.log(kimlikNo, adi, soyadi, meslek, maas);

//? 2 Seviyeli Destructuring
const {
  kisi1: { adi, soyadi },
  kisi2: { adi: kisi2Ad, soyadi: kisi2Soyad },
} = insanlar;

console.log(adi); //Ahmet
console.log(kisi2Ad); //Canan

//* Örnek:
const team = [
  {
    name: "Josh",
    surname: "Barry",
    job: "developer",
    age: 30,
  },
  {
    name: "John",
    surname: "Barry",
    job: "tester",
    age: 45,
  },
  {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  },
];

team.forEach((person) => {
  console.log("Name:", person.name);
  console.log("Surname:", person.surname);
  console.log("Job:", person.job);
  console.log("Age:", person.age);
  console.log("*****************");
});

team.forEach((person) => {
  const { name, surname, job, age } = person;
  console.log("Name2:", person.name);
  console.log("Surname2:", person.surname);
  console.log("Job2:", person.job);
  console.log("Age2:", person.age);
  console.log("*****************");
});

team.forEach((person) => {
  console.log("Name3:", person.name);
  console.log("Surname3:", person.surname);
  console.log("Job3:", person.job);
  console.log("Age3:", person.age);
  console.log("*****************");
});

//!--- Fonksiyonlarda Destructuring Kullanimi ---

const objGoster = function () {
  return {
    name: "Hazel",
    surname: "Nut",
    job: "team lead",
    age: 40,
  };
};

console.log(objGoster());

let { name, surname, job, age } = objGoster();
console.log("Age:", age); //Age: 40
console.log("Job:", job); //Job: team lead

//? Fonksiyon Parametresi

const data = {
  id: "123",
  desc: "This is top secret information",
  createdTime: "1980",
};

const printData = (p) => {
  console.log(`${p.id} - ${p.desc} - ${p.createdTime}`);
};

const printDataDestr = (p) => {
  const { id, desc, createdTime } = p;
  console.log(`${id} - ${desc} - ${createdTime}`);
};

const printDataAir = ({ id, desc, createdTime }) => {
  console.log(`{id} - ${desc} -${createdTime}`);
};

printData(data);
printDataDestr(data);
printDataAir(data);

//* ==============================================
//*  REST (...)
//* =============================================

//? Rest operatoru kullanici tarafindan girilen degerleri dizi icerisine konumlandirir. Cesitli kullanim alanlari vardir.

//! 1-Bir diziyi veya object'teki bazi degerlerden geri kalanlarini ayri dizi ya da objelere kopyalanmasini saglayabilir.

//? ARRAY

const araclar = ["Kamyon", "Tir", "Kamyonet", "Motosiklet", "Minibüs", "Taksi"];
const [x, y, z, , ...kalanArac] = araclar;
console.log(x);
console.log(y);
console.log(z);
console.log(kalanArac);

//? OBJECT

const person = {
  ad: "Hazel",
  soyad: "Nut",
  is: "Team Lead",
  yas: 40,
};

const { ad, yas, ...geriKalan } = person;
console.log(yas); //40
console.log(geriKalan); //{soyad: 'Nut', is: 'Team Lead'}

//! 2-Bir fonksiyonun argumanlarini diziye cevirmek icin kullanilir.

const topla = (a, b, ...kalan) => a + b;
console.log(topla(1, 5, 7, 9, 3));

const toplam = (...sayilar) => {
  return sayilar.reduce((a, b) => a + b);
};

console.log("Toplam:", toplam(1, 3, 5, 7, 9));
//! REST (...) ile non-iterable olan sayilari iterable hale (diziye) cevirmis olduk.

//* =============================================
//*  SPREAD (...)
//* =============================================

//? Spread operatoru ise iterables olan  bir elemani bireysel degerler haline getirir.

const havaAraclari = ["ucak", "helikopter", "drone", "fuze"];
const karaAraclari = ["araba", "bisiklet", "scooter"];

const tasitlar = [havaAraclari, karaAraclari];
console.log(tasitlar);

const flatTasitlar = [...havaAraclari, ...karaAraclari];
console.log(flatTasitlar);

//* Örnek:

const cumle = "Uzun ince bir yoldayim";
const cumleDizisi = [...cumle];
console.log(cumleDizisi);

//* Örnek:

const numbers = [2, 5, 8, 3, 4];
console.log(Math.max(...numbers));

//? nested
const sahislar = {
  sahis1: {
    name: "Can",
    surname: "Canan",
    dob: "1990",
    job: "developer",
    salary: "140000",
    drivingLicense: true,
  },
  sahis2: {
    name: "Jhon",
    surname: "Sweet",
    dob: "1990",
    job: "tester",
    salary: "110000",
    drivingLicense: false,
  },
  sahis3: {
    name: "Steve",
    surname: "Job",
    dob: "2000",
    job: "developer",
    salary: "90000",
    drivingLicense: true,
  },
};
