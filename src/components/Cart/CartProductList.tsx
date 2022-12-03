import { keys } from 'lodash'
import { getProductsObject, Product } from 'components/Products/productsArray'
import CartProductListItem from './CartProductListItem'
import { useAppSelector } from 'redux/hooks'

type ProductsObject = {
    [key: number]: Product
}

type Props = {
    productsInCart: {
        [id: number]: number
    }
    CartItem?: any
}

const CartProductList = ({
    productsInCart,
    CartItem = CartProductListItem,
}: Props) => {
    const productsArray = useAppSelector((state) => state.products)
    const productsObject: ProductsObject = getProductsObject(productsArray)

    if (productsArray.length === 0) {
        return null
    } else {
        return (
            <>
                {keys(productsInCart).map((productId) => (
                    <CartItem
                        key={productId}
                        product={productsObject[parseInt(productId)]}
                        productCount={productsInCart[parseInt(productId)]}
                    />
                ))}
            </>
        )
    }
}

export default CartProductList
