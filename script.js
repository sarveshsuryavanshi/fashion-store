let cart = 0;

const buttons = document.querySelectorAll(".add-cart");
const cartCount = document.getElementById("cart-count");

buttons.forEach(button => {

button.addEventListener("click", () => {

cart++;

cartCount.innerText = cart;

alert("Product added to cart!");

});

});