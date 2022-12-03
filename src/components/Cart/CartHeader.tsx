import CartTotal from './CartTotal'
import CartProductList from './CartProductList'
import { useAppSelector } from 'redux/hooks'

type ProductsInCartProps = {
    productsInCart: {
        [id: number]: number
    }
}

const CartHeader = () => {
    const productsInCart = useAppSelector((state: ProductsInCartProps) => state.productsInCart)

    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}

export default CartHeader
