import { useState } from "react"
import Form from "./Form"
import List from "./List"

const App = () => {
    const [todos, setTodos] = useState([
        {
            content: '課題をする'
        },
        {
            content: '洗濯をする'
        },
        {
            content: '電話をする'
        }
    ])
    return (
        <>
            <h1>Todo App</h1>
            <Form setTodos={setTodos} todos={todos} />
            <List todos={todos} />
        </>
    )
}

export default App