import ProductsList from 'components/Products/ProductsList'
import React from 'react'

type Props = {
    addProductsToCart: (id: number, count: number) => void
}

const Home = ({ addProductsToCart }: Props) => {
    return (
        <>
            <ProductsList addProductsToCart={addProductsToCart} />
        </>
    )
}

export default Home
