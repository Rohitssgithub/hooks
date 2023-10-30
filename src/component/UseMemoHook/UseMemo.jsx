import React, { useMemo, useState } from 'react';

const expenCalculation = (c) => {
    console.log("called");
    for (let i = 0; i < 1000000000; i++) {
        c += 1;
    }
    return c;
}

const UseMemo = () => {

    let [todo, setTodo] = useState([])
    let [count, setCount] = useState(0)
    let calculation = useMemo(() => expenCalculation(count), [count])
    const handleClick = () => {
        setTodo([...todo, 'new todo'])
    }

    return (
        <>
            <p>{calculation}</p>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Click</button>
            <p>{todo}</p>
            <button onClick={handleClick}>Click</button>
        </>
    )
}

export default UseMemo