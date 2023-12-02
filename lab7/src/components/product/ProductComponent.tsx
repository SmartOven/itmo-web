import React, {Suspense} from "react";
import {Await, useLoaderData} from "react-router-dom";
import {Product, ProductData, Review} from "../../features/constants.ts";
import "../../styles/product/ProductComponent.css"
import Preloader from "../Preloader.tsx";
import LoadingError from "../LoadingError.tsx";
import ReviewForm, {ReviewDto} from "./ReviewForm.tsx";
import {executeFetch, RequestMethod} from "../../features/fetch.ts";

const ProductComponent: React.FC = () => {
    const product: Product = useLoaderData() as Product;

    const renderProductData = (productData: ProductData) => {
        return <div className="product">
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
    }

    const renderReviews = (reviews: Review[]) => {
        return <div className="reviews-list">
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
    }

    const onCreateReview = async (reviewDto: ReviewDto) => {
        const response = await executeFetch("/api/product/review/create", RequestMethod.POST, reviewDto);
        if (!response.ok) {
            console.log(`Error while creating review with reviewDto=${reviewDto}`)
        }
    }

    return (
        <div className="content-margin">
            <Suspense fallback={<Preloader text={"Loading product data..."}/>}>
                <Await
                    resolve={product.productData}
                    errorElement={<LoadingError text={"Error loading product data!"}/>}
                >
                    {(productData: ProductData) => (
                        <div>
                            {renderProductData(productData)}
                            <ReviewForm onSubmit={onCreateReview} productId={productData.productId}/>
                        </div>
                    )}
                </Await>
            </Suspense>
            <Suspense fallback={<Preloader text={"Loading reviews..."}/>}>
                <Await
                    resolve={product.reviews}
                    errorElement={<LoadingError text={"Error loading reviews!"}/>}
                >
                    {(reviews: Review[]) => renderReviews(reviews)}
                </Await>
            </Suspense>
        </div>
    )
}

export default ProductComponent;
