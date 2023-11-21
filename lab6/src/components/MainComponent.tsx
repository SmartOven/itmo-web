import React, {useEffect, useState} from "react";
import "../styles/MainComponent.css"
import axios from "axios";
import {ProductData} from "../features/constants.ts";

const MainComponent: React.FC = () => {
    const [newProducts, setNewProducts] = useState<ProductData[]>([]);
    const [discountProducts, setDiscountProducts] = useState<ProductData[]>([]);

    useEffect(() => {
        const fetchData = async (path: string) => {
            try {
                return await axios.get<ProductData[]>(path);
            } catch (error) {
                console.error('Error loading JSON file ' + path, error);
            }
        };

        fetchData('/new_products.json').then(response => {
            setNewProducts(response === undefined ? [] : response.data)
        });
        fetchData('/discount_products.json').then(response => {
            setDiscountProducts(response === undefined ? [] : response.data)
        });
    }, []);

    const renderProductCard = (product: ProductData, index: number) => {
        return <a key={"product-" + index} className="product-link" href={"/products/" + product.id}>
            <article className="product-card">
                <div className="product-card-img-wrapper">
                    <div className="product-card-img">
                        <img src={product.image.src} alt={product.image.altText}/>
                    </div>
                </div>
                <div className="flex-vertical-center">
                    <div className="product-info">
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
