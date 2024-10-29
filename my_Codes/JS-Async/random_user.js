fetch("https://randomuser.me/api")
  .then((res) => res.json())
  .then((data) => ekranaBastir(data.person));

//! ekrana bastirma

const ekranaBastir = (z) => {
  const personDiv = document.querySelector(".person");

  z.forEach((k) => {
    personDiv.innerHTML += `
        <div>
        <p>${k.seed}</p>
        <img width="250px" src=${k.medium} />
        </div>
        `;
  });
};
