import { Container } from '@mui/system'
import Home from 'pages/Home/Home'
import React from 'react'

type Props = {}

const Main = (props: Props) => {
    return (
        <main>
            <Container maxWidth="lg">
                <Home />
            </Container>
        </main>
    )
}

export default Main
