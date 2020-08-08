function calcAmount() {
    let price = 1000;
    let quantityInput = document.querySelector("input[name='quantity-input']");
    let amount = parseInt(quantityInput.value) * price;
    let showAmount = document.querySelector("span.show-amount")

    showAmount.innerHTML = amount;
}

function calcWeather() {
    let days = ('Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat', 'Vasárnap')
    callByReference(days); {
        console.log('Napi hőmérséklet:')
        console.log(weather.js)
        console.log('°C')
    }
}