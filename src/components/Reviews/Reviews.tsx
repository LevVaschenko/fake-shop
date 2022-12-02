import {
    Button,
    Card,
    CardContent,
    TextareaAutosize,
    TextField,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'

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
            <form onSubmit={onSend}>
                <Typography variant="h5">Please leave a review</Typography>
                <div
                    style={{
                        margin: '15px 0',
                    }}
                >
                    <TextField
                        size="small"
                        label="Your Name"
                        value={newReview.name}
                        onChange={handleChangeName}
                    />
                </div>
                <TextareaAutosize
                    minRows={5}
                    placeholder="Your Message"
                    value={newReview.text}
                    onChange={handleChangeText}
                />
                <div>
                    <Button type="submit" variant="outlined">
                        Send
                    </Button>
                </div>
            </form>
        </>
    )
}

export default Reviews
