import ProductsList from 'components/Products/ProductsList'
import React from 'react'

type Props = {
    addProductsToCart:(count:number, price: number) => void
}

const Home = ({addProductsToCart}: Props) => {
    return (
        <>
            <ProductsList addProductsToCart={addProductsToCart}/>
        </>
    )
}

export default Home
