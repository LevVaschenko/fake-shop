import { Button, Card, CardActions, CardContent } from '@mui/material'
import React from 'react'
import classes from './ProductListItem.module.css'

type Props = {
    name: string
    description: string
    type: string
    size: number
    price: number
}

const ProductListItem = (props: Props) => {
    return (
        <Card>
            <CardContent>
                <h4>{props.name}</h4>
                <p>{props.description}</p>
                <div>Type: {props.type}</div>
                <div>Size: {props.size} GB</div>
                <div>Price: {props.price} $</div>
            </CardContent>
            <CardActions className={`${classes['button-wrap']}`}>
                <Button variant="contained">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
