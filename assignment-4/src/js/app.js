/**
 * WEB222 – Assignment 04
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
 *      Date:       14 November 2023
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// Function to create menu category buttons
function createCategoryButtons() {
  const menu = document.getElementById("menu");

  // Loop through all category objects and create a button for each
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.textContent = category.name;
    button.addEventListener("click", () => showProducts(category));
    menu.appendChild(button);
  });

  // Show products for the default category (the first category)
  showProducts(categories[0]);
}

// Function to show product list in the <tbody> based on a category
function showProducts(category) {
  const selectedCategoryTitle = document.getElementById("selected-category");
  const productList = document.getElementById("category-products");

  // Update selected category title
  selectedCategoryTitle.textContent = category.name;

  // Clear current rows from the product list
  productList.innerHTML = "";

  // Filter products based on the selected category and non-discontinued status
  const filteredProducts = products.filter(
    (product) => product.categories.includes(category.id) && !product.discontinued
  );

  // Loop over filtered product list and add rows to the table's body
  filteredProducts.forEach((product) => {
    const row = document.createElement("tr");

    // Add a click handler to the row to log the product when clicked
    row.addEventListener("click", () => console.log(product));

    // Create <td> elements for the product’s title, description, and price
    const titleCell = document.createElement("td");
    const descriptionCell = document.createElement("td");
    const priceCell = document.createElement("td");

    // Set content for <td> elements
    titleCell.textContent = product.title;
    descriptionCell.textContent = product.description;

    // Convert the price in cents to dollars and cents
    const priceInDollars = (product.price / 100).toFixed(2);

    // Format the price as Canadian Currency
    const formattedPrice = new Intl.NumberFormat("en-CA", {
      style: "currency",
      currency: "CAD"
    }).format(priceInDollars);

    priceCell.textContent = formattedPrice;

    // Append <td> elements to the <tr>
    row.appendChild(titleCell);
    row.appendChild(descriptionCell);
    row.appendChild(priceCell);

    // Append <tr> to the <tbody>
    productList.appendChild(row);
  });
}

// Run createCategoryButtons function when the page is loaded
document.addEventListener("DOMContentLoaded", createCategoryButtons);
