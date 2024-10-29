fetch("https://randomuser.me/api")
  .then((res) => res.json())
  .then((data) => ekranaBastir(data.results[0]));

// //! ekrana bastirma
const ekranaBastir = (z) => {
  const personDiv = document.querySelector(".person");
  console.log(z);

  personDiv.innerHTML += `         
    <div>         
    <p>${z.gender}</p>         
    <img width="250px" src=${z.picture.large} />
    <p>${z.name.title} ${z.name.first} ${z.name.last}</p>         
    <p>${z.email}</p>         
    <p>${z.phone} </p>         
    </div>         
    `;
};
