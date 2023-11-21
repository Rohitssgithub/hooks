import React from 'react'
import HighOrderCom from './HighOrderCom'
const ComB = ({ count, handlic }) => {
    return (
        <>
            <p>{count}</p>
            <button onMouseOver={handlic}>click</button>
        </>
    )
}

export default HighOrderCom(ComB)