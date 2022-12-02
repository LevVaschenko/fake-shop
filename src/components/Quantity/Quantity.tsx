import React from 'react'
import { Button, TextField } from '@mui/material'

type Props = {
    onDecrementClick?: () => void
    onIncrementClick?: () => void
    count: number
}

const Quantity = ({ onDecrementClick, onIncrementClick, count }: Props) => {
    return (
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
    )
}

export default Quantity
