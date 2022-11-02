import { Grid, Typography } from '@mui/material'
import React from 'react'
import ProductListItem from './ProductListItem'
import productsArray from './productsArray'

type Props = {}

const ProductsList = (props: Props) => {
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
                {productsArray.map((product) => (
                    <Grid item xs={12} sm={3} md={4}>
                        <ProductListItem
                            name={product.name}
                            description={product.description}
                            type={product.type}
                            size={product.size}
                            price={product.price}
                        />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ProductsList
