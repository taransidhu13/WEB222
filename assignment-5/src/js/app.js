/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Tarandeep Kaur
 *      Student ID: 139389225
 *      Date:       28 November 2023
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
// Destructure the products and categories from the window object
const { products, categories } = window;

// Function to set up the initial state of the page
window.onload = function () {
  // Create menu buttons based on categories
  var menuElement = document.getElementById("menu");
  categories.forEach((category) => {
    var menuButton = document.createElement("button");
    menuButton.setAttribute("id", category.id);
    menuButton.setAttribute("class", "btn");
    menuButton.type = "button";
    menuButton.innerHTML = category.name;
    menuElement.appendChild(menuButton);
  });

  // Display the default category
  var defaultCategory = categories[0];
  display(defaultCategory);

  // Add click event listeners to category buttons
  const buttons = document.querySelectorAll(".btn");
  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      display(categories[index]);
    });
  });
};

// Function to display products based on the selected category
function display(category) {
  var displayHeading = document.getElementById("selected-category");
  var heading = document.createTextNode(category.name);
  displayHeading.setAttribute("class", "heading");
  displayHeading.innerHTML = "";
  displayHeading.appendChild(heading);

  var cardContainer = createCardContainer(); // Create the card container

  // Filter products based on the selected category and filter out discontinued products
  var filteredProducts = products.filter((product) => {
    return product.categories.includes(category.id) && !product.discontinued;
  });

  // Display product cards
  filteredProducts.forEach((product) => {
    const card = createCard(product);
    cardContainer.appendChild(card);
  });

  var cardDisplay = document.getElementById("category-products");
  cardDisplay.replaceChildren(cardContainer);
}


function createCardContainer() {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");
  return cardContainer;
}

// Function to create a product card dynamically
function createCard(product) {
  const card = document.createElement("div");
  card.classList.add("card");

  const productImage = document.createElement("img");
  productImage.src = product.imageUrl;
  productImage.setAttribute("alt", `Product Card for: ${product.title}`);
  productImage.classList.add("card-image");
  card.appendChild(productImage);

  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  const cardHeader = document.createElement("h2");
  cardHeader.classList.add("card-header");
  const productName = document.createTextNode(product.title);
  cardHeader.appendChild(productName);
  cardContent.appendChild(cardHeader);

  const cardDescription = document.createElement("p");
  cardDescription.classList.add("card-description");
  const productDescription = document.createTextNode(product.description);
  cardDescription.appendChild(productDescription);
  cardContent.appendChild(cardDescription);

  const cardPrice = document.createElement("footer");
  cardPrice.classList.add("card-price");
  const priceText = document.createTextNode(
    new Intl.NumberFormat("je-JY", { style: "currency", currency: "CAD" }).format(product.price)
  );
  cardPrice.appendChild(priceText);
  cardContent.appendChild(cardPrice);

  card.appendChild(cardContent);

  return card;
}

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");
