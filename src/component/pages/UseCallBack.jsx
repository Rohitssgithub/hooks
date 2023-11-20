import React, { useState, useCallback } from 'react'
import Child from '../CallBack/Child'
const UsecallBacks = () => {
    let [todo, setTodo] = useState([])
    let [count, setCount] = useState(0)

    let addTodo = useCallback(() => {
        setTodo([...todo, 'new todo'])
    }, [todo])

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Add Count</button>
            <Child todo={todo} addTodo={addTodo} />
        </>
    )
}

export default UsecallBacks