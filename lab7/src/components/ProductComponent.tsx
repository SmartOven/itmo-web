import React from "react";
import {useLoaderData} from "react-router-dom";
import {Product} from "../features/constants.ts";
import "../styles/ProductComponent.css"

const ProductComponent: React.FC = () => {
    const product: Product = useLoaderData() as Product;
    const productData = product.productData;
    const reviews = product.reviews;
    return (
        <div>
            <div className="product">
                <div className="product-img-wrapper">
                    <div className="product-img">
                        <img src={productData.image.src} alt={productData.image.altText}/>
                    </div>
                </div>
                <div className="product-info">
                    <div className="flex-vertical-center">
                        <div className="product-name">{productData.fullName}</div>
                    </div>
                    <div className="flex-vertical-center">
                        <div className="product-price">{productData.price}</div>
                    </div>
                </div>
            </div>
            {/*TODO Добавить возможность добавлять отзывы*/}
            <div>write review form</div>
            <div className="reviews-list">
                {reviews.length == 0 && <div className="zero-reviews">На этот товар еще нет отзывов</div>}
                {reviews.map((review, index) => (
                    <div key={"review" + index} className="review">
                        <div className="username">{review.username}</div>
                        <div className="rating">{"⭐".repeat(review.rating) + "☆".repeat(5 - review.rating)}</div>
                        <div className="text">{review.text}</div>
                        <div>{review.timestamp}</div>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default ProductComponent;
