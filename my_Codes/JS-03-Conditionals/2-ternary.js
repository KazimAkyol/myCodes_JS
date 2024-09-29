//!  ************  TERNARY OPERATOR ************ //
// Sarta bagli durumlar yazmak icin baska ve daha kisa bir yöntem de ternary operatör
// ECMASCRIPT 6 ile gelen bir özellik

//* Örnek-1: Askerlik örnegi if yapisi ile:

// let yas = 17;
// console.log(typeof h);

// if (yas > 18 && h === "saglikli") {
//   console.log("Askerlik yapabilir");
// } else {
//   console.log("Askerlik yapamaz");
// }

// //* Örnek -1: Askerlik örnegi Ternary ile:

// yas > 18 ? console.log("Askerlik yapabilir") : console.log("Askerlik yapamaz");

const age = 19;
const health = true;
const gender = "male";

if (age > 18 && health == true && gender == "male") {
  console.log("Askerlik yapabilir");
} else {
  console.log("Askerlik yapamaz");
}
