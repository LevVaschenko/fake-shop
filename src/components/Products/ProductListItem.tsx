import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import React, { Component } from 'react'
import './ProductListItem.scss'

type Props = {
    name: string
    description: string
    type: string
    size: number
    price: number
    image: string
}

class ProductListItem extends Component <Props> {
    render() {
        return (
            <Card className="product">
                <CardContent>
                    <div className="product-image">
                        <img src={this.props.image} alt="" />
                    </div>
                    <h4>{this.props.name}</h4>
                    <p className="product-description">
                        {this.props.description}
                    </p>
                    <div className="product-features">
                        <span>Type: </span>
                        {this.props.type}
                    </div>
                    <div className="product-features">
                        <span>Size: </span>
                        {this.props.size} GB
                    </div>
                    <div className="product-price">
                        Price: {this.props.price} $
                    </div>
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
}

export default ProductListItem
