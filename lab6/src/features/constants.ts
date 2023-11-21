export const backendUri = 'http://localhost:8080'

export interface ProductData {
    productId: string;
    image: {
        src: string;
        altText: string;
    }
    price: string;
    fullName: string;
    tag: string;
}
