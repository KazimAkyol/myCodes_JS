//*=================================================================
//*              1- Senkron-Asenkron Programlama
//* ================================================================

//! Javascript, bir single-threaded ve Asenkron Programlama dilidir.

//? Asenkron Programlama
//? Asenkron Programlama, bir alt görevin uygulamanin asil thread'inden bagimsiz olarak arka planda calistirilmasina izin veren paralel programlama teknigidir. Bu alt görev tamamlandiginda (basariyla veya basarisizlikla) asil thread bu konuda bilgilendirilir. Asenkron programlama, uygulamalarin performansininin arttirilmasina ve daha iyi kullanici deneyimine katki saglamaktadir.

//? Özellikle bir API'den veya Veritabanindan veri cekme, Giris/Cikis islemleri, Dosya Okuma/Yazma islemleri gibi zaman tüketen kodlarda Async Programlama kullanilmasi cok önemlidir.

//* Asenkron (setTimeout) 1 seferlik

setTimeout(() => {
  console.log("günaydin nasilsiniz");
}, 2000); // 2000 milisaniye yani 2 saniye demek. Sayfayi yeniledikten 2 saniye sonra console'a yazdiracak.

console.log("selamun hello");

setTimeout(() => {
  console.log("aleyküm selam");
}, 4000); // 4000 milisaniye yani 4 saniye demek. Sayfayi yeniledikten 4 saniye sonra console'a yazdiracak.

//! yukarıdaki kodlar şu sırayla çalışır selamun hello - günaydın nasılsınız - aleyküm selam

//*Asenkron(setInterval, clearInterval) belli aralıklarla durdurulana kadar devam eder. mesela 1 dakikada bir döviz kurunu güncellemek için kullanılabilir.

//?setInterval non-blocking (kod burada takılı kalmaz alttaki kodlarda çalışır)

let sayac = 0;
setInterval(() => {
  console.log(++sayac);
}, 1000);
