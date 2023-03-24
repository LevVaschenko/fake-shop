import {
    Button,
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'
import './Reviews.scss'

type Props = {}

type Review = {
    name: string
    text: string
}

const Reviews = (props: Props) => {
    const arrReviews: Review[] = [
        {
            name: 'Ava',
            text: "I am very happy with my purchase at this store! Here I found my favorite iPhone at a great price, and it was the best purchase of my life! In addition, the store provided fast delivery and quality service, which caused only positive emotions",
        },
        {
            name: 'Stan Woods',
            text: "Thank you for the wonderful service and excellent selection of iPhones in your store! I was pleasantly surprised with the quick delivery and high quality of the product. Great store for those who want to buy a quality iPhone at an affordable price. I recommend it!",
        },
    ]

    const [reviews, setReviews] = useState<Review[]>(arrReviews)

    const [newReview, setNewReview] = useState<Review>({ name: '', text: '' })

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewReview((prevState: Review) => ({
            ...prevState,
            text: e.target.value,
        }))
    }

    const onSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (newReview.name === '' || newReview.text === '') {
            alert('All fields are required')
        } else {
            setReviews((prevState: Review[]) => {
                return [...prevState, newReview]
            })
            setNewReview({
                name: '',
                text: '',
            })
        }
    }

    return (
        <>
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    marginTop: '40px',
                    marginBottom: '0px',
                }}
            >
                Reviews
            </Typography>
            {reviews.map(({ name, text }: Review, i) => (
                <Card
                    sx={{
                        margin: '20px 0',
                    }}
                    key={i}
                >
                    <CardContent>
                        <div className='reviews-name'>{name}</div>
                        <div>{text}</div>
                    </CardContent>
                </Card>
            ))}
            <form onSubmit={onSend} className="review-form">
                <Typography variant="h5" className='leave-review'>Please leave a review</Typography>
                <div>
                    <div className="review-prompt">
                        Your Name
                    </div>
                    <input
                        type="text"
                        value={newReview.name}
                        onChange={handleChangeName}
                        className="review-text-input review-name"
                    />
                </div>
                <div>
                    <div className="review-prompt">
                        Your Message
                    </div>
                    <TextareaAutosize
                        minRows={5}
                        placeholder="Your Message"
                        value={newReview.text}
                        onChange={handleChangeText}
                        className="review-text-input"
                    />
                </div>
                <button type="submit" className="review-send-button">
                    Send
                </button>
            </form>
        </>
    )
}

export default Reviews
