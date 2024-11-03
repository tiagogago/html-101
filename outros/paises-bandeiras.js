const paises = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  if (response.status != 200) {
    throw new Error("Erro na leitura de dados");
  }
  const data = await response.json();
  return data;
};

var countriesList = [];
var inicial = 1;
var final = 20;

const buildCountries = (countries) => {
  var paises = "";
  for (let i = inicial - 1; i < final; i++) {
    paises += `
          <tr>
            <th scope="row">${i + 1}</th>
            <td>${countries[i].name.common}</td>
            <td>${countries[i].region}</td>
            <td>${countries[i].subregion}</td>
            <td><img src="${countries[i].flags.png}" width=50px /></td>
          </tr>
          `;
  }

  return paises;
};

paises()
  .then((data) => {
    document.querySelector("tbody").innerHTML = buildCountries(data);
    document.querySelector(".loader").classList.toggle("hide");
    document.querySelector(".countries").classList.toggle("hide");
    countriesList = [...data];
  })
  .catch((err) => console.log("Surgiu um erro:", err.message));

const sortCountries = document.querySelector("#sort");
sortCountries.addEventListener("click", (e) => {
  countriesList.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
  document.querySelector("tbody").innerHTML = buildCountries(countriesList);
});
