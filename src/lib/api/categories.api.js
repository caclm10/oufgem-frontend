import { nanoid } from 'nanoid'
import { toSlug } from '../string'

const mock = {
    getCategories: () => new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: nanoid(),
                    name: 'T-Shirt',
                    slug: toSlug('T-Shirt'),
                    types: [
                        {
                            id: nanoid(),
                            name: 'T-Shirt Oversize',
                            slug: 't-shirt-oversize'
                        },
                        {
                            id: nanoid(),
                            name: 'T-Shirt Basic',
                            slug: 't-shirt-basic'
                        },
                        {
                            id: nanoid(),
                            name: 'T-Shirt Stripe',
                            slug: 't-shirt-stripe'
                        },
                        {
                            id: nanoid(),
                            name: 'T-Shirt Longsleeve',
                            slug: 't-shirt-longsleeve'
                        },
                    ]
                },
                {
                    id: nanoid(),
                    name: 'Shirt',
                    slug: toSlug('Shirt'),
                    types: [
                        {
                            id: nanoid(),
                            name: 'Flannel',
                            slug: 'flannel'
                        },
                        {
                            id: nanoid(),
                            name: 'Short Shirt',
                            slug: 'short-shirt'
                        },
                        {
                            id: nanoid(),
                            name: 'Long Shirt',
                            slug: 'long-shirt'
                        },
                        {
                            id: nanoid(),
                            name: 'Polo Shirt',
                            slug: 'polo-shirt'
                        },
                    ]
                },
                {
                    id: nanoid(),
                    name: 'Outer',
                    slug: toSlug('Outer'),
                    types: [
                        {
                            id: nanoid(),
                            name: 'Hoodie',
                            slug: 'hoodie'
                        },
                        {
                            id: nanoid(),
                            name: 'Sweater',
                            slug: 'sweater'
                        },
                        {
                            id: nanoid(),
                            name: 'Jacket',
                            slug: 'jacket'
                        },
                    ]
                },
                {
                    id: nanoid(),
                    name: 'Pants',
                    slug: toSlug('Pants'),
                    types: [
                        {
                            id: nanoid(),
                            name: 'Chino Pants',
                            slug: 'chino-pants'
                        },
                        {
                            id: nanoid(),
                            name: 'Jogger Pants',
                            slug: 'jogger-pants'
                        },
                        {
                            id: nanoid(),
                            name: 'Short Pants',
                            slug: 'short-pants'
                        },
                        {
                            id: nanoid(),
                            name: 'Denim Pants',
                            slug: 'denim-pants'
                        },
                    ]
                },
            ])
        }, 400)
    })
}

export const getCategories = async (withTypes = false) => {
    const categories = await mock.getCategories()

    return categories
}