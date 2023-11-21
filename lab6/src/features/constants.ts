export const backendUri = 'http://localhost:8080'

export interface ProductData {
    id: string;
    image: {
        src: string;
        altText: string;
    }
    price: string;
    fullName: string;
    tag: string;
}
