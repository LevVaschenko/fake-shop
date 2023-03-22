import { Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import './CheckoutPage.scss'

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
        
        if (!orderData.name || !orderData.address) {
            alert('All fields are required')
            return
        }
        
        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: orderData.name,
                    address: orderData.address,
                }
            )
            .then((res) => res.data)
            .then(({ name, address }) => {
                setOrderData({
                    name,
                    address,
                })
                setIsOrderSend(true)
            })
    }

    const renderForm = () => {
        return (
            <form onSubmit={orderSend} className="form" noValidate>
                <div>
                    <div className='form-prompt'>
                        Name*
                    </div>
                    <input
                        type="text"
                        value={orderData.name}
                        onChange={handleName}
                        className='form-your-name form-input'
                        required
                    />
                </div>
                <div>
                    <div className='form-prompt'>
                        Address*
                    </div>
                    <input
                        type="text"
                        value={orderData.address}
                        onChange={handleAddress}
                        className='form-your-address form-input'
                        required
                    />
                </div>
                <button type="submit" className="send-button">
                    Send
                </button>
            </form>
        )
    }

    const renderMessage = () => {
        return (
            <div>
                <div>Dear, {orderData.name}, thanks for your order!</div>
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
