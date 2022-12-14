import React from 'react' /* здесь я прописал tsrafce */
import CssBaseline from '@mui/material/CssBaseline'
import Header from 'container/Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'

type Props = {}

const App = (props: Props) => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default App