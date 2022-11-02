import { Button, Card, CardActions, CardContent } from '@mui/material'
import React from 'react'
import './ProductListItem.scss'

type Props = {
    name: string
    description: string
    type: string
    size: number
    price: number
}

const ProductListItem = ({ name, description, type, size, price }: Props) => {
    return (
        <Card className="product">
            <CardContent>
                <h4>{name}</h4>
                <p className="product-description">{description}</p>
                <div className="product-features">
                    <span>Type: </span>
                    {type}
                </div>
                <div className="product-features">
                    <span>Size: </span>
                    {size} GB
                </div>
                <div className="product-price">Price: {price} $</div>
            </CardContent>
            <CardActions className="button-wrap">
                <Button variant="contained">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
