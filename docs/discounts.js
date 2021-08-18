// const originalPrice = 120
// const discount = 18



// console.log({
//     originalPrice,
//     discount,
//     percentPricesWithDiscount,
//     priceWithDiscount,

// });

function calculatePriceWithDiscount (price  , discount) {

    const percentPricesWithDiscount = 100 - discount;
    const priceWithDiscount = (price * (percentPricesWithDiscount))/ 100

    return priceWithDiscount;
}

function onClickPriceWithDiscount() {


    const InputPrice = document.getElementById("InputPrice")
    const priceValue = InputPrice.value;

    const InputDiscount = document.getElementById("InputDiscount")
    const discountValue = InputDiscount.value;

    const priceWithDiscount = calculatePriceWithDiscount(priceValue, discountValue);

    const priceResult = document.getElementById("priceResult")

    priceResult.innerText = "The magic price is $" + priceWithDiscount;
}

