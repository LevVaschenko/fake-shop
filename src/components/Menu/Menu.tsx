import React from 'react'
import Button from '@mui/material/Button'
import { NavLink } from 'react-router-dom'
import './Menu.scss'

type Props = {}

const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'nav-active' : 'nav-item'
                    }
                >
                    Home
                </NavLink>
            </Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Shipping</Button>
            <Button color="inherit">Payment</Button>
            <Button color="inherit">
                <NavLink
                    to="/cart"
                    className={({ isActive }) =>
                        isActive ? 'nav-active' : 'nav-item'
                    }
                >
                    Cart
                </NavLink>
            </Button>
        </>
    )
}

export default Menu
