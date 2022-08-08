export const calculateTotalPrice = items => {
    let price = 0

    for (const item of items) {
        price += (item.product.price - (item.product.price * item.product.discount / 100)) * item.quantity
    }

    return price
}

export const countCartItem = items => {
    let count = 0

    for (const item of items) {
        count += item.quantity
    }

    return count
}