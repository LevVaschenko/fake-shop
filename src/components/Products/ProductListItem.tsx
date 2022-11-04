import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import React from 'react'
import './ProductListItem.scss'

type Props = {
    name: string
    description: string
    type: string
    size: number
    price: number
    image: string
}

const ProductListItem = ({
    name,
    description,
    type,
    size,
    price,
    image,
}: Props) => {
    return (
        <Card className="product">
            <CardContent>
                <div className="product-image">
                    <img src={image} alt="" />
                </div>
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
                <div className="product-quantity">
                    <Button variant="contained" size="medium">
                        -
                    </Button>
                    <TextField size="small" value="1" />
                    <Button variant="contained" size="medium">
                        +
                    </Button>
                </div>
            </CardContent>
            <CardActions className="button-wrap">
                <Button variant="contained">Add to cart</Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
