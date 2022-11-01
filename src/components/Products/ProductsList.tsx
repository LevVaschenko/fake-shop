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
                <Grid item>
                    <ProductListItem />
                </Grid>
            </Grid>
        </>
    )
}

export default ProductsList
