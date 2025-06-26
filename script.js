// ✅ Price List
const productDatabase = {
  headset: 999,
  mouse: 599,
  chair: 4999,
  microwave: 3999,
  laptop: 49999,
  ac: 25000,
  fridge: 18000,
  washing_machine: 15000,
  speaker: 1299,
  vaccum: 1999,
  cushion: 799,
  vases: 699,
  storage: 899,
  lighting: 999,
  sofa: 10999,
  stool: 499,
  ps5_digital: 44990,
  ps5_disc: 49990,
  ps5_fortnite: 52990,
  controller: 5990,
  gaming_laptop: 75990,
  monitor: 18990,
  xbox: 39990,
  cleaning: 199,
  bathroom: 299,
  tools: 349,
  wallpapers: 249,
  carpets: 499,
  pots: 399,
  candle_jar: 349,
};

// ✅ Cart Functions
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || {};
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

// ✅ Cart Page Rendering
function renderCartPage() {
  const cart = getCart();
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotalEl = document.getElementById("cart-total");

  if (!cartItemsContainer || !cartTotalEl) return; // Not on cart.html

  cartItemsContainer.innerHTML = "";
  let total = 0;

  for (let id in cart) {
    const qty = cart[id];
    const price = productDatabase[id] || 0;
    const itemTotal = qty * price;
    total += itemTotal;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${id.replace(/_/g, " ")}</td>
      <td>${qty}</td>
      <td>₹${itemTotal}</td>
      <td><button onclick="removeFromCart('${id}')">❌</button></td>
    `;
    cartItemsContainer.appendChild(row);
  }

  cartTotalEl.textContent = total;
}

// ✅ Remove from cart
function removeFromCart(productId) {
  const cart = getCart();
  delete cart[productId];
  saveCart(cart);
  renderCartPage();
}

// ✅ Dummy Checkout (future)
function checkout() {
  alert("Checkout feature coming soon!");
}

// ✅ Run on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  renderCartPage(); // will only work if you're on cart.html
});
