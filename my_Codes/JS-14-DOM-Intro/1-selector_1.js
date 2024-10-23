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
paragraf.margin = "200px";
paragraf.width = "300px";

//* ======================================================
//*                   GETELEMENTSBYTAGNAME()
//*======================================================
//! tag ismiyle çağırıyoruz,aynı tag'den çok olacağı için index'le hangisini seçtiğimizi belirtiyoruz (HTMLCollection - Array özellikleri gösterir)

const resim = document.getElementsByTagName("img");
console.log(resim);
