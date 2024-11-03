const API_URL = "https://flag-2023.proxy.beeceptor.com";

// UTILITIES
function validateInput(input) {
  const emailRegExp = /^[^\s@]+@[^\s@]+.[^\s@]+$/; // expressão regular para validar email
  return input.length && emailRegExp.test(input) ? true : false;
  // operador ternário
}
// UTILITIES

const productHandler = {
  productsContainer: document.querySelector("#product-list"),
  productTemplate: `
    <div class="product__slider></div>
    <h2 class="product__title"></h2>
    <p class="product__description"></p>
    <p class="product__price"></p>
    <button class="product__wishlist"><3</button>`,
  createProduct: function (product) {
    const productId = "product" + item.id;

    const newProductCard = document.createElement("article");

    newProductCard.innerHTML = this.productTemplate;

    newProductCard.classList.add("product");
    newProductCard.setAttribute("js-data-product-id", productId);

    newProductCard.setAttribute("js-data-slider-id", productId);

    newProductCard.querySelector(".product__title").innerText =
      item.title ?? "Product Title";

    newProductCard.querySelector(".product__description").innerText =
      item.description || "Product Description";

    newProductCard.querySelector(".product__price").innerText =
      item.price || "Product Price";

    // HANDLE WISHLIST BUTTON
    const wishlistButton = newProductCard.querySelector(".wishlist");

    wishlistButton.addEventListener("click", () => toggleWishlist(item.id));

    if (isProductFavorite(item.id)) {
      wishlistButton.classList.add("wishlist--active");
    }
    // HANDLE WISHLIST BUTTON

    // HANDLER ADD TO CART/OUT OF STOCK
    if (item.stock > 40) {
      const addToCartButton = document.createElement("button");
      addToCartButton.innerText = "Adicionar ao carrinho";

      newProductCard.append(addToCartButton);
    } else {
      // const messageElement = newElement.querySelector(".out__of__stock");
      const outOfStockButton = document.querySelector("button");
      outOfStockButton.innerText = "Notificar-me quando existir stock";

      outOfStockButton.append(addToCartButton);

      outOfStockButton.addEventListener("click", () => {
        popUpObject.outOfStockPopUp(item);
      });
    }
    // HANDLER ADD TO CART/OUT OF STOCK

    // HANDLE IMAGES
    product.images.forEach((path, index) => {
      const newImage = document.createElement("img");

      newImage.setAttribute("src", path);
      newImage.setAttribute("alt", `${product.title}-${index}`);

      newProductCard.querySelector(`.product__slider`).append(newImage);
    });
    // HANDLE IMAGES

    this.htmlContainer.append(newProductCard);

    const sliderContainer = `[js-data-slider-id=${productId}]`;

    tns({
      container: `.${sliderContainer}`,
      items: 1,
      slideBy: "page",
      autoplay: true,
      controls: true,
      controlsPosition: "bottom",
      nav: true,
      navPosition: "bottom",
      navAsThumbnails: true,
      arrowKeys: true,
      mouseDrag: true,
    });
  },
  cleanUpFunction: function () {
    this.productsContainer.innerHTML = null;
  },
  generateProducts: function (productsArray) {
    this.cleanUpFunction();

    productsArray.forEach(this.createProduct);
  },
};

const popUpObject = {
  popupTemplate: `
        <span class="close"> &times; </span>
        <p class="popup-message"></p>
        <span class="error-message">Por favor introduza um email válido.</span>
        <input id="myInput" class="popup-input" type="text">
        <button class="popup-button"></button>
        <span class="success-message"></span>
    `,
  popUpElement: document.querySelector(".popup-element"),
  popUpBox: document.querySelector(".popup-box"),
  createPopup: function () {
    this.popUpElement.style.opacity = "0";
    this.popUpBox.innerHTML = this.popupTemplate;
  },
  displayPopup: function (item) {
    let spanErrorMessage = this.popUpBox.querySelector(".error-message");
    let spanSuccessMessage = this.popUpBox.querySelector(".success-message");

    this.popUpElement.style.opacity = "1";
    this.popUpElement.classList.toggle("popup-background");

    this.popUpBox.querySelector(
      ".popup-message"
    ).innerText = `De momento não temos o produto ${item.title}. \n ${item.availabilityMessage}`;
    this.popUpBox.querySelector("button").innerText = "Submit";
    spanErrorMessage.style.display = "none";
    spanSuccessMessage.style.opacity = "0";

    let myInput = document.querySelector("#myInput");
    let submitButton = document.querySelector(".popup-button");

    submitButton.addEventListener("click", () => {
      spanSuccessMessage.style.opacity = "0";

      let result = func.validateInput(myInput.value);

      if (result) {
        spanSuccessMessage.innerText = `Será notificado assim que o produto ${item.title} estiver disponível!`;

        spanErrorMessage.style.display = "none";
        this.resetPopup("none");

        spanSuccessMessage.style.opacity = "1";
        const mySetTimeout = setTimeout(() => {
          this.popUpElement.style.opacity = "0";
          this.popUpElement.classList.toggle("popup-background");

          setTimeout(() => {
            this.resetPopup("block");
            this.popUpElement.classList.remove("popup-background");
          }, 500);
        }, 2000);
      } else {
        spanErrorMessage.style.display = "block";
      }
    });

    this.popUpBox.querySelector(".close").addEventListener("click", () => {
      this.popUpElement.classList.remove("popup-background");
      if (mySetTimeout) {
        clearTimeout(mySetTimeout);
      }
      this.resetPopup("block");
      this.popUpElement.classList.remove("popup-background");
    });

    window.document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.popUpElement.classList.remove("popup-background");
        if (mySetTimeout) {
          clearTimeout(mySetTimeout);
        }
        this.resetPopup("block");
        this.popUpElement.classList.remove("popup-background");
      }
    });
  },

  outOfStockPopUp: function (item) {
    this.displayPopup(item);
  },

  showOnlySuccessMessageAfterSubmit() {
    let elementsArray = [];
    elementsArray.push(this.popUpBox.querySelector(".popup-message"));
    elementsArray.push(this.popUpBox.querySelector(".error-message"));
    elementsArray.push(document.querySelector("#myInput"));
    elementsArray.push(this.popUpBox.querySelector("button"));

    return elementsArray;
  },

  resetPopup: function (state) {
    this.showOnlySuccessMessageAfterSubmit().forEach((element) => {
      element.style.display = state;
    });
  },
};

const onToggle = (id, state) => {
  // atualizar o meu dom

  const wishlistButton = document
    .querySelector(`#product${id}`)
    .querySelector(".wishlist");

  if (state) {
    wishlistButton.classList.add("wishlist--active");
  } else {
    wishlistButton.classList.remove("wishlist--active");
  }
};

const toggleWishlist = (id) => {
  // JSON.stringify converte para string
  // JSON.parse converte para objeto de javascript

  // window.localStorage.setItem("wishlist", JSON.stringify(/* newArray */));

  let wishlistData = JSON.parse(window.localStorage.getItem("wishlist")) ?? []; // ?? vs ||
  console.log("wishlistData inital state", wishlistData);

  if (wishlistData.includes(id)) {
    // remover o meu produto do array
    wishlistData = wishlistData.filter((e) => e !== id);
    onToggle(id, false);
  } else {
    // adicionar o meu produto ao array
    // wishlistData = [...wishlistData, id]
    wishlistData.push(id);
    onToggle(id, true);
  }
  // atualizar a minha storage
  console.log("wishlistData final state", wishlistData, id);

  window.localStorage.setItem("wishlist", JSON.stringify(wishlistData));

  console.log(wishlistData);
};

const isProductFavorite = (id) => {
  const wishlistData = JSON.parse(window.localStorage.getItem("wishlist"));
  return wishlistData.includes(id);
};

document.querySelector(".wishlist-demo").addEventListener("click", () => {
  toggleWishlist(3);
});

const randomCard = {
  htmlContainer: document.querySelector("#product-list"),

  productGenerator: function (item) {
    const modalTemplate = `
    <div class="my-slider-${item.id}"></div>
    <h2 class="product__title"></h2>
    <p class="product__description"></p>
    <p class="product__price"></p>
    <button></button>
    <p class="out__of__stock"></p>
    <button class="wishlist"><3</button>`;

    const newElement = document.createElement("div");
    newElement.innerHTML = modalTemplate;
    newElement.classList.add("product-list__card");

    // newElement.querySelector('img').setAttribute('src', item.thumbnail);

    newElement.setAttribute("id", "product" + item.id);
    newElement.querySelector("h2").innerText = item.title ?? "Título";

    newElement.querySelector(".product__description").innerText =
      item.description || "Descrição";

    newElement.querySelector(".product__price").innerText =
      item.price || "Preço";

    const wishlistButton = newElement.querySelector(".wishlist");

    wishlistButton.addEventListener("click", () => toggleWishlist(item.id));

    if (isProductFavorite(item.id)) {
      wishlistButton.classList.add("wishlist--active");
    }

    if (item.stock > 40) {
      let myButton = newElement.querySelector("button");
      myButton.innerText = "Adicionar ao carrinho";

      // item.availabilityMessage = "Produto adicionado ao carrinho";
      // Igual ao de baixo
      Object.assign(item, {
        item,
        availabilityMessage: "Produto adicionado ao carrinho",
      });
    } else {
      const messageElement = newElement.querySelector(".out__of__stock");
      let myButton = newElement.querySelector("button");
      myButton.innerText = "Notificar-me quando existir stock";
      messageElement.innerText = "Out of Stock";
      messageElement.style.color = "red";

      // Arrow function
      // Ao clicar em elemento sem stock -> mostra popup com as informações do produto que foi clicado.
      // passa por parâmetro (objeto que é o Iphone) para um novo método -> outOfStockPopUp
      myButton.addEventListener("click", () => {
        popUpObject.outOfStockPopUp(item);
      });
      //
      Object.assign(item, {
        item,
        availabilityMessage:
          "Assim que tivermos o produto disponivel, será o 1º a ser notificado. \n Por favor introduza o seu email:",
      });
    }

    item.images.forEach((element) => {
      let eachImage = document.createElement("img");
      eachImage.setAttribute("src", element);
      newElement.querySelector(`.my-slider-${item.id}`).append(eachImage);
    });

    const sliderContainer = `my-slider-${item.id}`;

    this.htmlContainer.append(newElement);

    tns({
      container: `.${sliderContainer}`,
      items: 1,
      slideBy: "page",
      autoplay: true,
      controls: true,
      controlsPosition: "bottom",
      nav: true,
      navPosition: "bottom",
      navAsThumbnails: true,
      arrowKeys: true,
      mouseDrag: true,
    });
  },

  createModules: function (arr) {
    arr.forEach((item) => {
      this.productGenerator(item);
    });
  },
};

// randomCard.createModules(func.getProducts())

// const myUrl2 = 'https://mocki.io/v1/3f7e9933-5b7c-43f3-ad60-89089f2324ac';
// fetch(myUrl2).then(response => response.json().then(resJson => {
//     randomCard.createModules(resJson);
// }));

function onBrandClicked(brand) {
  console.log(brand);

  getProductsByParameter({ type: "brand", value: brand.toLowerCase() });
}

function generateBrands(jsonRes) {
  let brands = [];
  let buttonBrandContainer = document.querySelector(".brand-buttons");

  jsonRes.forEach((el) => {
    let foundBrand = brands.find((row) => row === el.brand);
    if (!foundBrand) {
      brands.push(el.brand);
    }
  });

  brands.forEach((brandName) => {
    let eachButton = document.createElement("button");
    eachButton.setAttribute("type", "button");
    eachButton.innerText = brandName;
    eachButton.addEventListener("click", () => {
      onBrandClicked(brandName);
    });
    buttonBrandContainer.append(eachButton);
  });
}

function handleError(error) {
  const errorBox = document.querySelector(".error-message");
  const fallBackImage = "../img/no-results.png";
  errorBox.style.display = "block";
  errorBox.innerHTML = `
    Os produtos esfumaram-se! Tenta mais tarde. \n 
    ${error} \n 
    <img src="${fallBackImage}">
    `;
  // errorBox.innerHTML = 'Os produtos esfumaram-se! Tenta mais tarde.' + '\n' +  errorBanana;
}
popUpObject.createPopup();

const priceButtons = document.querySelectorAll(".price-buttons button");

priceButtons.forEach((btn) => {
  // add listener to select price range
  btn.addEventListener("click", (eventObject) => {
    const priceRange = eventObject.target.getAttribute("js-data-value");

    getProductsByParameter({ type: "range", value: priceRange });
  });
});

// atualizar os dados da minha api

const getProductsByParameter = (select) => {
  let url = API_URL + "/products";

  if (select) {
    // Destructuring
    const { type, value } = select;

    url = url + `?${type}=${value}`;
  }

  // setLoading(true)

  fetch(url)
    .then((response) => response.json())
    .then((resJson) => {
      if (!!resJson) {
        // atualizar a minha listagem de produtos
        productHandler.createProducts(resJson);

        if (!select) {
          generateBrands(resJson);
        }
      }
    })
    .catch((err) => {
      handleError(err);
    })
    .finally(() => {
      // setLoading(false)
    });
};

getProductsByParameter();

/*
fetch(API_URL + "/products", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(select),
});
*/

/*
localStorage.setItem("lastname", "Smith");
localStorage.getItem("lastname");

sessionStorage.setItem("lastname", "Smith");
sessionStorage.getItem("lastname");

// Retrieve params via url.search, passed into ctor
const url = new URL("https://example.com?foo=1&bar=2");

const params1 = new URLSearchParams(url.search);

// Get the URLSearchParams object directly from a URL object
const params1a = url.searchParams;

// Pass in a string literal
const params2 = new URLSearchParams("foo=1&bar=2");
const params2a = new URLSearchParams("?foo=1&bar=2");
console.log(url, [...params1.entries()], params1a, params2, params2a);

// Pass in a sequence of pairs
const params3 = new URLSearchParams([
  ["foo", "1"],
  ["bar", "2"],
]);

// Pass in a record
const params4 = new URLSearchParams({ foo: "1", bar: "2" });

console.log(url.href);
// https://example.com/?a=hello&b=world

console.log(url.origin);
// https://example.com

const add_params = {
  c: "a",
};

const new_params = new URLSearchParams([
  ...Array.from(url.searchParams.entries()), // [["a","hello"],["b","world"]]
  ...Object.entries(add_params), // [["c","a"],["d","2"],["e","false"]]
]).toString();
console.log(new_params);
// a=hello&b=world&c=a&d=2&e=false

const new_url = new URL(`${url.origin}${url.pathname}?${new_params}`);

console.log(new_url.href);
// https://example.com/?a=hello&b=world&c=a&d=2&e=false

// Here it is as a function that accepts (URL, Record<string, string>)
const addSearchParams = (url, params = {}) =>
  new URL(
    `${url.origin}${url.pathname}?${new URLSearchParams([
      ...Array.from(url.searchParams.entries()),
      ...Object.entries(params),
    ])}`
  );
*/
