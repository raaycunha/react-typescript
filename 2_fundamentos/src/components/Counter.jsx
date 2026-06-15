import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const countAumentar = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>Você clicou {count}</h1>
            <button onClick={countAumentar}>Clique aqui</button>
        </div>
    )
}

export default Counter