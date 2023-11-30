import {ProductData, Review} from "./constants.ts";
import {fetchGet} from "./fetch.ts";
import {defer} from "react-router-dom";

export async function productPageLoader(param: any): Promise<any> {
    const productId = param.params.productId;
    const productData: Promise<ProductData> = fetchGet<ProductData>(
        `/api/product/data/find?productId=${productId}`,
        "Failed to fetch product data"
    );
    const reviews: Promise<Review[]> = fetchGet<Review[]>(
        `/api/product/review/findAllByProductId?productId=${productId}`,
        "Failed to fetch product reviews"
    );
    return defer({productData: productData, reviews: reviews})
}

export async function mainPageLoader(): Promise<any> {
    const newProducts: Promise<ProductData[]> = fetchGet<ProductData[]>(
        `/api/product/data/findAllByTag?tag=new`,
        "Failed to load new products"
    )
    const discountProducts: Promise<ProductData[]> = fetchGet<ProductData[]>(
        `/api/product/data/findAllByTag?tag=discount`,
        "Failed to load products with discount"
    );
    return defer({newProducts: newProducts, discountProducts: discountProducts})
}
