import React from "react";
import "../styles/MainComponent.css"
import {ProductCategories, ProductData} from "../features/constants.ts";
import {useLoaderData} from "react-router-dom";

const MainComponent: React.FC = () => {
    const productCategories: ProductCategories = useLoaderData() as ProductCategories;
    const newProducts: ProductData[] = productCategories.newProducts;
    const discountProducts: ProductData[] = productCategories.discountProducts;

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
            <section className="product-card-group">
                <h2 className="product-card-group-name">Новые поступления</h2>
                <div className="products-card-line">
                    {newProducts.map((product, index) => renderProductCard(product, index))}
                </div>
            </section>
            <section className="product-card-group">
                <h2 className="product-card-group-name">Скидки и акции</h2>
                <div className="products-card-line">
                    {discountProducts.map((product, index) => renderProductCard(product, index))}
                </div>
            </section>
        </div>
    )
}

export default MainComponent;
