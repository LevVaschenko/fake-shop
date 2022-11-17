import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import { StyledEngineProvider } from '@mui/material'

type Props = {}

type AppProps = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<AppProps>({
        1: 5,
        2: 5
    })

    const addProductToCart = (count: number, price: number) => {
        // setCartData((prevState: CartData) => ({
        //     totalCount: prevState.totalCount + count,
        //     totalPrice: prevState.totalPrice + count * price,
        // }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main addProductsToCart={addProductToCart} />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
