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
