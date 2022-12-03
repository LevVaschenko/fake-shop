import { Button, Card, CardActions, CardContent } from '@mui/material'
import Quantity from 'components/Quantity/Quantity'
import { useState } from 'react'
import './ProductListItem.scss'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'

type Props = {
    id: number
    name: string
    description: string
    type: string
    size: number
    price: number
    image: string
    addProductsToCart: (id: number, count: number) => void
}

const ProductListItem = ({
    id,
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

    const isLiked = useAppSelector((state) => state.productsLikeState[id])

    const dispatch = useAppDispatch()

    return (
        <Card className="product">
            <CardContent>
                <Button
                    variant="outlined"
                    onClick={() =>
                        isLiked
                            ? dispatch(removeLike(id))
                            : dispatch(addLike(id))
                    }
                >
                    {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
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
                <Quantity
                    onDecrementClick={onDecrementClick}
                    onIncrementClick={onIncrementClick}
                    count={count}
                />
            </CardContent>
            <CardActions className="button-wrap">
                <Button
                    variant="contained"
                    onClick={() => addProductsToCart(id, count)}
                >
                    Add to cart
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductListItem
