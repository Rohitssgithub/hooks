import React, { useState, useMemo } from 'react'

const UseMemo = () => {

    const expen = (c) => {
        for (let i = 0; i < 1000000000; i++) {
            c += 1
        }
        return c
    }
    let [todo, setTodo] = useState(['todo'])
    let [count, setCount] = useState(0)

    let cals = useMemo(() => {
        expen(count)
    }, [count])
    return (
        <>
            <p>{cals}</p>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>increse</button>
            <p>{todo}</p>
            <button onClick={() => setTodo([...todo, 'new'])}>add</button>

        </>

    )
}

export default UseMemo