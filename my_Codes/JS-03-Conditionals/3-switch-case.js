//! ****************** SWITCH - CASE ***********
//! ---------------------------------------------

// Switch-case bloğu if-else gibi kullanılacak, if-else yöntemine alternatif bir yöntemdir.
// Burda bir şart durumunun karşılasacağı birden fazla ihtimale göre ortaya çıkabilme ihtimali olan her duruma karşılık bir yapı verilir .
// Switch de önemli olan şey; bir şartla karşılaştığı zaman onu uygular ve devam eder işte o noktada çıkmasını istiyoruz ve kod blogunu kırıp çıkmazsak (with break) sadece sonuncu değeri yazar.

// birden fazla satirlik kod olacaksa {} acilmalidir
let urun = prompt("Bir ürün giriniz");
let fiyat;
let urunAdedi = 10;
let tutar;

switch (urun) {
  case "kalem": {
    fiyat = "kalem 5$";
    tutar = urunAdedi * 5;
    break;
  }
  case "defter": {
    fiyat = "defter 10$";
    tutar = urunAdedi * 10;
    break;
  }
  default: {
    console.log("gecerli bir ürün giriniz");
    break;
  }
}

console.log(fiyat);
console.log(tutar);
