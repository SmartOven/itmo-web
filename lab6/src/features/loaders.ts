import {Product, ProductCategories, ProductData, Review} from "./constants.ts";
import {fetchGet} from "./fetch.ts";

export async function productPageLoader(param: any): Promise<Product> {
    const productId = param.params.productId;
    const productData: ProductData = await fetchGet<ProductData>(
        `/api/product/data/find?productId=${productId}`,
        "Failed to fetch product data"
    );
    const reviews: Review[] = await fetchGet<Review[]>(
        `/api/product/review/findAllByProductId?productId=${productId}`,
        "Failed to fetch product reviews"
    );
    return {productData: productData, reviews: reviews}
}

export async function mainPageLoader(): Promise<ProductCategories> {
    const newProducts: ProductData[] = await fetchGet<ProductData[]>(
        `/api/product/data/findAllByTag?tag=new`,
        "Failed to load new products"
    )
    const discountProducts: ProductData[] = await fetchGet<ProductData[]>(
        `/api/product/data/findAllByTag?tag=discount`,
        "Failed to load products with discount"
    );
    return {newProducts: newProducts, discountProducts: discountProducts}
}
