import React, { useState, useContext } from 'react';
import Child from '../purecomponent/Child';

// import { userContext } from '../usecontext/UseContext';
const PureComponent = () => {

    // let { name } = useContext(userContext)
    // console.log('name', name)

    let [count, setCount] = useState(0);
    let [todo, setTodo] = useState([])
    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>click</button>
            <Child todo={todo}></Child>
            <button onClick={() => {
                setTodo([...todo, 'new'])
            }}>click</button>
        </>
    )
}

export default PureComponent