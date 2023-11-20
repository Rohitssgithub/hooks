import React, { useState } from 'react';
import Child from '../purecomponent/Child';

const PureComponent = () => {
    let [todo, setTodo] = useState([]);
    let [count, setCount] = useState(0)
    return (
        <>
            <p>{count}</p>
            <button>increase</button>
            <Child todo={todo}></Child>
            <button onClick={() => setTodo([...todo, 'new'])}>add</button>
        </>
    )
}

export default PureComponent