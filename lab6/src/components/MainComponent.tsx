import React, {useEffect, useState} from "react";
import "../styles/MainComponent.css"
import axios from "axios";

interface Product {
    id: string;
    image: {
        src: string;
        altText: string;
    }
    price: string;
    fullName: string;
}

const MainComponent: React.FC = () => {
    const [newProducts, setNewProducts] = useState<Product[]>([]);
    const [discountProducts, setDiscountProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchData = async (path: string) => {
            try {
                return await axios.get<Product[]>(path);
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

    const renderProduct = (product: Product, index: number) => {
        return <article key={"product-" + index} className="product">
            <div className="product-img-wrapper">
                <div className="product-img">
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
    }

    return (
        <div>
            <section className="product-group">
                <h2 className="product-group-name">Новые поступления</h2>
                <div className="products-line">
                    {newProducts.map((product, index) => renderProduct(product, index))}
                </div>
            </section>
            <section className="product-group">
                <h2 className="product-group-name">Скидки и акции</h2>
                <div className="products-line">
                    {discountProducts.map((product, index) => renderProduct(product, index))}
                </div>
            </section>
        </div>
    )
}

export default MainComponent;
