import React, {Fragment} from "react";
import "../../styles/product/ReviewForm.css"
import {useFormik} from "formik";

export interface ReviewDto {
    productId: string
    username: string
    rating: number
    text: string
    timestamp: string
}

interface ReviewFormProps {
    onSubmit: (review: ReviewDto) => void
    productId: string
}

const ReviewForm: React.FC<ReviewFormProps> = ({onSubmit, productId}) => {
    const initialReviewDto: ReviewDto = {
        productId: productId,
        username: "",
        rating: 0,
        text: "",
        timestamp: "",
    }
    const onCreateReview = async (reviewDto: ReviewDto) => {
        reviewDto.timestamp = new Date().toISOString()
            .replace('T', ' ')
            .replace('Z', '')
            .split('.')[0]
        onSubmit(reviewDto)
    }
    const formik = useFormik({
        initialValues: initialReviewDto,
        onSubmit: onCreateReview,
    });
    return (
        <div className="review-form">
            <form className="register-form" onSubmit={formik.handleSubmit}>
                <div className="input-with-label">
                    <label htmlFor="username-input" className="review-field-label">
                        Представьтесь:
                    </label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Имя или никнейм"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                    />
                </div>
                <div className="input-with-label">
                    <div className="flex-vertical-center review-field-label">
                        Оцените товар:
                    </div>
                    <div className="stars-line">
                        {[1, 2, 3, 4, 5].map((value) => (
                            <Fragment key={value}>
                                <input
                                    className="star-radio-button"
                                    type="radio"
                                    id={`star${value}`}
                                    name="rating"
                                    value={value.toString()}
                                    checked={formik.values.rating === value}
                                    onChange={formik.handleChange}
                                />
                                <label htmlFor={`star${value}`} className="star">
                                    {value <= formik.values.rating ? "⭐" : "☆"}
                                </label>
                            </Fragment>
                        ))}
                    </div>
                </div>
                <div>
                        <textarea
                            className="review-text"
                            id="text"
                            name="text"
                            placeholder="Текст вышего отзыва"
                            value={formik.values.text}
                            onChange={formik.handleChange}
                        />
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
};

export default ReviewForm;
