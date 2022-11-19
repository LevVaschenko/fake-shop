import React from 'react'
import { keys } from 'lodash'
import productsArray, {
    getProductsObject,
    Product,
} from 'components/Products/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [key: number]: Product
    }
}

const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            <div>
                {keys(productsInCart).map((productId) => (
                    <div key={productId}>
                        {productsObject[parseInt(productId)].name}:{' '}
                        {productsInCart[parseInt(productId)]}
                    </div>
                ))}
            </div>
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
        </div>
    )
}

export default CartHeader
