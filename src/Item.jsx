import { useState } from "react";

const Item = ({ content }) => {
    const [isDone, setIsDone] = useState(false)
    return (
        <li>
            <input type='checkbox' onChange={() => {
                setIsDone(!isDone)
                console.log(!isDone)
            }} />
            <span style={{ textDecoration: isDone ? "line-through" : "none" }}>
                {content}
            </span>
        </li>
    )
}

export default Item