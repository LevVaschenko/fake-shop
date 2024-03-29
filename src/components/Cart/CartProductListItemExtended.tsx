import { Button, Card, CardContent, Grid } from '@mui/material'
import { Product } from 'components/Products/productsArray'
import './CartProductListItemExtended.scss'
import DeleteIcon from '@mui/icons-material/Delete'
import Quantity from 'components/Quantity/Quantity'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { addLike, removeLike } from 'redux/likeReducer'
import { removeProductFromCart, changeProductQuantity } from 'redux/cartReducer'

type Props = {
    product: Product
    productCount: number
}

const CartProductListItemExtended = ({ product, productCount }: Props) => {
    const isLiked = useAppSelector(
        (state) => state.productsLikeState[product.id]
    )

    const dispatch = useAppDispatch()

    return (
        <Grid
            item
            xs={12}
            sm={4}
            sx={{
                margin: '40px 0',
            }}
        >
            <Card>
                <CardContent>
                    <Button
                        variant="outlined"
                        onClick={() =>
                            isLiked
                                ? dispatch(removeLike(product.id))
                                : dispatch(addLike(product.id))
                        }
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div>{product.name}</div>
                    <p>Price for one item: {product.price}</p>
                    <p>Count: {productCount}</p>
                    <Quantity
                        minCount={0}
                        onDecrementClick={() => {
                            productCount === 1
                                ? dispatch(removeProductFromCart(product.id))
                                : dispatch(
                                      changeProductQuantity({
                                          id: product.id,
                                          count: productCount - 1,
                                      })
                                  )
                        }}
                        onIncrementClick={() =>
                            dispatch(
                                changeProductQuantity({
                                    id: product.id,
                                    count: productCount + 1,
                                })
                            )
                        }
                        count={productCount}
                    />
                    <Button
                        style={{
                            marginLeft: '4px',
                        }}
                        variant="contained"
                        onClick={() =>
                            dispatch(removeProductFromCart(product.id))
                        }
                    >
                        <DeleteIcon />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
