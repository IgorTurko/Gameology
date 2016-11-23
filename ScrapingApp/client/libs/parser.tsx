export function formatPrice(price: any): string {
    if (price == null || price === undefined || isNaN(price))
        return "";

    let priceNumber = parseFloat(price);
    if (isNaN(priceNumber)) {
        return price;
    }    

    return `$${priceNumber.toFixed(2)}`;
}