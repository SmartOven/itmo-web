import React, {useEffect, useState} from "react";
import "../styles/MainComponent.css"
import {ProductData} from "../features/constants.ts";
import {executeFetch, RequestMethod} from "../features/fetch.ts";

const MainComponent: React.FC = () => {
    const [newProducts, setNewProducts] = useState<ProductData[]>([]);
    const [discountProducts, setDiscountProducts] = useState<ProductData[]>([]);

    useEffect(() => {
        const fetchProductsByTag = async (tag: string): Promise<ProductData[]> => {
            const response = await executeFetch('/api/product/data/findAllByTag?tag=' + tag, RequestMethod.GET);
            if (!response.ok) {
                console.error("Couldn't fetch products with tag=" + tag);
                return [];
            }
            return await response.json() as ProductData[]
        }

        fetchProductsByTag('new').then(response => {
            setNewProducts(response === undefined ? [] : response)
        });
        fetchProductsByTag('discount').then(response => {
            setDiscountProducts(response === undefined ? [] : response)
        });
    }, []);

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
