//Select the Add to Cart button and the cart elements
const addToCartButton = document.querySelector('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
let totalAmount = 0;

// Event listener for the Add to Cart button
addToCartButton.addEventListener('click', function(event) {
    const productName = event.target.getAttribute('data-product');
    const productPrice = parseFloat(event.target.getAttribute('data-price'));

    // Create a new list item for the cart
    const listItem = document.createElement('li');
    listItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;

    // Append the new item to the cart
    cartItems.appendChild(listItem);

    // Update the total amount
    totalAmount += productPrice;
    cartTotal.textContent = totalAmount.toFixed(2);
});

// Event listener for the Checkout button
const checkoutButton = document.getElementById('checkout');
checkoutButton.addEventListener('click', function() {
    alert(`Your total is $${totalAmount.toFixed(2)}. Thank you for your purchase!`);
    // Reset the cart after checkout
    cartItems.innerHTML = '';
    totalAmount = 0;
    cartTotal.textContent = '0.00';
});
