import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import React, { useState } from 'react'
import './ProductListItem.scss'

type Props = {
    name: string
    description: string
    type: string
    size: number
    price: number
    image: string
    addProductsToCart: (count: number, price: number) => void
}

const ProductListItem = ({
    name,
    description,
    type,
    size,
    price,
    image,
    addProductsToCart,
}: Props) => {
    const [count, setCount] = useState<number>(1)
    const [color, setColor] = useState<string>('Green')

    const onIncrementClick = () =>
        setCount((prevState: number) => prevState + 1)

    const onDecrementClick = () =>
        setCount((prevState: number) => prevState - 1)

    const changeColor = () =>
        setColor((prevState: string) =>
            prevState === 'Green' ? 'Red' : 'Green'
        )

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
                <div>
                    <p className="color">Color: {color}</p>
                    <button
                        onClick={changeColor}
                        className="change-color-button"
                    >
                        Change Color
                    </button>
                </div>
                <div className="product-quantity">
                    <Button
                        variant="contained"
                        size="medium"
                        onClick={onDecrementClick}
                        disabled={count <= 1}
                    >
                        -
                    </Button>
                    <TextField size="small" value={count} />
                    <Button
                        variant="contained"
                        size="medium"
                        onClick={onIncrementClick}
                        disabled={count >= 5}
                    >
                        +
                    </Button>
                </div>
            </CardContent>
            <CardActions className="button-wrap">
                <Button
                    variant="contained"
                    onClick={() => addProductsToCart(count, price)}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
