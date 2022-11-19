import { Container } from '@mui/system'
import AboutPage from 'pages/About/AboutPage'
import CartPage from 'pages/Cart/CartPage'
import Home from 'pages/Home/Home'
import PaymentPage from 'pages/Payment/PaymentPage'
import ShippingPage from 'pages/Shipping/ShippingPage'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

type Props = {
    addProductsToCart: (id: number, count: number) => void
    productsInCart: {
        [id: number]:number
    }
}

const Main = ({ addProductsToCart, productsInCart }: Props) => {
    return (
        <main>
            <Container maxWidth="lg">
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductsToCart={addProductsToCart} />}
                    />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="shipping" element={<ShippingPage />} />
                    <Route path="payment" element={<PaymentPage />} />
                    <Route path="cart" element={<CartPage productsInCart={productsInCart}/>} />
                </Routes>
            </Container>
        </main>
    )
}

export default Main
