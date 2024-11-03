import { products } from "./data.js";

const API_URL = "https://flag-2023.proxy.beeceptor.com";

// CONSTANTS
const POPUP_TYPES = {
  ADD_TO_CART: "ADD_TO_CART",
  OUT_OF_STOCK: "OUT_OF_STOCK",
  ERROR: "ERROR",
};
// CONSTANTS

// UTILITIES
function validateInput(input) {
  const emailRegExp = /^[^\s@]+@[^\s@]+.[^\s@]+$/; // expressão regular para validar email
  return input.length && emailRegExp.test(input) ? true : false;
}
// UTILITIES

const productHandler = {
  productsContainer: document.querySelector("#product-list"),
  productTemplate: `
    <div class="product__slider"></div>
    <h2 class="product__title"></h2>
    <p class="product__description"></p>
    <p class="product__price"></p>
    <p class="product__price-withDiscount"></p>
    <button class="product__wishlist"><3</button>`,
  isProductFavorite: function (id) {
    const wishlistProducts = JSON.parse(
      window.localStorage.getItem("wishlist")
    );

    return wishlistProducts?.includes(id);
  },
  toggleWishlistButton: function (id, toState) {
    const wishlistButton = document.querySelector(
      `[js-data-product-id=product${id}] .product__wishlist`
    );

    if (toState) {
      wishlistButton.classList.add("product__wishlist--active");
    } else {
      wishlistButton.classList.remove("product__wishlist--active");
    }
  },
  toggleWishlist: function (id) {
    let wishlistProducts =
      JSON.parse(window.localStorage.getItem("wishlist")) ?? [];

    if (wishlistProducts.includes(id)) {
      wishlistProducts = wishlistProducts.filter(
        (productId) => productId !== id
      );
      this.toggleWishlistButton(id, false);
    } else {
      wishlistProducts = [...wishlistProducts, id];
      this.toggleWishlistButton(id, true);
    }

    window.localStorage.setItem("wishlist", JSON.stringify(wishlistProducts));
  },
  createProduct: function (product) {
    const productId = "product" + product.id;

    const newProductCard = document.createElement("article");

    newProductCard.innerHTML = this.productTemplate;

    newProductCard.classList.add("product");
    newProductCard.setAttribute("js-data-product-id", productId);

    newProductCard
      .querySelector(".product__slider")
      .setAttribute("js-data-slider-id", productId);

    newProductCard.querySelector(".product__title").innerText =
      product.title ?? "Product Title";

    newProductCard.querySelector(".product__description").innerText =
      product.description || "Product Description";

    newProductCard.querySelector(".product__price").innerText =
      product.price || "Product Price";

    const discountedPrice =
      product.price - (product.price * product.discountPercentage) / 100;

    newProductCard.querySelector(".product__price").style.textDecoration =
      "line-through";

    newProductCard.querySelector(".product__price-withDiscount").innerText =
      discountedPrice.toFixed(2) || "Product Discount Price";

    // HANDLE WISHLIST BUTTON
    const wishlistButton = newProductCard.querySelector(".product__wishlist");

    wishlistButton.addEventListener("click", () =>
      this.toggleWishlist(product.id)
    );

    if (this.isProductFavorite(product.id)) {
      wishlistButton.classList.add("wishlist--active");
    }
    // HANDLE WISHLIST BUTTON

    // HANDLER ADD TO CART/OUT OF STOCK
    if (product.stock > 40) {
      const addToCartButton = document.createElement("button");
      addToCartButton.innerText = "Adicionar ao carrinho";

      addToCartButton.addEventListener("click", () =>
        popupHandler.createPopup({
          message: "yes",
          type: POPUP_TYPES.ADD_TO_CART,
        })
      );

      newProductCard.append(addToCartButton);
    } else {
      // const messageElement = newElement.querySelector(".out__of__stock");
      const outOfStockButton = document.createElement("button");
      outOfStockButton.innerText = "Notificar-me quando existir stock";

      newProductCard.append(outOfStockButton);

      outOfStockButton.addEventListener("click", () =>
        popupHandler.createPopup({
          message: "nop",
          type: POPUP_TYPES.OUT_OF_STOCK,
        })
      );
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

    this.productsContainer.append(newProductCard);

    const sliderContainer = `[js-data-slider-id=${productId}]`;

    tns({
      container: `${sliderContainer}`,
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

    for (let index = 0; index < productsArray.length; index++) {
      const element = productsArray[index];
      this.createProduct(element);
    }
  },
};

const filtersHandler = {
  filtersContainer: document.querySelector("#product-filters"),
  onButtonPress: function () {},
  createFilter: function (label, type) {
    const newFilterItem = document.createElement("li");
    const newFilterButton = document.createElement("button");
    newFilterButton.innerText = label;

    newFilterButton.addEventListener("click", () => onButtonPress(label, type));

    const htmlContainer = this.filtersContainer.querySelector(
      `.filters__${type}`
    );

    newFilterItem.append(newFilterButton);
    htmlContainer.append(newFilterItem);
  },
  generateFilters: function (list, type) {
    for (let index = 0; index < list.length; index++) {
      const label = list[index];

      this.createFilter(label, type);
    }
  },
};

const loadingHandler = {
  loadingContainer: document.querySelector(".loading"),
  setLoadingOn: function () {
    this.loadingContainer.classList.remove("loading--disabled");
  },
  setLoadingOff: function () {
    this.loadingContainer.classList.add("loading--disabled");
  },
};

const popupHandler = {
  popupWrapper: document.querySelector(".popup"),
  popupContainer: document.querySelector(".popup__container"),
  templates: {
    [POPUP_TYPES.ADD_TO_CART]: {
      html: `<p>Produto adicionado com sucesso</p>`,
      mode: "success",
    },
    [POPUP_TYPES.OUT_OF_STOCK]: {
      html: `<p>Produto sem de Stock</p>`,
      mode: "warning",
    },
    [POPUP_TYPES.ERROR]: {
      html: ``,
      mode: "error",
    },
  },
  createPopup: function (payload) {
    const { message, type } = payload;

    // validate if type exists in our base templates
    if (!type in this.templates) {
      return;
    }

    // get the html and mode from our template
    const { html, mode } = this.templates[type];

    const newMessage = document.createElement("p");
    newMessage.innerText = message;

    if (this.popupContainer) {
      this.popupContainer.innerHTML = html;
      this.popupContainer.append(newMessage);

      this.popupContainer.classList.add(`popup--${mode}`);
    }
    const closeButton = document.createElement("button");
    closeButton.innerText = "Fechar";
    closeButton.classList.add("popup__close"); // adicionando a classe de estilo, se houver
    closeButton.addEventListener("click", () => this.closePopup()); // adicionando ouvinte de eventos para fechar o popup
    this.popupContainer.appendChild(closeButton); // adicionando o botão de fechar ao popup
    this.popupWrapper.classList.remove("popup--closed");
  },
  closePopup: function () {
    this.popupWrapper.classList.add("popup--closed");
  },
  addEventListeners: function () {
    const onClose = this.closePopup;

    this.popupContainer
      ?.querySelector(".popup__close")
      ?.addEventListener("click", onClose);
  },
  init: function () {
    this.addEventListeners();
  },
};

const getProductsByParameter = (select) => {
  let url = API_URL + "/products";

  if (select) {
    // Destructuring
    const { type, value } = select;

    url = url + `?${type}=${value}`;
  }

  loadingHandler.setLoadingOn();

  fetch(url)
    .then((response) => response.json())
    .then((resJson) => {
      if (!!resJson) {
        // atualizar a minha listagem de produtos
        productHandler.generateProducts(resJson);

        if (!select) {
          const brandList = resJson.map((el) => el.brand);

          filtersHandler.generateFilters(brandList, "brand");
        }
      }
    })
    .catch((err) => {
      productHandler.generateProducts(products);

      if (!select) {
        const brandList = products.map((el) => el.brand);

        filtersHandler.generateFilters(brandList, "brand");
      }

      console.log(err);
      // handleError(err);

      popupHandler.createPopup({
        message: "Não conseguimos processar o seu pedido",
        type: POPUP_TYPES.ERROR,
      });
    })
    .finally(() => {
      loadingHandler.setLoadingOff();
    });
};

popupHandler.init();

getProductsByParameter();
