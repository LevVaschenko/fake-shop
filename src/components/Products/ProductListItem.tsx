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

const ProductListItem = (props: Props) => {
    return (
        <Card className="product">
            <CardContent>
                <h4>{props.name}</h4>
                <p className='product-description'>{props.description}</p>
                <div className="product-features">
                    <span>Type: </span>
                    {props.type}
                </div>
                <div className="product-features">
                    <span>Size: </span>
                    {props.size} GB
                </div>
                <div className="product-price">Price: {props.price} $</div>
            </CardContent>
            <CardActions className="button-wrap">
                <Button variant="contained">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
