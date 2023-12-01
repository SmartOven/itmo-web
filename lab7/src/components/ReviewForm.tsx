import React, {ChangeEvent, FormEvent, useState} from "react";

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
    const [username, setUsername] = useState("");
    const [rating, setRating] = useState(1);
    const [text, setText] = useState("");

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleRatingChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRating(parseInt(event.target.value, 10));
    };

    const handleReviewTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        const timestamp = new Date().toISOString()
            .replace('T', ' ')
            .replace('Z', '')
            .split('.')[0]
        onSubmit({productId, username, rating, text, timestamp});
        setUsername("")
        setText("")
    };

    return (
        <form onSubmit={handleSubmit}>
            <p>Форма добавления отзыва:</p>
            <label>
                Имя пользователя:
                <input type="text" value={username} onChange={handleUsernameChange}/>
            </label>
            <br/>
            <label>
                Оценка:
                {[1, 2, 3, 4, 5].map((value) => (
                    <React.Fragment key={value}>
                        <input
                            type="radio"
                            value={value.toString()}
                            checked={rating === value}
                            onChange={handleRatingChange}
                        />
                        {value}
                    </React.Fragment>
                ))}
            </label>
            <br/>
            <label>
                Текст отзыва:
                <textarea value={text} onChange={handleReviewTextChange}/>
            </label>
            <br/>
            <button type="submit">Добавить отзыв</button>
        </form>
    );
};

export default ReviewForm;
