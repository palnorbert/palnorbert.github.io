function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);

    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat egyszerre!");
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket kell tartalmaznia a rendelésnek!")
    } else {
        let amount = parseInt(amountInput.value) * price;
        if (amount < 5000) {
            amount = amount + 500;
        } else {
            alert("5000Ft feletti vásárlás esetén a házhozszállítás ingyenes!");
        } 
        showAmount.innerHTML = amount.toFixed();
    }

}

function inputValidation() {
    let userAddress = document.querySelector("input[name='address']");
    let trimAddress = userAddress.value.trim();
    let presentAddress = document.querySelector("span.show-address");

    if (trimAddress.length < 10) {
        alert("Kérjük a teljes lakcímed írd be a Lakcím rovatba!");
    } else {
        console.log(trimAddress);
        presentAddress.innerHTML = trimAddress;
    }

    let emailAddress = document.querySelector("input[name='email']");
    let showEmail = emailAddress.value;
    let trimEmail = showEmail.trim();

    if (trimEmail.indexOf('@') < 0 && trimEmail.indexOf('.') < 0) {
        alert("Az email cím formátuma érvénytelen, kérjük javítsd ki!");
    } else {
        console.log(trimEmail);
    }

}


document.getElementById("buttonOrder").addEventListener("click", inputValidation);

function calcWeather() {
    let days = ('Hétfő', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat', 'Vasárnap')
    callByReference(days); {
        console.log('Napi hőmérséklet:')
        console.log(weather.js)
        console.log('°C')
    }
}