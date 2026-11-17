import React, { useState } from 'react'

const CounterAppWithFBC = () => {
    let [count, setCount] = useState(10)

    let increment = () => {
        setCount(count + 1)
    }

    let decrement = () => {
        setCount(count - 1)
    }
    let reset = () => {
        setCount(0)
    }
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterAppWithFBC
