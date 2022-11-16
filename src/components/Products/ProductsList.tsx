import { Grid, Typography } from '@mui/material'
import React from 'react'
import ProductListItem from './ProductListItem'
import productsArray from './productsArray'

type ProductProps = {
    id: number
    name: string
    description: string
    type: string
    size: number
    price: number
    image: string
}

type Props = {
    addProductsToCart: (count: number, price: number) => void
}

const ProductsList = ({ addProductsToCart }: Props) => {
    return (
        <>
            <Typography
                align="center"
                variant="h4"
                sx={{
                    margin: '25px 0',
                    textTransform: 'uppercase',
                }}
            >
                Products List
            </Typography>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
                {productsArray.map(
                    ({
                        id,
                        name,
                        description,
                        type,
                        size,
                        price,
                        image,
                    }: ProductProps) => (
                        <Grid item xs={12} sm={3} md={4} key={id}>
                            <ProductListItem
                                name={name}
                                description={description}
                                type={type}
                                size={size}
                                price={price}
                                image={image}
                                addProductsToCart={addProductsToCart}
                            />
                        </Grid>
                    )
                )}
            </Grid>
        </>
    )
}

export default ProductsList
