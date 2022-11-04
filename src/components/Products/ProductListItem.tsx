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

type State = {
    count: number
}

class ProductListItem extends Component<Props, State> {
    // constructor(props: Props) {
    //     super(props)
    //     this.onIncrementClick = this.onIncrementClick.bind(this)
    //     this.onDecrementClick = this.onDecrementClick.bind(this)
    // }

    state = {
        count: 1,
    }

    onIncrementClick() {
        this.setState((prevState: State) => ({
            count: prevState.count + 1,
        }))
    }

    onDecrementClick() {
        this.setState((prevState: State) => ({
            count: prevState.count - 1,
        }))
    }

    render() {
        const { name, description, type, size, price, image }: Props =
            this.props
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
                        <Button
                            variant="contained"
                            size="medium"
                            onClick={() => this.onDecrementClick()}
                        >
                            -
                        </Button>
                        <TextField size="small" value={this.state.count} />
                        <Button
                            variant="contained"
                            size="medium"
                            onClick={() => this.onIncrementClick()}
                        >
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
