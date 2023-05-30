const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.getElementById('cart-items');
const totalAmount = document.getElementById('total');
let cartTotal = 0;

addToCartButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const product = event.target.dataset.product;
    const price = parseFloat(event.target.dataset.price);
    cartTotal += price;

    const listItem = document.createElement('li');
    listItem.innerText = `${product} - ₹${price.toFixed(2)}`;
    
    const quantitySelect = document.createElement('select'); // Create a select element for quantity
    quantitySelect.classList.add('quantity-select');
    const quantities = [1, 2, 3, 4, 5]; // Modify quantities as per your requirement
    quantities.forEach(quantity => {
      const option = document.createElement('option');
      option.value = quantity;
      option.text = quantity;
      quantitySelect.appendChild(option);
    });
    listItem.appendChild(quantitySelect);

    cartItemsList.appendChild(listItem);
    const removeButton = document.createElement('button');
    removeButton.innerText = 'Remove';
    removeButton.classList.add('remove-button');
    listItem.appendChild(removeButton);

    totalAmount.innerText = `Total: ₹${cartTotal.toFixed(2)}`;

    removeButton.addEventListener('click', () => {
      cartTotal -= price;
      listItem.remove();
      totalAmount.innerText = `Total: ₹${cartTotal.toFixed(2)}`
    });
  });
});
