import {executeFetch, RequestMethod} from "./fetch.ts";
import {ProductData} from "./constants.ts";

// TODO Переделать под фулл лоадер продукта целиком (данные + отзывы)
export async function productDataLoader(productId: any): Promise<ProductData> {
    const response = await executeFetch('/api/product/data/find?id=' + productId, RequestMethod.GET);
    if (!response.ok) {
        console.error("Couldn't fetch product data with productId=" + productId);
        return {productId: "", image: {src: "", altText: ""}, price: "", fullName: "", tag: ""};
    }
    return await response.json() as ProductData
}
