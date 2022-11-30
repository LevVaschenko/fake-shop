import { Card, CardContent, Grid } from '@mui/material'
import { Product } from 'components/Products/productsArray'
import './CartProductListItemExtended.scss'

type Props = {
    product: Product
    productCount: number
}

const CartProductListItemExtended = ({ product, productCount }: Props) => {
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
                    <div className="product-image">
                        <img src={product.image} alt="" />
                    </div>
                    <div>{product.name}</div>
                    <p>Price for one item: {product.price}</p>
                    <p>Count: {productCount}</p>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default CartProductListItemExtended
