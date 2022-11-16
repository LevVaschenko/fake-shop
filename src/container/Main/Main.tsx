import { Container } from '@mui/system'
import Home from 'pages/Home/Home'
import React from 'react'

type Props = {
    addProductsToCart: (count: number, price: number) => void
}

const Main = ({ addProductsToCart }: Props) => {
    return (
        <main>
            <Container maxWidth="lg">
                <Home addProductsToCart={addProductsToCart} />
            </Container>
        </main>
    )
}

export default Main
