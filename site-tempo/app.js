const current = document.querySelector("#current");
const add = document.querySelector("#add");
const addCity = document.querySelector("#addCity");
const form = document.querySelector("form");
const center = document.querySelector(".center");
var cities = JSON.parse(localStorage.getItem("cities")) || [];
const ul = document.querySelector("ul");
const urlCapitals =
  "https://restcountries.com/v3.1/region/europe?fields=capital";

const showPosition = (position) => {
  const location = {
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  };

  const url = `http://api.weatherapi.com/v1/forecast.json?key=ad25c208008845ffbe6203255232111&q=${location.latitude},${location.longitude}&days=3&aqi=no&alerts=no
  `;
  fetchData(url)
    .then((response) => (current.innerHTML = contentCity(response)))
    .catch((error) => console.log("Erro:", error.message));
};
function showError(error) {
  console.log(error.code);
  switch (error.code) {
    case error.PERMISSION_DENIED:
      locationError = "User denied the request for Geolocation.";
      break;
    case error.PERMISSION_UNAVAILABLE:
      locationError = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      locationError = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      locationError = "An unknown error occurred.";
      break;
  }
  console.log(locationError);
}

const fetchData = async (url) => {
  const response = await fetch(url);
  if (response.status != 200) {
    throw new Error("Erro na leitura de dados");
  }
  const data = await response.json();
  return data;
};

const contentCity = (cityData) => {
  const weekDays = [
    "Sanday",
    "Monday",
    "Tuesday",
    "Wendsday",
    "Thursday",
    "Frayday",
    "Saturday",
  ];
  let content = `
<p><img src="${cityData.current.condition.icon}"></p>
<p>${cityData.location.region}, ${cityData.location.country}<br>
<span class="condition">${cityData.current.condition.text}, ${
    cityData.current.is_day == 1 ? "day" : "night"
  }</span><br>
${cityData.current.temp_c}º<br>
`;
  cityData.forecast.forecastday.forEach((day) => {
    content += `
    <span class="condition">${
      weekDays[new Date(day.date).getDay()]
    } <img src="${day.day.condition.icon}" width="40px"> ${
      day.day.condition.text
    }<br>
`;
  });
  return content;
};

add.addEventListener("click", (e) => {
  addCity.classList.remove("hide");
});

window.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    addCity.classList.add("hide");
  }
});

const buildCity = (city) => {
  const url = `http://api.weatherapi.com/v1/forecast.json?key=ad25c208008845ffbe6203255232111&q=${city}&days=3&aqi=no&alerts=no
  `;
  fetchData(url)
    .then((response) => {
      const newCity = document.createElement("div");
      newCity.classList.add("gradient-border");
      newCity.classList.add("current");
      newCity.setAttribute("id", city);
      newCity.innerHTML =
        contentCity(response) +
        `
          <div id="close">
            <strong>x</strong>
          </div>
        `;
      center.insertBefore(newCity, add);
    })
    .catch((error) => console.log("Erro:", error.message));
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const submitedCity = form.city.value.trim();
  console.log(submitedCity);
  addCity.classList.add("hide");
  form.reset();
  buildCity(submitedCity);
  cities.push(submitedCity);
  localStorage.setItem("cities", JSON.stringify(cities));
});

center.addEventListener("click", (e) => {
  if (e.target.parentElement.getAttribute("id") == "close") {
    e.target.parentElement.parentElement.remove();
    // ler o nome da cidade do id do div e apagar do array e escrever no localStorage
    const deletedCity = e.target.parentElement.parentElement.getAttribute("id");
    cities = cities.filter((city) => city != deletedCity);
    localStorage.setItem("cities", JSON.stringify(cities));
  }
});

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition, showError);
}
cities.forEach((city) => buildCity(city));

fetchData(urlCapitals)
  .then((response) => {
    var lis = "";
    response.forEach((country) => {
      lis += `<li id="${country.capital[0]}">${country.capital[0]}</li>`;
    });
    ul.innerHTML = lis;

    const items = document.querySelectorAll("ul li");
    items.forEach((item) => {
      item.draggable = true;
      item.ondragstart = (e) => {
        e.dataTransfer.setData("item-id", e.target.id);
      };
    });

    const dropzone = document.querySelector("[dropzone]");
    dropzone.ondragover = (e) => e.preventDefault();
    dropzone.ondrop = (e) => {
      const id = e.dataTransfer.getData("item-id");
      buildCity(id);
      cities.push(id);
      localStorage.setItem("cities", JSON.stringify(cities));
    };
  })
  .catch((error) => console.log("Erro:", error.message));
