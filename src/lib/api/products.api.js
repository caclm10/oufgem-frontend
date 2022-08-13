import { nanoid } from 'nanoid'
import product1_1 from '../../assets/images/product-1.1.png'
import product1_2 from '../../assets/images/product-1.2.png'
import product2_1 from '../../assets/images/product-2.1.png'
import product2_2 from '../../assets/images/product-2.2.png'
import product3_1 from '../../assets/images/product-3.1.png'
import product3_2 from '../../assets/images/product-3.2.png'
import product4_1 from '../../assets/images/product-4.1.png'
import product4_2 from '../../assets/images/product-4.2.png'
import { toSlug } from '../string'

const DUMMY_API = {
    getNewestProducts: () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: nanoid(),
                    name: 'OufGem Sweater Corymbia Brown',
                    price: 400000,
                    discount: 50,
                    images: [product1_1, product1_2],
                    slug: toSlug('OufGem Sweater Corymbia Brown')
                },
                {
                    id: nanoid(),
                    name: 'OufGem Flannel Daryllyn Green',
                    price: 400000,
                    discount: 66.25,
                    images: [product2_1, product2_2],
                    slug: toSlug('OufGem Flannel Daryllyn Green')
                },
                {
                    id: nanoid(),
                    name: 'OufGem Flannel Dagmar Red',
                    price: 400000,
                    discount: 66.25,
                    images: [product3_1, product3_2],
                    slug: toSlug('OufGem Flannel Dagmar Red')
                },
                {
                    id: nanoid(),
                    name: 'OufGem Flannel Armonie Red',
                    price: 400000,
                    discount: 66.25,
                    images: [product4_1, product4_2],
                    slug: toSlug('OufGem Flannel Armonie Red')
                },
            ])
        }, 200);
    }),
    getProducts: () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: nanoid(),
                    name: 'OufGem Sweater Corymbia Brown',
                    price: 400000,
                    discount: 50,
                    images: [product1_1, product1_2],
                    slug: toSlug('OufGem Sweater Corymbia Brown')
                },
                {
                    id: nanoid(),
                    name: 'OufGem Flannel Daryllyn Green',
                    price: 400000,
                    discount: 66.25,
                    images: [product2_1, product2_2],
                    slug: toSlug('OufGem Flannel Daryllyn Green')
                },
                {
                    id: nanoid(),
                    name: 'OufGem Flannel Dagmar Red',
                    price: 400000,
                    discount: 66.25,
                    images: [product3_1, product3_2],
                    slug: toSlug('OufGem Flannel Dagmar Red')
                },
                {
                    id: nanoid(),
                    name: 'OufGem Flannel Armonie Red',
                    price: 400000,
                    discount: 66.25,
                    images: [product4_1, product4_2],
                    slug: toSlug('OufGem Flannel Armonie Red')
                },
                {
                    id: nanoid(),
                    name: 'OufGem Flannel Dagmar Red',
                    price: 400000,
                    discount: 66.25,
                    images: [product3_1, product3_2],
                    slug: toSlug('OufGem Flannel Dagmar Red')
                },
                {
                    id: nanoid(),
                    name: 'OufGem Flannel Armonie Red',
                    price: 400000,
                    discount: 66.25,
                    images: [product4_1, product4_2],
                    slug: toSlug('OufGem Flannel Armonie Red')
                },
                {
                    id: nanoid(),
                    name: 'OufGem Sweater Corymbia Brown',
                    price: 400000,
                    discount: 50,
                    images: [product1_1, product1_2],
                    slug: toSlug('OufGem Sweater Corymbia Brown')
                },
                {
                    id: nanoid(),
                    name: 'OufGem Flannel Daryllyn Green',
                    price: 400000,
                    discount: 66.25,
                    images: [product2_1, product2_2],
                    slug: toSlug('OufGem Flannel Daryllyn Green')
                },
            ])
        }, 200);
    }),
}

export const getNewestProducts = async () => {
    const products = await DUMMY_API.getNewestProducts()

    return products
}

export const getProducts = async () => {
    const products = await DUMMY_API.getProducts()

    return products
}