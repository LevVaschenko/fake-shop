import { Container } from '@mui/system'
import CartPage from 'pages/Cart/CartPage'
import Home from 'pages/Home/Home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

type Props = {
    addProductsToCart: (id: number, count: number) => void
}

const Main = ({ addProductsToCart }: Props) => {
    return (
        <main>
            <Container maxWidth="lg">
                <Routes>
                    <Route
                        path="/"
                        element={<Home addProductsToCart={addProductsToCart} />}
                    />
                    <Route path="cart" element={<CartPage />} />
                </Routes>
            </Container>
        </main>
    )
}

export default Main
