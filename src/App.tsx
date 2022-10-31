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
        <>
            <ul>
                <li>123</li>
                <li>456</li>
                <li>789</li>
            </ul>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                distinctio, id ad totam aperiam enim fuga quasi libero nostrum
                architecto ipsum? A adipisci architecto fugit ab quam? Incidunt,
                ipsa sapiente!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                distinctio, id ad totam aperiam enim fuga quasi libero nostrum
                architecto ipsum? A adipisci architecto fugit ab quam? Incidunt,
                ipsa sapiente!
            </p>
        </>
    )
}

// React Component
const Title = () => <h1>Hello React Component</h1>

type TitleProps = {
    title: string
    text: string
    num: number
}
const TitleApp = (props: TitleProps) => {
    return (
        <>
            <h1>
                {props.text} {props.title}
            </h1>
            {props.num}
        </>
    )
}

function App() {
    return (
        <div className="App">
            <Title />
            <TitleApp title="App.js" text="Hi" num={10} />
            <TitleApp title="Test.js" text="Hello" num={25} />
            <List />
        </div>
    )
}

export default App
