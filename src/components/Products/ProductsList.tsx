import { Grid, Typography } from '@mui/material'
import React from 'react'
import ProductListItem from './ProductListItem'

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
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhone X"
                        description="This is iPhone X"
                        type="Phone"
                        size={64}
                        price={500}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhone XS"
                        description="This is iPhone XS"
                        type="Phone"
                        size={32}
                        price={300}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <ProductListItem
                        name="iPhone 12 Pro"
                        description="This is iPhone 12 Pro"
                        type="Phone"
                        size={128}
                        price={1000}
                    />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsList
