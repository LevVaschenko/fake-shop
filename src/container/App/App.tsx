import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from 'container/Main/Main'
import Footer from 'container/Footer/Footer'
import { StyledEngineProvider } from '@mui/material'
import { omit } from 'lodash'

type Props = {}

type AppProps = {
    [id: number]: number
}

const App = (props: Props) => {
    const [productsInCart, setProductsInCart] = useState<AppProps>({
        1: 0,
        2: 0,
    })

    const addProductToCart = (id: number, count: number) => {
        setProductsInCart((prevState: AppProps) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductsInCart((prevState: AppProps) => omit(prevState, id))
    }

    const changeProductQuantity = (id: number, count: number) => {
        setProductsInCart((prevState: AppProps) => ({
            ...prevState,
            [id]: count,
        }))
    }

    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main
                addProductsToCart={addProductToCart}
                productsInCart={productsInCart}
                removeProductFromCart={removeProductFromCart}
                changeProductQuantity={changeProductQuantity}
            />
            <Footer />
        </StyledEngineProvider>
    )
}

export default App
