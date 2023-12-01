import React, {Suspense} from "react";
import "../../styles/main/MainComponent.css"
import {ProductCategories, ProductData} from "../../features/constants.ts";
import {Await, useLoaderData} from "react-router-dom";
import Preloader from "../Preloader.tsx";
import LoadingError from "../LoadingError.tsx";

const MainComponent: React.FC = () => {
    const productCategories: ProductCategories = useLoaderData() as ProductCategories;

    const renderProductCard = (product: ProductData, index: number) => {
        return <a key={"product-" + index} className="product-link" href={"/products/" + product.productId}>
            <article className="product-card">
                <div className="product-card-img-wrapper">
                    <div className="product-card-img">
                        <img src={product.image.src} alt={product.image.altText}/>
                    </div>
                </div>
                <div className="flex-vertical-center">
                    <div className="product-card-info">
                        <div className="product-price">{product.price}</div>
                        <div className="product-name">{product.fullName}</div>
                    </div>
                </div>
            </article>
        </a>
    }

    return (
        <div>
            <Suspense
                fallback={<Preloader text={"Loading new products..."}/>}
            >
                <Await
                    resolve={productCategories.newProducts}
                    errorElement={<LoadingError text={"Error loading new products!"}/>}
                >
                    {(newProducts: ProductData[]) => (
                        <section className="product-card-group">
                            <h2 className="product-card-group-name">Новые поступления</h2>
                            <div className="products-card-line">
                                {newProducts.map((product, index) => renderProductCard(product, index))}
                            </div>
                        </section>
                    )}
                </Await>
            </Suspense>
            <Suspense
                fallback={<Preloader text={"Loading discount products..."}/>}
            >
                <Await
                    resolve={productCategories.discountProducts}
                    errorElement={<LoadingError text={"Error loading discount products!"}/>}
                >
                    {(discountProducts: ProductData[]) => (
                        <section className="product-card-group">
                            <h2 className="product-card-group-name">Скидки и акции</h2>
                            <div className="products-card-line">
                                {discountProducts.map((product, index) => renderProductCard(product, index))}
                            </div>
                        </section>
                    )}
                </Await>
            </Suspense>
        </div>
    )
}

export default MainComponent;
