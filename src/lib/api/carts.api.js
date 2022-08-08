import { nanoid } from "nanoid";

import f1 from '../../assets/images/f-1.jpg'

const mock = {
    getCart: () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: nanoid(),
                items: [
                    {
                        id: nanoid(),
                        cart_id: nanoid(),
                        quantity: 3,
                        product: {
                            id: '1',
                            name: 'OufGem Flannel Corymbia Brown',
                            price: 400000,
                            discount: 66.25,
                            images: [f1],
                        },
                        size: 'M'
                    },
                    {
                        id: nanoid(),
                        cart_id: nanoid(),
                        quantity: 1,
                        product: {
                            id: '3',
                            name: 'OufGem Flannel Dagmar Red',
                            price: 400000,
                            discount: 66.25,
                            images: [f1]
                        },
                        size: 'M'
                    },
                ]
            })
        }, 500);
    })
}

export const getCart = async () => {
    const cart = await mock.getCart()

    return cart
}