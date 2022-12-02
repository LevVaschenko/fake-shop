import ProductsList from 'components/Products/ProductsList'
import Reviews from 'components/Reviews/Reviews'
import React from 'react'

type Props = {
    addProductsToCart: (id: number, count: number) => void
}

const Home = ({ addProductsToCart }: Props) => {
    return (
        <>
            <ProductsList addProductsToCart={addProductsToCart} />
            <Reviews />
        </>
    )
}

export default Home
