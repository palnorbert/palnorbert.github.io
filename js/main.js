function calcAmount() {
    let price = 1000;
    let quantityInput = document.querySelector("input[name='quantity-input']");
    let amount = parseInt(quantityInput.value) * price;
    let showAmount = document.querySelector("span.show-amount")

    showAmount.innerHTML = amount;
}