import React, { useState, useCallback } from 'react'
import Child from './Child'

const UsecallBacks = () => {
    let [todo, setTodo] = useState([])
    let [count, setCount] = useState(0)


    // const addTodo=()=>{
    //     setTodo([...todo,'new todo'])
    // }

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