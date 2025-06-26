function getCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || {};
  return cart;
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function addToCart(productId) {
  const cart = getCart();
  cart[productId] = (cart[productId] || 0) + 1;
  saveCart(cart);
  alert("Item added to cart!");
}

function updateCartCount() {
  const cart = getCart();
  let total = 0;
  for (let item in cart) {
    total += cart[item];
  }
  const countDisplay = document.querySelector(".cart-count");
  if (countDisplay) countDisplay.textContent = total;
}

document.addEventListener("DOMContentLoaded", updateCartCount);
