import React from 'react'

type Props = {
    totalCount: number
    totalPrice: number
}

const CartHeader = ({ totalCount, totalPrice }: Props) => {
    return (
        <div>
            <div>{totalCount}</div>
            <div>{totalPrice}$</div>
        </div>
    )
}

export default CartHeader
