function calcularPrecioConDescuento(precio, descuento){
    const porcentajeDelPrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajeDelPrecioConDescuento)/ 100;

    return precioConDescuento;

}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;
    const resultCoupon = document.getElementById("priceWithCoupon")
    let descuento;
    let precioConDescuento;

    switch(true) {
        case couponValue === "Lucky":
        descuento = 15;
        precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
        resultCoupon.innerText =`It´s your lucky day, we´ve split the price on %${descuento} leaving the total to pay o : $${precioConDescuento} Dollars`
        break;
        case couponValue === "SayIt":
        descuento = 30;
        precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
        resultCoupon.innerText =`It´s your lucky day, we´ve split the price on %${descuento} leaving the total to pay o : $${precioConDescuento} Dollars`
        break;
        case couponValue === "Magic":
        descuento = 25;
        precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
        resultCoupon.innerText =`It´s your lucky day, we´ve split the price on % ${descuento} leaving the total to pay o : $${precioConDescuento}`
        break;
        default:
        resultCoupon.innerText = "Are you trying to guess?"
    }
}