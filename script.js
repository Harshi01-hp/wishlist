function increaseQuantity(button) {
    var input = button.previousElementSibling;
    var currentValue = parseInt(input.value);
    input.value = currentValue + 1;
    updateTotal(button);
}

function decreaseQuantity(button) {
    var input = button.nextElementSibling;
    var currentValue = parseInt(input.value);
    if (currentValue > 0) {
        input.value = currentValue - 1;
    }
    updateTotal(button);
}

function updateTotal(button) {
    var row = button.closest('tr');
    var price = parseFloat(row.children[1].innerText.replace('₹', ''));
    var quantity = parseInt(row.querySelector('.quantity-input').value);
    var total = row.querySelector('.total-price');
    total.innerText = '₹ ' + (price * quantity).toFixed(2);
}

function removeItem(button) {
    var row = button.closest('tr');
    row.remove();
}

function clearCart() {
    var tableBody = document.querySelector('.cart-table tbody');
    tableBody.innerHTML = '';
}

function proceedToCheckout() {
    alert('Proceeding to checkout');
}
