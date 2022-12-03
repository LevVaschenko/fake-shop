import { Container } from '@mui/system'
import AboutPage from 'pages/About/AboutPage'
import CartPage from 'pages/Cart/CartPage'
import Home from 'pages/Home/Home'
import PaymentPage from 'pages/Payment/PaymentPage'
import ShippingPage from 'pages/Shipping/ShippingPage'
import { Route, Routes } from 'react-router-dom'

const Main = () => {
    return (
        <main>
            <Container maxWidth="lg">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="shipping" element={<ShippingPage />} />
                    <Route path="payment" element={<PaymentPage />} />
                    <Route path="cart" element={<CartPage />} />
                </Routes>
            </Container>
        </main>
    )
}

export default Main
