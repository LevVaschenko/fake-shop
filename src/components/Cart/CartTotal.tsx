import { keys } from 'lodash'
import { getProductsObject, Product } from 'components/Products/productsArray'
import { useAppSelector } from 'redux/hooks'

type ProductsObject = {
    [key: number]: Product
}

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [key: number]: Product
    }
}

const CartTotal = ({ productsInCart }: Props) => {
    const productsArray = useAppSelector((state) => state.products)
    const productsObject: ProductsObject = getProductsObject(productsArray)
    if (productsArray.length === 0) {
        return null
    } else {
        return (
            <div>
                Total:{' '}
                {keys(productsInCart).reduce(
                    (sum, productId) =>
                        sum +
                        productsObject[parseInt(productId)].price *
                            productsInCart[parseInt(productId)],
                    0
                )}{' '}
                $
            </div>
        )
    }
}

export default CartTotal
