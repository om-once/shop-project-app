export type Product = {
    id: number
    title: string
    description: string
    type: string
    capacity: string
    price: number
    image: string
}

export const productsArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 15 Pro',
        description: 'This is iPhone 15 Pro',
        type: 'phone',
        capacity: '128',
        price: 1000,
        image: '/images/iphone-black.webp',
    },
    {
        id: 2,
        title: 'iPhone 14 Pro',
        description: 'This is iPhone 14 Pro',
        type: 'phone',
        capacity: '256',
        price: 1500,
        image: '/images/iphone-blue.webp',
    },
    {
        id: 3,
        title: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        type: 'phone',
        capacity: '64',
        price: 500,
        image: '/images/iphone-green.webp',
    },
    {
        id: 4,
        title: 'iPhone 14 Pro Max',
        description: 'This is iPhone 14 Pro Max',
        type: 'phone',
        capacity: '512',
        price: 2000,
        image: '/images/iphone-pink.webp',
    },
    {
        id: 5,
        title: 'iPhone 15',
        description: 'This is iPhone 15',
        type: 'phone',
        capacity: '128',
        price: 1000,
        image: '/images/iphone-white.webp',
    },
    {
        id: 6,
        title: 'iPhone 14',
        description: 'This is iPhone 14',
        type: 'phone',
        capacity: '64',
        price: 500,
        image: '/images/iphone-yellow.webp',
    },
]

export const getProductsObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )
