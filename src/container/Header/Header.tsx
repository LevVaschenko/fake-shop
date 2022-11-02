import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Menu from 'components/Menu/Menu'
import CartHeader from 'components/Cart/CartHeader'
import logo from 'assets/logo.svg'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <AppBar position="static">
                <Container maxWidth="lg">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            <img src={logo} />
                        </Typography>
                        <Menu />
                        <CartHeader />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Header
