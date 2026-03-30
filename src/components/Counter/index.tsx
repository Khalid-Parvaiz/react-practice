import { useState } from "react"

export default function Counter() {
    const [counter, setCounter] = useState(0)

    const increaseCount = () => {
        setCounter(counter + 1)
    }
    return (
        <>
            <div className="container">
                <h1>Counter</h1>
                <h2>{counter}</h2>
                <button style={{backgroundColor:"red", marginRight:10}} onClick={() => setCounter(0)}>Reset</button>
                <button style={{ width: 100 }} onClick={increaseCount}>Increament</button>
            </div>

        </>

    )
}