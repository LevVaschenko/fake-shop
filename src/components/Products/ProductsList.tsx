import { Typography } from '@mui/material'
import React from 'react'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <Typography
            align="center"
            variant="h4"
            style={{
                margin: '25px 0',
                textTransform: 'uppercase'
            }}
        >
            ProductList
        </Typography>
    )
}

export default ProductsList
