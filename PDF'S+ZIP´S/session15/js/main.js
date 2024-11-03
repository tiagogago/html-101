const paises = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  if (response.status != 200) {
    throw new Error("Erro na leitura de dados");
  }
  const data = await response.json();
  return data;
};

var countriesList = [];
const offset = 20;
const numeros = document.querySelector("#pagination");

//pagina 1
//offset = 20
//inicial = ((pagina atual-1) * offset) + 1 - 1
//final = 20 (pagina atual * offset) - 10
//pagina 2
//inicial = 21 ((pagina atual-1) * offset) + 1 - 21
//final = 40 (pagina atual * offset) - 40
//pagina 3
//inicial = 41 ((pagina atual-1) * offset) + 1 - 41
//final = 60 (pagina atual * offset) - 60

const buildPagination = (totalPages) => {
  var numPagination = "";
  for (let i = 1; i <= totalPages; i++) {
    numPagination += `
        <span>${i}</span>
        `;
  }
  numeros.innerHTML = numPagination;
  console.log(numPagination);
};

const buildCountries = (countries, pagina = 1) => {
  var paises = "";
  const inicial = (pagina - 1) * offset + 1;
  var final = pagina * offset;
  console.log("pagina", pagina);
  for (let i = inicial - 1; i < final && i < countriesList.length; i++) {
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
    document.querySelector("tbody").innerHTML = buildCountries(data, 1);
    document.querySelector(".loader").classList.toggle("hide");
    document.querySelector(".countries").classList.toggle("hide");
    countriesList = [...data];
    //calcular o numero de páginas
    //total de paginas  = total de paises / offset = 13
    const paginas = Math.ceil(countriesList.length / offset);
    buildPagination(paginas);
  })
  .catch((err) => console.log("Surgiu um erro:", err.message));

const sortCountries = document.querySelector("#sort");
sortCountries.addEventListener("click", (e) => {
  countriesList.sort((a, b) => (a.name.common > b.name.common ? 1 : -1));
  document.querySelector("tbody").innerHTML = buildCountries(countriesList);
});

numeros.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(e.target.tagName);
  if (e.target.tagName == "SPAN") {
    console.log(e.target.innerText);
    document.querySelector("tbody").innerHTML = buildCountries(
      countriesList,
      e.target.innerText
    );
    //console.log(e.target.innerText);
  }
});
