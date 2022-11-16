import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import { StyledEngineProvider } from '@mui/material'

type Props = {}

type CartData = {
    totalCount: number
    totalPrice: number
}

const App = (props: Props) => {
    const [cartData, setCartData] = useState<CartData>({
        totalCount: 0,
        totalPrice: 0,
    })

    const addProductToCart = (count: number, price: number) => {
        setCartData((prevState: CartData) => ({
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + count * price,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header cartData={cartData} />
            <Main addProductsToCart={addProductToCart} />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
