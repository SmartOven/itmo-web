import React, {Fragment} from "react";
import "../../styles/product/ReviewForm.css"
import {FormikState, useFormik} from "formik";

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
    // Используем хук useFormik, передаем туда параметры initialValues: T и onSubmit: (T t) => void
    const formik = useFormik({
        initialValues: initialReviewDto,
        onSubmit: async (values, {resetForm}) => {
            await onCreateReview(values)
            // Используем resetForm(initialData: Partial<FormikState<T>>)
            // чтобы обновить данные в форме до изначальных при нажатии submit-кнопки
            resetForm(initialReviewDto as Partial<FormikState<ReviewDto>>)
        },
    });
    return (
        <div className="review-form">
            <div className="review-form-header">Напишите отзыв на товар</div>
            {/* formik сделает за нас все манипуляции по обновлению данных в форме */}
            {/* formik.values содержит все значения, которые в данный момент переданы в форму */}
            {/* formik.handleChange будет сохранять переданное в input/textarea значение по ключу указанному в name */}
            {/* Дока - https://formik.org/docs/overview */}
            <form className="register-form" onSubmit={formik.handleSubmit}>
                <div className="review-form-lines">
                    <div className="input-with-label">
                        <label htmlFor="username-input" className="review-field-label">
                            Представьтесь:
                        </label>
                        <input
                            className="username-input"
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
                </div>
                <input type="submit" value="Оставить отзыв"/>
            </form>
        </div>
    )
};

export default ReviewForm;
