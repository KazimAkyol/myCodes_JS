//* ======================================================
//*                   GETELEMENTBYID()
//* ======================================================

//* example-1: buton style

const buton = document.getElementById("btn");

buton.style.width = "200px";
buton.style.height = "80px";
buton.style.fontSize = "80px";
buton.style.backgroundColor = "red";

//* example-2: paragraf style

const paragraf = document.getElementById("par1").style;

paragraf.background = "yellow";
paragraf.color = "red";
paragraf.margin = "100px";
paragraf.width = "300px";

//* ======================================================
//*                   GETELEMENTSBYTAGNAME()
//*======================================================
//! tag ismiyle çağırıyoruz,aynı tag'den çok olacağı için index'le hangisini seçtiğimizi belirtiyoruz (HTMLCollection - Array özellikleri gösterir)

const resim = document.getElementsByTagName("img");
console.log(resim); // HTML-Collection

resim[0].style.width = "300px";

resim[1].style.border = "2px solid red";

//* ======================================================
//*                   GETELEMENTSBYCLASSNAME()
//*======================================================
//! class ismiyle çağırıyoruz

const baslik = document.getElementsByClassName("HBIR");

console.log(baslik); // dom selector-merhaba

//* HTML-Collection (arrayimsi)'larda ARRAY'i degistirmeyen metodlari kullanabilirsiniz

// baslik[0].style.color = "red";
// baslik[0].style.textAlign = "center";

// baslik[1].style.color = "red";
// baslik[1].style.textAlign = "center";

for (let i = 0; i < 2; i++) {
  baslik[i].style.color = "red";
  baslik[i].style.textAlign = "center";
}

baslik[0].innerHTML =
  " H1 in ici <a href='https://clarusway.com/'> DOM COK GÜZEL</a>";

baslik[1].textContent = "HALLO";

//* sadece içerik değişecekse textContent tercih edilir, ama innerHTML de etiketi değiştirebildiği gibi, sadece içeriği de değiştirebilir

//* ======================================================
//*                  QUERYSELECTOR,QUERYSELECTORALL
//*======================================================

document.querySelector("title").textContent = "DOM MANIPULASYON 💖";

document.querySelector("#badi").style.backgroundImage =
  "linear-gradient(green,pink)"; // body'ye verilen id=badi'yi query.selector ile yakalayip style.backgroundImage ile arka plan rengini green'den pink'e bir gecis verdik.

document.querySelector(".HIKI").style.color = "pink"; // h1'e verilen class=HIKI'yi query.selector ile yakalayip style.color ile yazinin rengini pink yaptik.

document.querySelector("p").style.fontSize = "50px"; // p'yi query.selector ile yakalayip style.fontSize ile font büyüklügünü 50 px yaptik.

// querySelector ile cagirdiginiz (normalde birden fazla varsa) etiketin ilki gelir.
