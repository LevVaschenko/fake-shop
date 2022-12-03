import { Typography } from '@mui/material'
import React, { useState } from 'react'

type Props = {}

type Order = {
    name: string
    address: string
}

const CheckoutPage = (props: Props) => {
    const [isOrderSend, setIsOrderSend] = useState<boolean>(false)

    const [orderData, setOrderData] = useState<Order>({
        name: '',
        address: '',
    })

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState: Order) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState: Order) => ({
            ...prevState,
            address: e.target.value,
        }))
    }

    const orderSend = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // axios
        //     .post(
        //         'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
        //         {
        //             name: orderData.name,
        //             address: orderData.address,
        //         }
        //     )
        //     .then((res) => res.data)
        //     .then(({ name, address }) => {
        //         setOrderData({
        //             name,
        //             address,
        //         })
        //         setIsOrderSend(true)
        //     })
    }

    const renderForm = () => {
        return (
            <form onSubmit={orderSend}>
                <div>
                    <input
                        type="text"
                        value={orderData.name}
                        onChange={handleName}
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={orderData.address}
                        onChange={handleAddress}
                        placeholder="Your address"
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        )
    }

    const renderMessage = () => {
        return (
            <div>
                <div>Dear, {orderData.name} , thanks for you order!</div>
                <p>Address: {orderData.address}</p>
            </div>
        )
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
                Checkout Page
            </Typography>
            {isOrderSend ? renderMessage() : renderForm()}
        </>
    )
}

export default CheckoutPage
