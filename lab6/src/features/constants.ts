export const backendUri = 'http://localhost:8080'

export interface ProductCategories {
    newProducts: ProductData[]
    discountProducts: ProductData[]
}

export interface Product {
    productData: ProductData
    reviews: Review[]
}

export interface ProductData {
    productId: string
    image: {
        src: string
        altText: string
    }
    price: string
    fullName: string
    tag: string
}

export interface Review {
    productId: string
    timestamp: string
    username: string
    text: string
    rating: number
}
