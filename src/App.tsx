import React from 'react'

// React Element
// const title = <h1>Hello React.js</h1>

const list = (
    <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
    </ul>
)

const List = () => {
    return (
        <ul>
            <li>123</li>
            <li>456</li>
            <li>789</li>
        </ul>
    )
}

// React Component
const Title = () => <h1>Hello React Component</h1>

function App() {
    return (
        <div className="App">
            <Title />
            <List />
            {list} {10 + 5}
        </div>
    )
}

export default App
