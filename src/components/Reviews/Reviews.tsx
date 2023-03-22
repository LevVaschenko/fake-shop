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
            text: "I am addicted to this chair! It was pretty easy to set up. Make sure you don't accidentally nail the back pillow to the thingy that holds the butt and the back pieces together",
        },
        {
            name: 'Stan Woods',
            text: "Chair looks as advertised, assembly took less than 10 min. The only drawback would be the way arm is mounted to the seat. It's a little weak.",
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
                    margin: '40px 0',
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
                        <div>{name}</div>
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
