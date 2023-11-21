import React from 'react'
import HighOrderCom from './HighOrderCom'

const ComA = ({count,handlic}) => {
    return (
        <>
        <p>{count}</p>
        <button onClick={handlic}>click</button>
        </>
    )
}

export default HighOrderCom(ComA)